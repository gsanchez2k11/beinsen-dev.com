import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = process.argv[2] || "public/detalles-maquinas";
const OUTPUT_DIR = process.argv[3] || INPUT_DIR;
const THRESHOLD = parseInt(process.argv[4] || "240"); // 0-255, higher = removes more
const EXTS = [".png", ".jpg", ".jpeg", ".webp"];

// Flood-fill from all edges, marks background pixels
function floodFillBackground(data, width, height, channels, threshold) {
  const visited = new Uint8Array(width * height);
  const queue = [];

  const isBackground = (idx) => {
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    return r >= threshold && g >= threshold && b >= threshold;
  };

  // Seed from all edge pixels
  for (let x = 0; x < width; x++) {
    for (const y of [0, height - 1]) {
      const i = (y * width + x);
      if (!visited[i] && isBackground(i * channels)) {
        visited[i] = 1;
        queue.push(i);
      }
    }
  }
  for (let y = 0; y < height; y++) {
    for (const x of [0, width - 1]) {
      const i = (y * width + x);
      if (!visited[i] && isBackground(i * channels)) {
        visited[i] = 1;
        queue.push(i);
      }
    }
  }

  // BFS flood fill
  while (queue.length > 0) {
    const i = queue.pop();
    const x = i % width;
    const y = Math.floor(i / width);

    for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const ni = ny * width + nx;
      if (!visited[ni] && isBackground(ni * channels)) {
        visited[ni] = 1;
        queue.push(ni);
      }
    }
  }

  return visited;
}

async function removeBackground(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info; // channels = 4 (RGBA)
  const bg = floodFillBackground(data, width, height, channels, THRESHOLD);

  // Make background pixels transparent
  for (let i = 0; i < width * height; i++) {
    if (bg[i]) {
      data[i * channels + 3] = 0; // alpha = 0
    }
  }

  await sharp(Buffer.from(data), { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);
}

const files = (await readdir(INPUT_DIR))
  .filter(f => EXTS.includes(extname(f).toLowerCase()));

if (files.length === 0) {
  console.log(`No images found in ${INPUT_DIR}`);
  process.exit(0);
}

for (const file of files) {
  const input = join(INPUT_DIR, file);
  const outName = basename(file, extname(file)) + ".png";
  const output = join(OUTPUT_DIR, outName);
  process.stdout.write(`  ${file} → ${outName} ... `);
  await removeBackground(input, output);
  console.log("✅");
}

console.log(`\nDone. Processed ${files.length} image(s) with threshold=${THRESHOLD}.`);
console.log("Tip: increase threshold (e.g. 250) to remove more, decrease (e.g. 220) to remove less.");
