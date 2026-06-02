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
                                    <td className="p-4 text-muted-foreground">Envío de los emails generados por los formularios de contacto y reserva hasta el buzón corporativo (info@beinsen.com).</td>
                                    <td className="p-4 text-muted-foreground">Configurable. Ver datos completos solicitándolos a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.</td>
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
                        Si tienes objeciones razonables sobre un nuevo subprocesador, puedes plantearlas en el plazo de 30 días a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>. Si la objeción no puede resolverse, podrás rescindir la relación con Futura Teck respecto de los tratamientos afectados.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SOLICITAR EL CONTRATO DE ENCARGO</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Los Data Processing Agreements (DPA) firmados con cada subprocesador, así como las garantías que amparan las transferencias internacionales (CCT y/o adhesión a marcos de adecuación), están disponibles para clientes con relación contractual o entidades obligadas a auditar la cadena de subencargo (por ejemplo, departamentos de compras de grandes cuentas). Solicítalos por escrito a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
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
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">LIST OF SUBPROCESSORS</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        In compliance with Article 28 of Regulation (EU) 2016/679 (GDPR), <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> publishes the list of providers acting as <span className="font-bold text-foreground">data processors</span> in respect of the personal data collected through beinsen.com.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        Each one is bound by a Data Processing Agreement setting out the processing instructions, the duty of confidentiality, appropriate technical and organisational measures and, where applicable, safeguards for international data transfers.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">CURRENT SUBPROCESSORS</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Provider</th>
                                    <th className="text-left font-bold p-4">Service provided</th>
                                    <th className="text-left font-bold p-4">Location</th>
                                    <th className="text-left font-bold p-4">Transfer safeguards</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Vercel Inc.</td>
                                    <td className="p-4 text-muted-foreground">Website hosting and content delivery via CDN. Receives the visitor's IP and HTTP request logs in order to serve the pages.</td>
                                    <td className="p-4 text-muted-foreground">USA (edge servers in the EU).</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Standard Contractual Clauses (SCC) (Decisión UE 2021/914).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Google LLC</td>
                                    <td className="p-4 text-muted-foreground">Google Analytics 4. Aggregated site usage measurements with IP anonymisation. <span className="font-semibold text-foreground">Only if the user accepts analytics cookies</span> in the banner.</td>
                                    <td className="p-4 text-muted-foreground">USA.</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Standard Contractual Clauses (SCC).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Form SMTP provider</td>
                                    <td className="p-4 text-muted-foreground">Delivery of the emails generated by the contact and booking forms to the corporate mailbox (info@beinsen.com).</td>
                                    <td className="p-4 text-muted-foreground">Configurable. Full details available on request from <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.</td>
                                    <td className="p-4 text-muted-foreground">Data Processing Agreement + (where applicable) SCC.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">BeinsenCare (soporte.beinsen.com)</td>
                                    <td className="p-4 text-muted-foreground">Technical support, product registration and warranty management platform. Receives the data when the customer registers a device. It has its own privacy policy published at soporte.beinsen.com.</td>
                                    <td className="p-4 text-muted-foreground">Spain (EU).</td>
                                    <td className="p-4 text-muted-foreground">N/A (processing within the EU).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">CHANGE NOTIFICATION PROCESS</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        If a new subprocessor is engaged or an existing one is replaced, this page will be updated at least <span className="font-semibold text-foreground">15 calendar days in advance</span> of the effective date of the change. Customers with an active contractual relationship who have requested it in writing will additionally be notified by email at their registered contact address.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        If you have reasonable objections regarding a new subprocessor, you may raise them within 30 days at <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>. If the objection cannot be resolved, you may terminate your relationship with Futura Teck with respect to the affected processing activities.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">REQUESTING THE DATA PROCESSING AGREEMENT</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        The Data Processing Agreements (DPA) signed with each subprocessor, as well as the safeguards covering international transfers (SCC and/or adherence to adequacy frameworks), are available to customers with a contractual relationship or to entities required to audit the chain of subprocessing (for example, procurement departments of large accounts). Request them in writing from <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
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
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">LISTA DE SUBPROCESSADORES</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Em cumprimento do artigo 28.º do Regulamento (UE) 2016/679 (RGPD), a <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> publica a lista de fornecedores que atuam como <span className="font-bold text-foreground">subcontratantes</span> relativamente aos dados pessoais recolhidos através de beinsen.com.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        Cada um deles está vinculado por contrato de subcontratação (Data Processing Agreement) com instruções de tratamento, dever de confidencialidade, medidas técnicas e organizativas adequadas e, quando aplicável, garantias para as transferências internacionais de dados.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SUBPROCESSADORES ATUAIS</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Fornecedor</th>
                                    <th className="text-left font-bold p-4">Serviço prestado</th>
                                    <th className="text-left font-bold p-4">Localização</th>
                                    <th className="text-left font-bold p-4">Garantias de transferência</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Vercel Inc.</td>
                                    <td className="p-4 text-muted-foreground">Alojamento do sítio web e entrega de conteúdos através de CDN. Recebe o IP do visitante e os registos das solicitações HTTP para servir as páginas.</td>
                                    <td className="p-4 text-muted-foreground">EUA (servidores de borda na UE).</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Cláusulas Contratuais-Tipo (Decisión UE 2021/914).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Google LLC</td>
                                    <td className="p-4 text-muted-foreground">Google Analytics 4. Medições agregadas de utilização do sítio com IP anonimizado. <span className="font-semibold text-foreground">Apenas se o utilizador aceitar cookies analíticos</span> no banner.</td>
                                    <td className="p-4 text-muted-foreground">EUA.</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Cláusulas Contratuais-Tipo.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Fornecedor SMTP do formulário</td>
                                    <td className="p-4 text-muted-foreground">Envio dos emails gerados pelos formulários de contacto e reserva para a caixa de correio corporativa (info@beinsen.com).</td>
                                    <td className="p-4 text-muted-foreground">Configurável. Solicite os dados completos a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.</td>
                                    <td className="p-4 text-muted-foreground">Contrato de subcontratação + (se aplicável) Cláusulas Contratuais-Tipo.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">BeinsenCare (soporte.beinsen.com)</td>
                                    <td className="p-4 text-muted-foreground">Plataforma de apoio técnico, registo de produtos e gestão de garantias. Recebe os dados quando o cliente regista um equipamento. Dispõe de política de privacidade própria publicada em soporte.beinsen.com.</td>
                                    <td className="p-4 text-muted-foreground">Espanha (UE).</td>
                                    <td className="p-4 text-muted-foreground">N/A (tratamento dentro da UE).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">PROCESSO DE NOTIFICAÇÃO DE ALTERAÇÕES</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Caso seja contratado um novo subprocessador ou substituído um existente, esta página será atualizada com, pelo menos, <span className="font-semibold text-foreground">15 dias de calendário de antecedência</span> em relação à data efetiva da alteração. Os clientes com relação contratual em vigor que o tenham solicitado por escrito serão adicionalmente notificados por correio eletrónico para o contacto registado.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Caso tenha objeções fundamentadas relativamente a um novo subprocessador, poderá apresentá-las no prazo de 30 dias para <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>. Se a objeção não puder ser resolvida, poderá cessar a relação com a Futura Teck no que respeita aos tratamentos afetados.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SOLICITAR O CONTRATO DE SUBCONTRATAÇÃO</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Os Data Processing Agreements (DPA) celebrados com cada subprocessador, bem como as garantias que abrangem as transferências internacionais (Cláusulas Contratuais-Tipo e/ou adesão a quadros de adequação), encontram-se disponíveis para clientes com relação contratual ou entidades obrigadas a auditar a cadeia de subcontratação (por exemplo, departamentos de compras de grandes contas). Solicite-os por escrito a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
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
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">ELENCO DEI SUBPROCESSORI</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        In ottemperanza all'articolo 28 del Regolamento (UE) 2016/679 (GDPR), <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> pubblica l'elenco dei fornitori che agiscono in qualità di <span className="font-bold text-foreground">responsabili del trattamento</span> rispetto ai dati personali raccolti tramite beinsen.com.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        Ciascuno di essi è vincolato da un contratto di nomina (Data Processing Agreement) che prevede istruzioni di trattamento, obbligo di riservatezza, misure tecniche e organizzative adeguate e, ove ricorra il caso, garanzie per i trasferimenti internazionali di dati.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">SUBPROCESSORI ATTUALI</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Fornitore</th>
                                    <th className="text-left font-bold p-4">Servizio prestato</th>
                                    <th className="text-left font-bold p-4">Ubicazione</th>
                                    <th className="text-left font-bold p-4">Garanzie di trasferimento</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Vercel Inc.</td>
                                    <td className="p-4 text-muted-foreground">Hosting del sito web e distribuzione dei contenuti tramite CDN. Riceve l'IP del visitatore e i log delle richieste HTTP al fine di servire le pagine.</td>
                                    <td className="p-4 text-muted-foreground">USA (server di edge nell'UE).</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Clausole Contrattuali Tipo (Decisión UE 2021/914).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Google LLC</td>
                                    <td className="p-4 text-muted-foreground">Google Analytics 4. Misurazioni aggregate dell'utilizzo del sito con IP anonimizzato. <span className="font-semibold text-foreground">Solo se l'utente accetta i cookie analitici</span> nel banner.</td>
                                    <td className="p-4 text-muted-foreground">USA.</td>
                                    <td className="p-4 text-muted-foreground">EU-US Data Privacy Framework + Clausole Contrattuali Tipo.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">Fornitore SMTP del modulo</td>
                                    <td className="p-4 text-muted-foreground">Invio delle email generate dai moduli di contatto e di prenotazione alla casella di posta aziendale (info@beinsen.com).</td>
                                    <td className="p-4 text-muted-foreground">Configurabile. Dati completi disponibili su richiesta scritta a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.</td>
                                    <td className="p-4 text-muted-foreground">Contratto di nomina + (ove applicabile) Clausole Contrattuali Tipo.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-foreground">BeinsenCare (soporte.beinsen.com)</td>
                                    <td className="p-4 text-muted-foreground">Piattaforma di assistenza tecnica, registrazione dei prodotti e gestione delle garanzie. Riceve i dati nel momento in cui il cliente registra un dispositivo. Dispone di una propria informativa sulla privacy pubblicata su soporte.beinsen.com.</td>
                                    <td className="p-4 text-muted-foreground">Spagna (UE).</td>
                                    <td className="p-4 text-muted-foreground">N/A (trattamento all'interno dell'UE).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">PROCEDURA DI NOTIFICA DELLE MODIFICHE</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Qualora venga incaricato un nuovo subprocessore o ne venga sostituito uno esistente, la presente pagina sarà aggiornata con un preavviso di almeno <span className="font-semibold text-foreground">15 giorni di calendario</span> rispetto alla data effettiva della modifica. I clienti con relazione contrattuale in essere che ne abbiano fatto richiesta per iscritto saranno inoltre notificati via email all'indirizzo di contatto registrato.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        In presenza di obiezioni ragionevoli su un nuovo subprocessore, è possibile sollevarle entro 30 giorni scrivendo a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>. Qualora l'obiezione non possa essere risolta, sarà possibile recedere dal rapporto con Futura Teck limitatamente ai trattamenti interessati.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">RICHIESTA DEL CONTRATTO DI NOMINA</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        I Data Processing Agreements (DPA) sottoscritti con ciascun subprocessore, nonché le garanzie che coprono i trasferimenti internazionali (Clausole Contrattuali Tipo e/o adesione a quadri di adeguatezza), sono disponibili per i clienti con relazione contrattuale o per i soggetti tenuti ad auditare la catena di subincarico (ad esempio, gli uffici acquisti dei grandi account). Richiederli per iscritto a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
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
