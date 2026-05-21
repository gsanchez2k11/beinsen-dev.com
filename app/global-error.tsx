"use client";

// Se activa cuando falla el propio RootLayout (raro pero crítico).
// Tiene que renderizar su propio <html> y <body>.
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="es">
            <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", textAlign: "center", background: "#fff", color: "#111" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1rem" }}>
                    Error inesperado
                </h1>
                <p style={{ color: "#555", marginBottom: "2rem" }}>
                    El sitio no se ha podido cargar correctamente. Recarga la
                    página o vuelve a intentarlo en unos minutos.
                </p>
                {error.digest && (
                    <p style={{ fontSize: "0.75rem", color: "#999", marginBottom: "2rem" }}>
                        Ref: {error.digest}
                    </p>
                )}
                <button
                    onClick={reset}
                    style={{
                        background: "#FF6600",
                        color: "#fff",
                        border: 0,
                        padding: "0.75rem 1.5rem",
                        borderRadius: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                    }}
                >
                    Reintentar
                </button>
            </body>
        </html>
    );
}
