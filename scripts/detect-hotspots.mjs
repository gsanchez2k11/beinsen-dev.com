import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, basename, extname } from "path";

const IMAGES_DIR = "public/detalles-maquinas";

// Detect green pixels: G > 120, G > R*1.5, G > B*1.5
function isGreen(r, g, b) {
  return g > 120 && g > r * 1.5 && g > b * 1.5;
}

// Cluster nearby pixels using simple flood-fill grouping
function clusterPixels(points, minDist = 40) {
  const clusters = [];
  const used = new Set();

  for (let i = 0; i < points.length; i++) {
    if (used.has(i)) continue;
    const cluster = [points[i]];
    used.add(i);
    for (let j = i + 1; j < points.length; j++) {
      if (used.has(j)) continue;
      const dx = points[j].x - points[i].x;
      const dy = points[j].y - points[i].y;
      if (Math.sqrt(dx * dx + dy * dy) < minDist) {
        cluster.push(points[j]);
        used.add(j);
      }
    }
    clusters.push(cluster);
  }
  return clusters;
}

async function detectHotspots(imagePath) {
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const greenPixels = [];

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (isGreen(r, g, b)) {
      const pixelIndex = i / channels;
      greenPixels.push({
        x: pixelIndex % width,
        y: Math.floor(pixelIndex / width),
      });
    }
  }

  if (greenPixels.length === 0) {
    console.log("  ⚠ No se detectaron píxeles verdes.");
    return [];
  }

  const clusters = clusterPixels(greenPixels);

  return clusters.map((cluster) => {
    const cx = cluster.reduce((s, p) => s + p.x, 0) / cluster.length;
    const cy = cluster.reduce((s, p) => s + p.y, 0) / cluster.length;
    return {
      x: parseFloat(((cx / width) * 100).toFixed(1)),
      y: parseFloat(((cy / height) * 100).toFixed(1)),
    };
  }).sort((a, b) => a.y - b.y || a.x - b.x);
}

const files = (await readdir(IMAGES_DIR)).filter(f =>
  [".png", ".jpg", ".jpeg", ".webp"].includes(extname(f).toLowerCase())
);

for (const file of files) {
  const slug = basename(file, extname(file)).replace(/_transparente$/, "");
  console.log(`\n📍 ${slug}`);
  const hotspots = await detectHotspots(join(IMAGES_DIR, file));
  if (hotspots.length > 0) {
    console.log(`   ${hotspots.length} punto(s) detectado(s):`);
    hotspots.forEach((h, i) => {
      console.log(`   [${i + 1}] x: ${h.x}%, y: ${h.y}%`);
    });
    console.log("\n   ✅ Copia esto en products.ts → hotspots:");
    console.log(`   hotspots: [`);
    hotspots.forEach((h, i) => {
      console.log(`     { x: ${h.x}, y: ${h.y}, label: { es: "Punto ${i + 1}", en: "Point ${i + 1}" }, description: { es: "", en: "" } },`);
    });
    console.log(`   ],`);
  }
}
