"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AccesibilidadPage() {
    const { locale } = useLanguage();

    const content: Record<string, React.ReactNode> = {
        es: (
            <>
                <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">DECLARACIÓN DE ACCESIBILIDAD</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> se compromete a hacer accesible el sitio web beinsen.com, de conformidad con el Real Decreto 1112/2018, la Directiva (UE) 2016/2102 y el <span className="font-bold text-foreground">European Accessibility Act</span> (Directiva (UE) 2019/882), en vigor desde el 28 de junio de 2025.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        Nuestro objetivo es que el sitio sea utilizable por el mayor número posible de personas, con independencia de sus capacidades técnicas, cognitivas o físicas. La referencia técnica que aplicamos es la norma <span className="font-bold text-foreground">UNE-EN 301 549 v3.2.1</span> y, en su defecto, <span className="font-bold text-foreground">WCAG 2.1 nivel AA</span>.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SITUACIÓN DE CUMPLIMIENTO</h3>
                    <div className="p-6 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl">
                        <p className="text-sm text-foreground font-semibold mb-2">Parcialmente conforme</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            El sitio web beinsen.com es <span className="font-semibold text-foreground">parcialmente conforme</span> con la norma UNE-EN 301 549 v3.2.1 y con WCAG 2.1 nivel AA debido a las excepciones y faltas de conformidad detalladas en el apartado siguiente.
                        </p>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">CONTENIDOS NO ACCESIBLES</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Los contenidos que se indican a continuación no son accesibles por los motivos que se exponen:
                    </p>
                    <ol className="space-y-4 text-sm text-muted-foreground list-decimal pl-6">
                        <li>
                            <span className="text-foreground font-semibold">Animaciones de interfaz</span>: algunas transiciones (Framer Motion) pueden generar movimiento que no respeta la preferencia <code className="text-xs bg-muted px-1.5 py-0.5 rounded">prefers-reduced-motion</code> en todos los componentes. Carga desproporcionada (no afectan al uso, solo a la experiencia visual).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Galerías de imagen de producto</span>: el texto alternativo describe el producto pero no las variantes visuales concretas (ángulos, detalles).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Vídeos embebidos de YouTube</span> (en artículos del centro de aprendizaje): los subtítulos dependen del autor del vídeo en YouTube y no en todos los casos están en castellano.
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Documentación PDF</span>: los manuales y fichas técnicas descargables en /catalogo no están auditados individualmente para conformidad PDF/UA. Se está revisando.
                        </li>
                    </ol>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">PREPARACIÓN DE LA DECLARACIÓN</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>· <span className="text-foreground font-semibold">Método:</span> autoevaluación realizada por el propio responsable del sitio web.</li>
                        <li>· <span className="text-foreground font-semibold">Herramientas:</span> Google Lighthouse, axe DevTools, comprobaciones manuales con lector de pantalla y navegación por teclado.</li>
                        <li>· <span className="text-foreground font-semibold">Última revisión:</span> 28 de mayo de 2026.</li>
                        <li>· <span className="text-foreground font-semibold">Próxima revisión planificada:</span> 28 de mayo de 2027.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">OBSERVACIONES Y CONTACTO</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Si encuentras un problema de accesibilidad en el sitio, o quieres solicitar un contenido en un formato accesible alternativo, puedes contactarnos por cualquiera de estas vías:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                        <li>· Correo electrónico: <a href="mailto:accesibilidad@beinsen.com" className="text-[#FF6600] hover:underline font-semibold">accesibilidad@beinsen.com</a></li>
                        <li>· Teléfono: <a href="tel:+34968902300" className="text-[#FF6600] hover:underline">+34 968 902 300</a></li>
                        <li>· Correo postal: Av. Alto de las Atalayas, 18 – 30110 Cabezo de Torres (Murcia), España.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Atenderemos tu solicitud en el plazo máximo de 20 días hábiles.
                    </p>
                </section>

                <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-3">
                    <h3 className="text-xl font-bold">PROCEDIMIENTO DE APLICACIÓN</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Si tras presentar una reclamación por accesibilidad consideras que no se ha resuelto adecuadamente, puedes dirigir tu reclamación al órgano competente en materia de accesibilidad. En España, esto se canaliza a través de la <span className="font-semibold text-foreground">Unidad responsable de accesibilidad</span> del organismo correspondiente. Para sitios privados de comercio electrónico, los consumidores pueden adicionalmente presentar reclamación a través del Sistema Arbitral de Consumo o de los servicios de mediación de su comunidad autónoma.
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
        es: { title: "Declaración de Accesibilidad" },
        en: { title: "Accessibility Statement" },
        pt: { title: "Declaração de Acessibilidade" },
        it: { title: "Dichiarazione di Accessibilità" },
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
