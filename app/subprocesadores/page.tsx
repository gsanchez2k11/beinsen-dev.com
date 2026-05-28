"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SubprocesadoresPage() {
    const { locale } = useLanguage();

    const content: Record<string, React.ReactNode> = {
        es: (
            <>
                <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">LISTA DE SUBPROCESADORES</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        En cumplimiento del artículo 28 del Reglamento (UE) 2016/679 (RGPD), <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> publica la lista de proveedores que actúan como <span className="font-bold text-foreground">encargados del tratamiento</span> sobre los datos personales recabados a través de beinsen.com.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        Cada uno está vinculado por contrato de encargo (Data Processing Agreement) con instrucciones de tratamiento, obligación de confidencialidad, medidas técnicas y organizativas adecuadas y, cuando corresponde, garantías para transferencias internacionales de datos.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SUBPROCESADORES ACTUALES</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Proveedor</th>
                                    <th className="text-left font-bold p-4">Servicio prestado</th>
                                    <th className="text-left font-bold p-4">Ubicación</th>
                                    <th className="text-left font-bold p-4">Garantías de transferencia</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Vercel Inc.</td>
                                    <td className="p-4 text-muted-foreground">Alojamiento del sitio web y entrega de contenido a través de CDN. Recibe la IP del visitante y los logs de las peticiones HTTP para servir las páginas.</td>
                                    <td className="p-4 text-muted-foreground">EE.UU. (servidores de borde en la UE).</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Cláusulas Contractuales Tipo (Decisión UE 2021/914).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Google LLC</td>
                                    <td className="p-4 text-muted-foreground">Google Analytics 4. Mediciones agregadas de uso del sitio con IP anonimizada. <span className="font-semibold text-foreground">Sólo si el usuario acepta cookies analíticas</span> en el banner.</td>
                                    <td className="p-4 text-muted-foreground">EE.UU.</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Cláusulas Contractuales Tipo.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Proveedor SMTP del formulario</td>
                                    <td className="p-4 text-muted-foreground">Envío de los emails generados por los formularios de contacto y reserva hasta el buzón corporativo info@beinsen.com / web@futura.es.</td>
                                    <td className="p-4 text-muted-foreground">Configurable. Ver datos completos solicitándolos a <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.</td>
                                    <td className="p-4 text-muted-foreground">Contrato de encargo + (si aplica) CCT.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">BeinsenCare (soporte.beinsen.com)</td>
                                    <td className="p-4 text-muted-foreground">Plataforma de soporte técnico, registro de productos y gestión de garantías. Recibe los datos cuando el cliente registra un equipo. Tiene su propia política de privacidad publicada en soporte.beinsen.com.</td>
                                    <td className="p-4 text-muted-foreground">España (UE).</td>
                                    <td className="p-4 text-muted-foreground">N/A (tratamiento dentro de la UE).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">PROCESO DE NOTIFICACIÓN DE CAMBIOS</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Si se incorpora un nuevo subprocesador o se sustituye uno existente, esta página se actualizará con al menos <span className="font-semibold text-foreground">15 días naturales de antelación</span> a la fecha efectiva del cambio. Los clientes con relación contractual vigente y que lo hayan solicitado por escrito serán notificados adicionalmente por correo electrónico al contacto registrado.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Si tienes objeciones razonables sobre un nuevo subprocesador, puedes plantearlas en el plazo de 30 días a <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>. Si la objeción no puede resolverse, podrás rescindir la relación con Futura Teck respecto de los tratamientos afectados.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SOLICITAR EL CONTRATO DE ENCARGO</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Los Data Processing Agreements (DPA) firmados con cada subprocesador, así como las garantías que amparan las transferencias internacionales (CCT y/o adhesión a marcos de adecuación), están disponibles para clientes con relación contractual o entidades obligadas a auditar la cadena de subencargo (por ejemplo, departamentos de compras de grandes cuentas). Solicítalos por escrito a <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
                    </p>
                </section>

                <footer className="pt-8 border-t border-border">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                        Última actualización: 28 de mayo de 2026
                    </p>
                </footer>
            </>
        ),
    };

    const d = {
        es: { title: "Subprocesadores" },
        en: { title: "Subprocessors" },
        pt: { title: "Subprocessadores" },
        it: { title: "Subprocessori" },
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
