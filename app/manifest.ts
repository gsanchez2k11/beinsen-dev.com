import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Beinsen — Planchas Transfer Profesionales",
        short_name: "Beinsen",
        description: "Fabricante líder de planchas transfer industriales. Sublimación, DTF y vinilo textil. Distribuido en 50+ países desde España.",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#FF6600",
        orientation: "portrait-primary",
        lang: "es",
        scope: "/",
        categories: ["business", "shopping", "productivity"],
        icons: [
            {
                src: "/icon",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
