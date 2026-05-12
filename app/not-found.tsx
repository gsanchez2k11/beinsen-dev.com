import Link from "next/link";
import { ArrowRight, Home, Search, BookOpen, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Página no encontrada | Beinsen",
    description: "La página que buscas no existe. Explora nuestro catálogo de planchas transfer o contacta con nuestro equipo.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-20">
            <div className="max-w-2xl w-full text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-[#FF6600]/10 text-[#FF6600] text-xs font-black uppercase tracking-[0.2em] mb-8 border border-[#FF6600]/20">
                    <Zap size={14} /> Error 404
                </div>

                <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none italic text-[#FF6600] mb-4">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 italic">
                    Página no encontrada
                </h2>

                <p className="text-xl text-muted-foreground font-light max-w-lg mx-auto mb-12 leading-relaxed">
                    La URL que has visitado no existe o ha sido movida. Pero seguro que lo que buscas está aquí abajo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    <Link
                        href="/"
                        className="group flex flex-col items-center gap-3 p-6 bg-card border border-border/40 rounded-3xl hover:border-[#FF6600]/40 hover:bg-[#FF6600]/5 transition-all"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                            <Home size={22} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest">Inicio</span>
                    </Link>

                    <Link
                        href="/planchas"
                        className="group flex flex-col items-center gap-3 p-6 bg-card border border-border/40 rounded-3xl hover:border-[#FF6600]/40 hover:bg-[#FF6600]/5 transition-all"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                            <Search size={22} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest">Catálogo</span>
                    </Link>

                    <Link
                        href="/aprende"
                        className="group flex flex-col items-center gap-3 p-6 bg-card border border-border/40 rounded-3xl hover:border-[#FF6600]/40 hover:bg-[#FF6600]/5 transition-all"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                            <BookOpen size={22} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest">Aprende</span>
                    </Link>
                </div>

                <Link
                    href="/contacto"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6600] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-lg shadow-[#FF6600]/20"
                >
                    Contactar con soporte <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
}
