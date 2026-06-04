import type { NextConfig } from "next";
import { productAliases } from "./lib/productAliases";
import { legacyRedirects } from "./lib/legacyRedirects";

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
    async redirects() {
        return [
            // Compatibilidad con la URL antigua del catálogo (rename /planchas → /catalogo).
            // Cubre tanto /planchas como /planchas/<slug>. El querystring (?type=...) se conserva.
            {
                source: "/planchas",
                destination: "/catalogo",
                permanent: true,
            },
            {
                source: "/planchas/:slug*",
                destination: "/catalogo/:slug*",
                permanent: true,
            },
            // Atajo de marketing al portal de soporte (vive en subdominio).
            // /soporte → https://soporte.beinsen.com/   /soporte/garantia → https://soporte.beinsen.com/garantia
            {
                source: "/soporte",
                destination: "https://soporte.beinsen.com/",
                permanent: true,
            },
            {
                source: "/soporte/:path*",
                destination: "https://soporte.beinsen.com/:path*",
                permanent: true,
            },
            // URLs cortas de marketing: /esparta → /catalogo/esparta-prensa-termica-neumatica
            // 308 permanente; la URL larga sigue siendo la canónica (bueno para SEO).
            ...productAliases.map(({ alias, slug }) => ({
                source: `/${alias}`,
                destination: `/catalogo/${slug}`,
                permanent: true,
            })),
            // URLs heredadas del antiguo Wordpress: redirigen directo al slug canónico
            // sin pasar por el alias corto (un solo salto, mejor para SEO).
            ...legacyRedirects.map(({ from, to }) => ({
                source: `/${from}`,
                destination: to,
                permanent: true,
            })),
        ];
    },
};

export default nextConfig;
