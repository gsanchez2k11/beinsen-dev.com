"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { clearConsent, getConsent } from "@/lib/consent";

export default function CookiesPage() {
    const { locale } = useLanguage();
    const [reset, setReset] = useState<string | null>(null);

    const handleReset = () => {
        clearConsent();
        setReset(getConsent() === null ? "ok" : "fail");
    };

    const content: Record<string, React.ReactNode> = {
        es: (
            <>
                <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">POLÍTICA DE COOKIES</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        En cumplimiento del artículo 22.2 de la Ley 34/2002 (LSSI-CE) y del Reglamento (UE) 2016/679 (RGPD), <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> (CIF B30507743), titular de beinsen.com, informa a los usuarios sobre el uso de cookies en este sitio web.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">¿QUÉ SON LAS COOKIES?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Una cookie es un pequeño archivo de texto que un sitio web guarda en el navegador del visitante. Permite recordar información sobre la sesión (por ejemplo, idioma preferido o si ya se ha mostrado el aviso de cookies) y, en algunos casos, recopilar datos de uso de forma agregada.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">TIPOS DE COOKIES UTILIZADAS</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Beinsen.com utiliza únicamente las cookies estrictamente necesarias para el funcionamiento del sitio (no requieren consentimiento) y, si el usuario lo acepta expresamente, cookies analíticas de Google Analytics con IP anonimizada.
                    </p>

                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Nombre</th>
                                    <th className="text-left font-bold p-4">Tipo</th>
                                    <th className="text-left font-bold p-4">Finalidad</th>
                                    <th className="text-left font-bold p-4">Duración</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_cookie_consent</td>
                                    <td className="p-4">Técnica</td>
                                    <td className="p-4 text-muted-foreground">Recordar la elección del usuario sobre el aviso de cookies.</td>
                                    <td className="p-4">1 año</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_locale</td>
                                    <td className="p-4">Técnica</td>
                                    <td className="p-4 text-muted-foreground">Recordar el idioma seleccionado por el usuario.</td>
                                    <td className="p-4">1 año</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_ga / _ga_*</td>
                                    <td className="p-4">Analítica (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Generar un identificador anónimo de visitante para medir tráfico agregado. Solo se carga si el usuario acepta todas las cookies. IP anonimizada.</td>
                                    <td className="p-4">2 años</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_gid</td>
                                    <td className="p-4">Analítica (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Distinguir usuarios durante 24 h. Solo si el usuario acepta todas las cookies.</td>
                                    <td className="p-4">24 horas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-xs text-muted-foreground italic mt-4">
                        Las cookies analíticas se cargan únicamente tras la aceptación expresa del usuario mediante el banner de cookies. Si el usuario elige &quot;Solo necesarias&quot; o cierra el aviso, Google Analytics no se inicializa.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">RETIRAR O MODIFICAR EL CONSENTIMIENTO</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Puedes revocar tu consentimiento en cualquier momento. Al hacerlo, se eliminará tu elección guardada y volverá a mostrarse el banner en la próxima navegación.
                    </p>
                    <button
                        onClick={handleReset}
                        className="mt-2 px-6 py-3 rounded-xl bg-[#FF6600] text-white font-bold text-sm hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/20"
                    >
                        Revocar consentimiento
                    </button>
                    {reset === "ok" && (
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2">
                            ✓ Consentimiento revocado. El banner volverá a aparecer al recargar la página.
                        </p>
                    )}
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">GESTIÓN DESDE EL NAVEGADOR</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Adicionalmente, puedes bloquear o eliminar las cookies desde la configuración de tu navegador. Algunas funcionalidades del sitio pueden verse afectadas si se desactivan las cookies técnicas.
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-firefox-escritorio" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Apple Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Microsoft Edge</a></li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">TRANSFERENCIAS INTERNACIONALES DE DATOS</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Google Analytics es un servicio de Google LLC. Cuando aceptas las cookies analíticas, los datos pueden transferirse a servidores ubicados fuera del Espacio Económico Europeo, con las garantías adecuadas previstas en los arts. 44 y siguientes del RGPD (cláusulas contractuales tipo de la Comisión Europea).
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">CAMBIOS EN ESTA POLÍTICA</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Esta política puede actualizarse para adaptarse a cambios legislativos, técnicos o a la incorporación de nuevos servicios. La fecha de la última actualización figura al pie.
                    </p>
                </section>

                <footer className="pt-8 border-t border-border">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                        Versión 1.0 — Última actualización: 28 de mayo de 2026
                    </p>
                </footer>
            </>
        ),
    };

    const d = {
        es: { title: "Política de Cookies" },
        en: { title: "Cookie Policy" },
        pt: { title: "Política de Cookies" },
        it: { title: "Informativa Cookie" },
    }[locale] || { es: {} }.es;

    return (
        <div className="min-h-screen bg-background pb-24 selection:bg-[#FF6600] selection:text-white">
            <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <header className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                        {d.title}
                    </h1>
                    <div className="w-20 h-1.5 bg-[#FF6600] rounded-full" />
                </header>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    {content[locale] || content.es}
                </div>
            </div>
        </div>
    );
}
