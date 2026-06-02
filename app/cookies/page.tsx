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
                        Versión 1.0 — Última actualización: 2 de junio de 2026
                    </p>
                </footer>
            </>
        ),
        en: (
            <>
                <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">COOKIE POLICY</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        In compliance with Article 22.2 of Spanish Act 34/2002 (LSSI-CE, Spanish Information Society Services Act) and Regulation (EU) 2016/679 (GDPR), <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> (VAT B30507743), owner of beinsen.com, hereby informs users about the use of cookies on this website.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">WHAT ARE COOKIES?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        A cookie is a small text file that a website stores on the visitor's browser. It enables the website to remember information about the session (for example, the preferred language or whether the cookie notice has already been shown) and, in some cases, to collect usage data in aggregated form.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">TYPES OF COOKIES USED</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Beinsen.com only uses cookies that are strictly necessary for the operation of the website (which do not require consent) and, if the user expressly accepts, Google Analytics analytical cookies with IP anonymisation.
                    </p>

                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Name</th>
                                    <th className="text-left font-bold p-4">Type</th>
                                    <th className="text-left font-bold p-4">Purpose</th>
                                    <th className="text-left font-bold p-4">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_cookie_consent</td>
                                    <td className="p-4">Technical</td>
                                    <td className="p-4 text-muted-foreground">Remembers the user's choice regarding the cookie notice.</td>
                                    <td className="p-4">1 year</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_locale</td>
                                    <td className="p-4">Technical</td>
                                    <td className="p-4 text-muted-foreground">Remembers the language selected by the user.</td>
                                    <td className="p-4">1 year</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_ga / _ga_*</td>
                                    <td className="p-4">Analytics (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Generates an anonymous visitor identifier to measure aggregate traffic. Only loaded if the user accepts all cookies. IP anonymised.</td>
                                    <td className="p-4">2 years</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_gid</td>
                                    <td className="p-4">Analytics (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Distinguishes users for 24 hours. Only if the user accepts all cookies.</td>
                                    <td className="p-4">24 hours</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-xs text-muted-foreground italic mt-4">
                        Analytical cookies are only loaded after the user expressly accepts them via the cookie banner. If the user chooses &quot;Only necessary&quot; or dismisses the notice, Google Analytics will not be initialised.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">WITHDRAW OR MODIFY CONSENT</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        You may withdraw your consent at any time. Doing so will delete your saved choice and the banner will be shown again on the next visit.
                    </p>
                    <button
                        onClick={handleReset}
                        className="mt-2 px-6 py-3 rounded-xl bg-[#FF6600] text-white font-bold text-sm hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/20"
                    >
                        Withdraw consent
                    </button>
                    {reset === "ok" && (
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2">
                            ✓ Consent withdrawn. The banner will reappear when the page is reloaded.
                        </p>
                    )}
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">BROWSER-LEVEL MANAGEMENT</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        You may also block or delete cookies from your browser settings. Some features of the site may be affected if technical cookies are disabled.
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-firefox-escritorio" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Apple Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Microsoft Edge</a></li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">INTERNATIONAL DATA TRANSFERS</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Google Analytics is a service provided by Google LLC. When you accept analytical cookies, data may be transferred to servers located outside the European Economic Area, subject to the appropriate safeguards set out in Articles 44 et seq. of the GDPR (Standard Contractual Clauses adopted by the European Commission).
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">CHANGES TO THIS POLICY</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        This policy may be updated to reflect legislative or technical changes, or the incorporation of new services. The date of the latest update is shown at the bottom.
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
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">POLÍTICA DE COOKIES</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Em cumprimento do artigo 22.2 da Lei 34/2002 (LSSI-CE, Lei dos Serviços da Sociedade da Informação espanhola) e do Regulamento (UE) 2016/679 (RGPD), a <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> (NIF B30507743), titular de beinsen.com, informa os utilizadores sobre a utilização de cookies neste sítio web.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">O QUE SÃO COOKIES?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Uma cookie é um pequeno ficheiro de texto que um sítio web guarda no navegador do visitante. Permite recordar informação sobre a sessão (por exemplo, o idioma preferido ou se o aviso de cookies já foi apresentado) e, em alguns casos, recolher dados de utilização de forma agregada.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">TIPOS DE COOKIES UTILIZADAS</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Beinsen.com utiliza unicamente as cookies estritamente necessárias para o funcionamento do sítio (não requerem consentimento) e, se o utilizador o aceitar expressamente, cookies analíticas do Google Analytics com IP anonimizado.
                    </p>

                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Nome</th>
                                    <th className="text-left font-bold p-4">Tipo</th>
                                    <th className="text-left font-bold p-4">Finalidade</th>
                                    <th className="text-left font-bold p-4">Duração</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_cookie_consent</td>
                                    <td className="p-4">Técnica</td>
                                    <td className="p-4 text-muted-foreground">Recordar a escolha do utilizador sobre o aviso de cookies.</td>
                                    <td className="p-4">1 ano</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_locale</td>
                                    <td className="p-4">Técnica</td>
                                    <td className="p-4 text-muted-foreground">Recordar o idioma selecionado pelo utilizador.</td>
                                    <td className="p-4">1 ano</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_ga / _ga_*</td>
                                    <td className="p-4">Analítica (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Gerar um identificador anónimo de visitante para medir o tráfego agregado. Apenas é carregada se o utilizador aceitar todas as cookies. IP anonimizado.</td>
                                    <td className="p-4">2 anos</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_gid</td>
                                    <td className="p-4">Analítica (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Distinguir utilizadores durante 24 h. Apenas se o utilizador aceitar todas as cookies.</td>
                                    <td className="p-4">24 horas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-xs text-muted-foreground italic mt-4">
                        As cookies analíticas são carregadas unicamente após a aceitação expressa do utilizador através do banner de cookies. Se o utilizador escolher &quot;Apenas as necessárias&quot; ou fechar o aviso, o Google Analytics não é inicializado.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">RETIRAR OU MODIFICAR O CONSENTIMENTO</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Pode revogar o seu consentimento em qualquer momento. Ao fazê-lo, a sua escolha guardada será eliminada e o banner voltará a ser apresentado na próxima navegação.
                    </p>
                    <button
                        onClick={handleReset}
                        className="mt-2 px-6 py-3 rounded-xl bg-[#FF6600] text-white font-bold text-sm hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/20"
                    >
                        Revogar consentimento
                    </button>
                    {reset === "ok" && (
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2">
                            ✓ Consentimento revogado. O banner voltará a aparecer ao recarregar a página.
                        </p>
                    )}
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">GESTÃO A PARTIR DO NAVEGADOR</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Adicionalmente, pode bloquear ou eliminar as cookies a partir da configuração do seu navegador. Algumas funcionalidades do sítio podem ser afetadas se as cookies técnicas forem desativadas.
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-firefox-escritorio" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Apple Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Microsoft Edge</a></li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">TRANSFERÊNCIAS INTERNACIONAIS DE DADOS</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        O Google Analytics é um serviço da Google LLC. Quando aceita as cookies analíticas, os dados podem ser transferidos para servidores localizados fora do Espaço Económico Europeu, com as garantias adequadas previstas nos arts. 44.º e seguintes do RGPD (cláusulas contratuais-tipo da Comissão Europeia).
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">ALTERAÇÕES A ESTA POLÍTICA</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Esta política pode ser atualizada para se adaptar a alterações legislativas, técnicas ou à incorporação de novos serviços. A data da última atualização figura no rodapé.
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
                    <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">INFORMATIVA COOKIE</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        In ottemperanza all'articolo 22.2 della Legge 34/2002 (LSSI-CE, Legge spagnola sui Servizi della Società dell'Informazione) e al Regolamento (UE) 2016/679 (GDPR), <span className="font-bold text-foreground">Futura Teck de Murcia S.L.U.</span> (P. IVA B30507743), titolare di beinsen.com, informa gli utenti sull'uso dei cookie in questo sito web.
                    </p>
                </div>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">COSA SONO I COOKIE?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Un cookie è un piccolo file di testo che un sito web memorizza nel browser del visitatore. Consente di ricordare informazioni sulla sessione (ad esempio, la lingua preferita o se l'avviso sui cookie è già stato mostrato) e, in alcuni casi, di raccogliere dati di utilizzo in forma aggregata.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">TIPI DI COOKIE UTILIZZATI</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Beinsen.com utilizza esclusivamente i cookie strettamente necessari al funzionamento del sito (che non richiedono il consenso) e, qualora l'utente lo accetti espressamente, cookie analitici di Google Analytics con IP anonimizzato.
                    </p>

                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                            <thead className="bg-muted/40">
                                <tr>
                                    <th className="text-left font-bold p-4">Nome</th>
                                    <th className="text-left font-bold p-4">Tipo</th>
                                    <th className="text-left font-bold p-4">Finalità</th>
                                    <th className="text-left font-bold p-4">Durata</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_cookie_consent</td>
                                    <td className="p-4">Tecnico</td>
                                    <td className="p-4 text-muted-foreground">Ricorda la scelta dell'utente in merito all'avviso sui cookie.</td>
                                    <td className="p-4">1 anno</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">beinsen_locale</td>
                                    <td className="p-4">Tecnico</td>
                                    <td className="p-4 text-muted-foreground">Ricorda la lingua selezionata dall'utente.</td>
                                    <td className="p-4">1 anno</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_ga / _ga_*</td>
                                    <td className="p-4">Analitico (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Genera un identificativo anonimo del visitatore per misurare il traffico aggregato. Caricato solo se l'utente accetta tutti i cookie. IP anonimizzato.</td>
                                    <td className="p-4">2 anni</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-xs">_gid</td>
                                    <td className="p-4">Analitico (Google Analytics)</td>
                                    <td className="p-4 text-muted-foreground">Distingue gli utenti per 24 ore. Solo se l'utente accetta tutti i cookie.</td>
                                    <td className="p-4">24 ore</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-xs text-muted-foreground italic mt-4">
                        I cookie analitici vengono caricati unicamente dopo l'accettazione espressa dell'utente tramite il banner dei cookie. Se l'utente sceglie &quot;Solo necessari&quot; o chiude l'avviso, Google Analytics non viene inizializzato.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">REVOCARE O MODIFICARE IL CONSENSO</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Puoi revocare il tuo consenso in qualsiasi momento. In tal caso, la tua scelta salvata verrà eliminata e il banner verrà nuovamente visualizzato alla successiva navigazione.
                    </p>
                    <button
                        onClick={handleReset}
                        className="mt-2 px-6 py-3 rounded-xl bg-[#FF6600] text-white font-bold text-sm hover:bg-[#cc5200] transition-all shadow-lg shadow-[#FF6600]/20"
                    >
                        Revoca consenso
                    </button>
                    {reset === "ok" && (
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2">
                            ✓ Consenso revocato. Il banner ricomparirà al ricaricamento della pagina.
                        </p>
                    )}
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">GESTIONE DAL BROWSER</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        In aggiunta, puoi bloccare o eliminare i cookie dalle impostazioni del tuo browser. Alcune funzionalità del sito potrebbero risentirne se i cookie tecnici vengono disattivati.
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-firefox-escritorio" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Apple Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">Microsoft Edge</a></li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">TRASFERIMENTI INTERNAZIONALI DI DATI</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Google Analytics è un servizio di Google LLC. Quando accetti i cookie analitici, i dati possono essere trasferiti su server situati al di fuori dello Spazio Economico Europeo, con le garanzie adeguate previste dagli artt. 44 e seguenti del GDPR (clausole contrattuali tipo della Commissione Europea).
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h3 className="text-xl font-bold">MODIFICHE ALLA PRESENTE INFORMATIVA</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        La presente informativa può essere aggiornata per adeguarla a modifiche legislative, tecniche o all'introduzione di nuovi servizi. La data dell'ultimo aggiornamento è riportata in calce.
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
