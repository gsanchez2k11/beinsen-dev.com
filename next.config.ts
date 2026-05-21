import type { NextConfig } from "next";

// Cabeceras de seguridad aplicadas a todas las rutas. Si más adelante
// se añade un proveedor externo (chat, mapa, etc.) habrá que ampliar
// `script-src` / `connect-src` en la CSP.
const securityHeaders = [
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
    },
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
];

const nextConfig: NextConfig = {
    images: {
        // Formatos modernos servidos primero (Next.js negocia con el navegador)
        formats: ["image/avif", "image/webp"],
        // Cache de 1 año para las imágenes optimizadas
        minimumCacheTTL: 60 * 60 * 24 * 365,
        remotePatterns: [
            { protocol: "https", hostname: "beinsen.com" },
            { protocol: "https", hostname: "dev.beinsen.com" },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "tiendasublimacion.com" },
        ],
    },
    experimental: {
        // Reduce significativamente el bundle JS de paquetes con muchos exports
        optimizePackageImports: ["lucide-react", "framer-motion"],
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
