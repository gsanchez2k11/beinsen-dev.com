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
                        <li>· Correo electrónico: <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline font-semibold">info@beinsen.com</a></li>
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
                        Versión 1.0 — Última actualización: 2 de junio de 2026
                    </p>
                </footer>
            </>
        ),
        en: (
            <>
                <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">ACCESSIBILITY STATEMENT</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> is committed to making the website beinsen.com accessible, in accordance with Real Decreto 1112/2018, Directiva (UE) 2016/2102 and the <span className="font-bold text-foreground">European Accessibility Act</span> (Directiva (UE) 2019/882), in force since 28 June 2025.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        Our goal is for the site to be usable by the largest possible number of people, regardless of their technical, cognitive or physical abilities. The technical reference we apply is the standard <span className="font-bold text-foreground">UNE-EN 301 549 v3.2.1</span> and, failing that, <span className="font-bold text-foreground">WCAG 2.1 level AA</span>.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">COMPLIANCE STATUS</h3>
                    <div className="p-6 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl">
                        <p className="text-sm text-foreground font-semibold mb-2">Partially compliant</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The website beinsen.com is <span className="font-semibold text-foreground">partially compliant</span> with the standard UNE-EN 301 549 v3.2.1 and with WCAG 2.1 level AA due to the exceptions and lack of conformity detailed in the following section.
                        </p>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">NON-ACCESSIBLE CONTENT</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The content listed below is not accessible for the reasons set out:
                    </p>
                    <ol className="space-y-4 text-sm text-muted-foreground list-decimal pl-6">
                        <li>
                            <span className="text-foreground font-semibold">Interface animations</span>: some transitions (Framer Motion) may generate motion that does not respect the <code className="text-xs bg-muted px-1.5 py-0.5 rounded">prefers-reduced-motion</code> preference in all components. Disproportionate burden (does not affect use, only the visual experience).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Product image galleries</span>: the alternative text describes the product but not the specific visual variants (angles, details).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Embedded YouTube videos</span> (in learning centre articles): subtitles depend on the video author on YouTube and are not in Spanish in all cases.
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">PDF documentation</span>: the manuals and technical datasheets downloadable from /catalogo have not been individually audited for PDF/UA conformity. This is being reviewed.
                        </li>
                    </ol>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">PREPARATION OF THE STATEMENT</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>· <span className="text-foreground font-semibold">Method:</span> self-assessment carried out by the website owner.</li>
                        <li>· <span className="text-foreground font-semibold">Tools:</span> Google Lighthouse, axe DevTools, manual checks with screen reader and keyboard navigation.</li>
                        <li>· <span className="text-foreground font-semibold">Last review:</span> 28 May 2026.</li>
                        <li>· <span className="text-foreground font-semibold">Next scheduled review:</span> 28 May 2027.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">OBSERVATIONS AND CONTACT</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        If you find an accessibility problem on the site, or wish to request content in an alternative accessible format, you can contact us through any of the following channels:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                        <li>· Email: <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline font-semibold">info@beinsen.com</a></li>
                        <li>· Telephone: <a href="tel:+34968902300" className="text-[#FF6600] hover:underline">+34 968 902 300</a></li>
                        <li>· Postal address: Av. Alto de las Atalayas, 18 – 30110 Cabezo de Torres (Murcia), Spain.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        We will respond to your request within a maximum of 20 working days.
                    </p>
                </section>

                <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-3">
                    <h3 className="text-xl font-bold">ENFORCEMENT PROCEDURE</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        If, after submitting an accessibility complaint, you consider that it has not been adequately resolved, you may direct your complaint to the body competent in accessibility matters. In Spain, this is channelled through the <span className="font-semibold text-foreground">Accessibility Unit</span> of the corresponding body. For private e-commerce sites, consumers may additionally file a complaint through the Consumer Arbitration System or the mediation services of their autonomous community.
                    </p>
                </section>

                <footer className="pt-8 border-t border-border">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                        Version 1.0 — Last updated: 2 June 2026
                    </p>
                </footer>
            </>
        ),
        pt: (
            <>
                <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">DECLARAÇÃO DE ACESSIBILIDADE</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        A <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> compromete-se a tornar acessível o sítio web beinsen.com, em conformidade com o Real Decreto 1112/2018, a Directiva (UE) 2016/2102 e o <span className="font-bold text-foreground">European Accessibility Act</span> (Directiva (UE) 2019/882), em vigor desde 28 de junho de 2025.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        O nosso objetivo é que o sítio seja utilizável pelo maior número possível de pessoas, independentemente das suas capacidades técnicas, cognitivas ou físicas. A referência técnica que aplicamos é a norma <span className="font-bold text-foreground">UNE-EN 301 549 v3.2.1</span> e, na sua falta, as <span className="font-bold text-foreground">WCAG 2.1 nível AA</span>.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SITUAÇÃO DE CONFORMIDADE</h3>
                    <div className="p-6 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl">
                        <p className="text-sm text-foreground font-semibold mb-2">Parcialmente em conformidade</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            O sítio web beinsen.com está <span className="font-semibold text-foreground">parcialmente em conformidade</span> com a norma UNE-EN 301 549 v3.2.1 e com as WCAG 2.1 nível AA devido às exceções e faltas de conformidade detalhadas na secção seguinte.
                        </p>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">CONTEÚDOS NÃO ACESSÍVEIS</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Os conteúdos indicados abaixo não são acessíveis pelos motivos que se expõem:
                    </p>
                    <ol className="space-y-4 text-sm text-muted-foreground list-decimal pl-6">
                        <li>
                            <span className="text-foreground font-semibold">Animações de interface</span>: algumas transições (Framer Motion) podem gerar movimento que não respeita a preferência <code className="text-xs bg-muted px-1.5 py-0.5 rounded">prefers-reduced-motion</code> em todos os componentes. Encargo desproporcionado (não afeta a utilização, apenas a experiência visual).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Galerias de imagens de produto</span>: o texto alternativo descreve o produto mas não as variantes visuais concretas (ângulos, pormenores).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Vídeos incorporados do YouTube</span> (em artigos do centro de aprendizagem): as legendas dependem do autor do vídeo no YouTube e nem sempre estão em castelhano.
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Documentação PDF</span>: os manuais e fichas técnicas descarregáveis em /catalogo não foram auditados individualmente quanto à conformidade PDF/UA. Está em revisão.
                        </li>
                    </ol>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">PREPARAÇÃO DA DECLARAÇÃO</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>· <span className="text-foreground font-semibold">Método:</span> autoavaliação realizada pelo próprio responsável do sítio web.</li>
                        <li>· <span className="text-foreground font-semibold">Ferramentas:</span> Google Lighthouse, axe DevTools, verificações manuais com leitor de ecrã e navegação por teclado.</li>
                        <li>· <span className="text-foreground font-semibold">Última revisão:</span> 28 de maio de 2026.</li>
                        <li>· <span className="text-foreground font-semibold">Próxima revisão planeada:</span> 28 de maio de 2027.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">OBSERVAÇÕES E CONTACTO</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Se encontrar um problema de acessibilidade no sítio, ou pretender solicitar um conteúdo num formato acessível alternativo, pode contactar-nos por qualquer das seguintes vias:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                        <li>· Correio eletrónico: <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline font-semibold">info@beinsen.com</a></li>
                        <li>· Telefone: <a href="tel:+34968902300" className="text-[#FF6600] hover:underline">+34 968 902 300</a></li>
                        <li>· Correio postal: Av. Alto de las Atalayas, 18 – 30110 Cabezo de Torres (Murcia), Espanha.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Responderemos ao seu pedido no prazo máximo de 20 dias úteis.
                    </p>
                </section>

                <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-3">
                    <h3 className="text-xl font-bold">PROCEDIMENTO DE APLICAÇÃO</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Se, após apresentar uma reclamação de acessibilidade, considerar que não foi adequadamente resolvida, pode dirigir a sua reclamação ao órgão competente em matéria de acessibilidade. Em Espanha, esta é canalizada através da <span className="font-semibold text-foreground">Unidade responsável pela acessibilidade</span> do organismo correspondente. Para sítios privados de comércio eletrónico, os consumidores podem ainda apresentar reclamação através do Sistema Arbitral de Consumo ou dos serviços de mediação da sua comunidade autónoma.
                    </p>
                </section>

                <footer className="pt-8 border-t border-border">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                        Versão 1.0 — Última atualização: 2 de junho de 2026
                    </p>
                </footer>
            </>
        ),
        it: (
            <>
                <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">DICHIARAZIONE DI ACCESSIBILITÀ</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> si impegna a rendere accessibile il sito web beinsen.com, in conformità con il Real Decreto 1112/2018, la Directiva (UE) 2016/2102 e l'<span className="font-bold text-foreground">European Accessibility Act</span> (Directiva (UE) 2019/882), in vigore dal 28 giugno 2025.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        Il nostro obiettivo è che il sito sia utilizzabile dal maggior numero possibile di persone, indipendentemente dalle loro capacità tecniche, cognitive o fisiche. Il riferimento tecnico che applichiamo è la norma <span className="font-bold text-foreground">UNE-EN 301 549 v3.2.1</span> e, in mancanza, <span className="font-bold text-foreground">WCAG 2.1 livello AA</span>.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">STATO DI CONFORMITÀ</h3>
                    <div className="p-6 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl">
                        <p className="text-sm text-foreground font-semibold mb-2">Parzialmente conforme</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Il sito web beinsen.com è <span className="font-semibold text-foreground">parzialmente conforme</span> alla norma UNE-EN 301 549 v3.2.1 e alle WCAG 2.1 livello AA a causa delle eccezioni e delle non conformità dettagliate nella sezione seguente.
                        </p>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">CONTENUTI NON ACCESSIBILI</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        I contenuti indicati di seguito non sono accessibili per i motivi esposti:
                    </p>
                    <ol className="space-y-4 text-sm text-muted-foreground list-decimal pl-6">
                        <li>
                            <span className="text-foreground font-semibold">Animazioni dell'interfaccia</span>: alcune transizioni (Framer Motion) possono generare movimento che non rispetta la preferenza <code className="text-xs bg-muted px-1.5 py-0.5 rounded">prefers-reduced-motion</code> in tutti i componenti. Onere sproporzionato (non incide sull'uso, solo sull'esperienza visiva).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Gallerie di immagini di prodotto</span>: il testo alternativo descrive il prodotto ma non le specifiche varianti visive (angolazioni, dettagli).
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Video YouTube incorporati</span> (in articoli del centro di apprendimento): i sottotitoli dipendono dall'autore del video su YouTube e non sono in tutti i casi in castigliano.
                        </li>
                        <li>
                            <span className="text-foreground font-semibold">Documentazione PDF</span>: i manuali e le schede tecniche scaricabili da /catalogo non sono stati sottoposti a verifica individuale per la conformità PDF/UA. È in corso una revisione.
                        </li>
                    </ol>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">PREPARAZIONE DELLA DICHIARAZIONE</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>· <span className="text-foreground font-semibold">Metodo:</span> autovalutazione effettuata dal responsabile del sito web.</li>
                        <li>· <span className="text-foreground font-semibold">Strumenti:</span> Google Lighthouse, axe DevTools, verifiche manuali con screen reader e navigazione da tastiera.</li>
                        <li>· <span className="text-foreground font-semibold">Ultima revisione:</span> 28 maggio 2026.</li>
                        <li>· <span className="text-foreground font-semibold">Prossima revisione pianificata:</span> 28 maggio 2027.</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">OSSERVAZIONI E CONTATTI</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Se riscontri un problema di accessibilità sul sito, o desideri richiedere un contenuto in un formato accessibile alternativo, puoi contattarci attraverso uno dei seguenti canali:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                        <li>· Posta elettronica: <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline font-semibold">info@beinsen.com</a></li>
                        <li>· Telefono: <a href="tel:+34968902300" className="text-[#FF6600] hover:underline">+34 968 902 300</a></li>
                        <li>· Indirizzo postale: Av. Alto de las Atalayas, 18 – 30110 Cabezo de Torres (Murcia), Spagna.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Risponderemo alla tua richiesta entro un massimo di 20 giorni lavorativi.
                    </p>
                </section>

                <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-3">
                    <h3 className="text-xl font-bold">PROCEDURA DI ATTUAZIONE</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Se, dopo aver presentato un reclamo per accessibilità, ritieni che non sia stato risolto adeguatamente, puoi indirizzare il tuo reclamo all'organo competente in materia di accessibilità. In Spagna, ciò avviene attraverso l'<span className="font-semibold text-foreground">Unità responsabile dell'accessibilità</span> dell'organismo corrispondente. Per i siti privati di commercio elettronico, i consumatori possono inoltre presentare reclamo tramite il Sistema Arbitrale di Consumo o i servizi di mediazione della propria comunità autonoma.
                    </p>
                </section>

                <footer className="pt-8 border-t border-border">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                        Versione 1.0 — Ultimo aggiornamento: 2 giugno 2026
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
