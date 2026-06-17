import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
import { productAliases } from "./lib/productAliases";
import { legacyRedirects } from "./lib/legacyRedirects";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

// Cabeceras de seguridad aplicadas a todas las rutas. Si más adelante
// se añade un proveedor externo (chat, mapa, etc.) habrá que ampliar
// `script-src` / `connect-src` / `frame-src` en la CSP.
const cspDirectives = [
    "default-src 'self'",
    // 'unsafe-inline' y 'unsafe-eval' son necesarios para Next.js (hidratación
    // y algunos scripts inline de Image/Script). Si en el futuro Next ofrece
    // una alternativa con nonce, sustituir aqui.
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    // Inline styles de Tailwind/JSX requieren 'unsafe-inline'.
    "style-src 'self' 'unsafe-inline'",
    // Imagenes propias + las externas que ya whitelistamos en images.remotePatterns.
    "img-src 'self' data: blob: https://beinsen.com https://dev.beinsen.com https://tiendasublimacion.com https://images.unsplash.com",
    "font-src 'self' data:",
    // El formulario de contacto golpea nuestra propia /api/contact.
    "connect-src 'self'",
    // Videos en fichas se cargan via iframe a YouTube/Vimeo.
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com",
    // Evita que beinsen.com pueda incrustrarse en otra web (clickjacking).
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    // Forzar HTTPS para cualquier recurso cargado por la pagina.
    "upgrade-insecure-requests",
].join("; ");

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
    {
        key: "Content-Security-Policy",
        value: cspDirectives,
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

export default withBundleAnalyzer(nextConfig);
