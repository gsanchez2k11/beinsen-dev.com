"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Logging server-side (Vercel captura console.error)
        console.error("[app error]", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FF6600]/10 flex items-center justify-center text-[#FF6600] mb-8">
                    <AlertTriangle size={28} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4">
                    Algo ha fallado
                </h1>
                <p className="text-base md:text-lg text-muted-foreground font-light mb-10">
                    Se ha producido un error inesperado al cargar esta página.
                    Hemos registrado el problema. Puedes intentarlo de nuevo o
                    volver al inicio.
                </p>
                {error.digest && (
                    <p className="text-xs font-mono text-muted-foreground/50 mb-8">
                        Ref: {error.digest}
                    </p>
                )}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FF6600] text-white font-black uppercase tracking-widest text-xs hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/30"
                    >
                        <RotateCcw size={14} />
                        Reintentar
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-border/60 text-foreground font-black uppercase tracking-widest text-xs hover:bg-muted/40 transition-all"
                    >
                        <Home size={14} />
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
