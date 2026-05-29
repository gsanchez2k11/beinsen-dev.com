"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  const content: Record<string, React.ReactNode> = {
    es: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">1.- RESPONSABLE DEL TRATAMIENTO</h2>
          <div className="p-6 bg-muted/30 rounded-2xl border border-border/50 space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p><span className="font-semibold text-foreground">Identidad:</span> Futura Teck de Murcia S.L.U. (en adelante, &quot;Futura Teck&quot;).</p>
            <p><span className="font-semibold text-foreground">CIF:</span> B30507743.</p>
            <p><span className="font-semibold text-foreground">Domicilio:</span> Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), España.</p>
            <p><span className="font-semibold text-foreground">Teléfono:</span> +34 968 902 300.</p>
            <p><span className="font-semibold text-foreground">Email de privacidad:</span> <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a> (alternativamente <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>).</p>
            <p><span className="font-semibold text-foreground">Registro Mercantil:</span> Murcia, Tomo MU-1135, Folio 47, Hoja MU-20685, inscripción primera.</p>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">2.- DATOS PERSONALES QUE TRATAMOS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tratamos únicamente los datos personales que nos facilitas voluntariamente al rellenar los formularios del sitio web, contactar con nosotros o iniciar una relación comercial. En concreto:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              "Datos identificativos: nombre y apellidos.",
              "Datos de contacto: email, teléfono.",
              "Datos profesionales: empresa, país, cargo si aplica.",
              "Información de la consulta o solicitud (texto libre del formulario).",
              "Datos de navegación: dirección IP, identificadores de cookies (ver Política de Cookies).",
              "Datos contractuales y de facturación si llega a formalizarse una relación comercial.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-border/30">
                <div className="w-5 h-5 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0 text-[#FF6600] mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground italic">
            No tratamos categorías especiales de datos (origen racial, salud, biometría, etc.) ni datos de menores de 14 años.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">3.- FINALIDADES Y BASE LEGAL</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tratamos tus datos para las finalidades indicadas a continuación, cada una con su base de legitimación conforme al art. 6 del RGPD:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-muted/40">
                <tr>
                  <th className="text-left font-bold p-4">Finalidad</th>
                  <th className="text-left font-bold p-4">Base legal (RGPD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 text-muted-foreground">Atender consultas y solicitudes de presupuesto enviadas a través del formulario de contacto.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — medidas precontractuales a petición del interesado.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Reservar citas comerciales y demostraciones.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — medidas precontractuales.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Medición agregada del uso del sitio web (Google Analytics) con IP anonimizada.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consentimiento (banner de cookies).</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Gestión administrativa, contable y de facturación con clientes.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — ejecución del contrato + art. 6.1.c — obligación legal.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Cumplimiento de obligaciones legales: fiscales, mercantiles, garantía.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.c — obligación legal.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Seguridad del sitio web y prevención del fraude (logs, rate-limiting).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.f — interés legítimo.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Comunicaciones comerciales sobre productos y novedades a clientes existentes (cuando se solicite).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consentimiento, o art. 6.1.f — interés legítimo cuando exista relación contractual previa (LSSI art. 21).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">4.- PLAZOS DE CONSERVACIÓN</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· <span className="text-foreground font-semibold">Consultas que no derivan en relación comercial:</span> 1 año desde el último contacto.</li>
            <li>· <span className="text-foreground font-semibold">Datos contractuales y de facturación:</span> 6 años (Código de Comercio art. 30) y los plazos derivados de obligaciones fiscales y prescripción de responsabilidades.</li>
            <li>· <span className="text-foreground font-semibold">Cookies analíticas:</span> los plazos indicados en la <a href="/cookies" className="text-[#FF6600] hover:underline">Política de Cookies</a>.</li>
            <li>· <span className="text-foreground font-semibold">Cookies de consentimiento:</span> 1 año, tras el cual se vuelve a solicitar el consentimiento.</li>
            <li>· <span className="text-foreground font-semibold">Comunicaciones comerciales:</span> hasta que el interesado retire su consentimiento o se oponga.</li>
          </ul>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">5.- DESTINATARIOS Y CESIONES</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tus datos <span className="font-semibold text-foreground">no se ceden a terceros con fines comerciales</span>. Sí intervienen proveedores que actúan como <span className="font-semibold text-foreground">encargados del tratamiento</span> en nombre de Futura Teck, con contratos firmados conforme al art. 28 RGPD. La lista actualizada está disponible en{" "}
            <a href="/subprocesadores" className="text-[#FF6600] hover:underline">/subprocesadores</a>.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Adicionalmente, los datos podrán ser comunicados a autoridades públicas, Administración Tributaria, Fuerzas y Cuerpos de Seguridad del Estado y órganos judiciales, cuando una norma legal así lo exija.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">6.- TRANSFERENCIAS INTERNACIONALES</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Algunos de nuestros encargados del tratamiento son entidades con sede en EE.UU. (notablemente Google LLC para Analytics y Vercel Inc. para el alojamiento). Estas transferencias se realizan al amparo de:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· Decisión de adecuación de la Comisión Europea respecto al <span className="font-semibold text-foreground">EU-US Data Privacy Framework</span> (Decisión (UE) 2023/1795), cuando el proveedor esté certificado.</li>
            <li>· <span className="font-semibold text-foreground">Cláusulas Contractuales Tipo</span> (CCT) aprobadas por la Comisión Europea (Decisión (UE) 2021/914) como garantía complementaria.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Puedes solicitar copia de las garantías aplicables escribiendo a <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">7.- DECISIONES AUTOMATIZADAS Y ELABORACIÓN DE PERFILES</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Futura Teck <span className="font-semibold text-foreground">no toma decisiones basadas exclusivamente en tratamientos automatizados</span> que produzcan efectos jurídicos sobre el interesado o que le afecten significativamente, ni elabora perfiles con esa finalidad.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold">8.- DERECHOS DEL INTERESADO</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tienes los siguientes derechos sobre tus datos:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Acceso", desc: "Obtener confirmación de si estamos tratando tus datos y, en su caso, acceder a la información tratada." },
              { title: "Rectificación", desc: "Solicitar la corrección de datos inexactos o incompletos." },
              { title: "Supresión", desc: "Solicitar la eliminación de tus datos cuando ya no sean necesarios para la finalidad por la que fueron recogidos (derecho al olvido)." },
              { title: "Limitación del tratamiento", desc: "Solicitar que limitemos el tratamiento de tus datos en los supuestos previstos en el art. 18 RGPD." },
              { title: "Portabilidad", desc: "Recibir tus datos en un formato estructurado, de uso común y lectura mecánica, o solicitar que se transmitan a otro responsable." },
              { title: "Oposición", desc: "Oponerte al tratamiento de tus datos basado en interés legítimo, incluida la elaboración de perfiles." },
              { title: "Retirada de consentimiento", desc: "Cuando la base sea el consentimiento, retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo." },
            ].map((right, idx) => (
              <div key={idx} className="p-5 border-l-4 border-[#FF6600] bg-muted/10 rounded-r-2xl">
                <h4 className="font-bold text-foreground mb-1">Derecho de {right.title.toLowerCase()}</h4>
                <p className="text-muted-foreground text-sm">{right.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">9.- CÓMO EJERCER TUS DERECHOS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Puedes ejercer cualquiera de estos derechos enviando una solicitud, acompañada de copia del DNI o documento equivalente, por cualquiera de estas vías:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· Por correo postal a Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), España.</li>
            <li>· Por correo electrónico a <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Atenderemos tu solicitud en el plazo máximo de un mes desde su recepción, prorrogable a dos meses adicionales por la complejidad o el número de solicitudes (te informaremos en ese caso).
          </p>
        </section>

        <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-2">
          <h2 className="text-xl font-bold">10.- RECLAMACIÓN ANTE LA AUTORIDAD DE CONTROL</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Si consideras que el tratamiento de tus datos no se ajusta a la normativa, o que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la <span className="font-semibold text-foreground">Agencia Española de Protección de Datos</span> (AEPD), a través de su sede electrónica:{" "}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://www.aepd.es</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">11.- DELEGADO DE PROTECCIÓN DE DATOS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Futura Teck no está sujeta a la obligación legal de designar un Delegado de Protección de Datos en los términos del art. 37 RGPD. No obstante, ha habilitado un canal específico para cuestiones de privacidad: <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">12.- CAMBIOS EN ESTA POLÍTICA</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Esta política puede actualizarse para adaptarse a cambios normativos, recomendaciones de la AEPD o nuevas finalidades. Te informaremos por los medios habituales si los cambios son sustanciales. La fecha de la última revisión figura al pie.
          </p>
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Versión 2.0 — Última actualización: 28 de mayo de 2026
          </p>
        </footer>
      </>
    ),
    en: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">1.- DATA CONTROLLER</h2>
          <div className="p-6 bg-muted/30 rounded-2xl border border-border/50 space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p><span className="font-semibold text-foreground">Identity:</span> Futura Teck de Murcia S.L.U. (hereinafter, &quot;Futura Teck&quot;).</p>
            <p><span className="font-semibold text-foreground">VAT:</span> B30507743.</p>
            <p><span className="font-semibold text-foreground">Registered office:</span> Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), Spain.</p>
            <p><span className="font-semibold text-foreground">Phone:</span> +34 968 902 300.</p>
            <p><span className="font-semibold text-foreground">Privacy email:</span> <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a> (alternatively <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>).</p>
            <p><span className="font-semibold text-foreground">Commercial Registry:</span> Murcia, Volume MU-1135, Folio 47, Sheet MU-20685, first entry.</p>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">2.- PERSONAL DATA WE PROCESS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We only process personal data that you voluntarily provide when filling out the forms on the website, contacting us or initiating a business relationship. Specifically:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              "Identification data: first and last name.",
              "Contact data: email, phone.",
              "Professional data: company, country, job title where applicable.",
              "Information regarding the enquiry or request (free text from the form).",
              "Browsing data: IP address, cookie identifiers (see Cookie Policy).",
              "Contractual and billing data if a business relationship is formalised.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-border/30">
                <div className="w-5 h-5 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0 text-[#FF6600] mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground italic">
            We do not process special categories of data (racial origin, health, biometrics, etc.) nor data of children under 14.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">3.- PURPOSES AND LEGAL BASIS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We process your data for the purposes indicated below, each one with its legal basis pursuant to art. 6 of the GDPR:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-muted/40">
                <tr>
                  <th className="text-left font-bold p-4">Purpose</th>
                  <th className="text-left font-bold p-4">Legal basis (GDPR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 text-muted-foreground">Responding to enquiries and quotation requests submitted through the contact form.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — pre-contractual measures at the request of the data subject.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Scheduling commercial appointments and demonstrations.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — pre-contractual measures.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Aggregated measurement of website usage (Google Analytics) with anonymised IP.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consent (cookie banner).</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Administrative, accounting and billing management with customers.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — performance of the contract + art. 6.1.c — legal obligation.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Compliance with legal obligations: tax, commercial, warranty.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.c — legal obligation.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Website security and fraud prevention (logs, rate-limiting).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.f — legitimate interest.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Commercial communications about products and updates to existing customers (where requested).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consent, or art. 6.1.f — legitimate interest where a prior contractual relationship exists (LSSI art. 21).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">4.- RETENTION PERIODS</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· <span className="text-foreground font-semibold">Enquiries that do not lead to a business relationship:</span> 1 year from the last contact.</li>
            <li>· <span className="text-foreground font-semibold">Contractual and billing data:</span> 6 years (art. 30 Código de Comercio — Spanish Commercial Code) plus the periods arising from tax obligations and the statute of limitations on liabilities.</li>
            <li>· <span className="text-foreground font-semibold">Analytical cookies:</span> the periods indicated in the <a href="/cookies" className="text-[#FF6600] hover:underline">Cookie Policy</a>.</li>
            <li>· <span className="text-foreground font-semibold">Consent cookies:</span> 1 year, after which consent is requested again.</li>
            <li>· <span className="text-foreground font-semibold">Commercial communications:</span> until the data subject withdraws consent or objects.</li>
          </ul>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">5.- RECIPIENTS AND DISCLOSURES</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your data <span className="font-semibold text-foreground">is not transferred to third parties for commercial purposes</span>. However, providers acting as <span className="font-semibold text-foreground">data processors</span> on behalf of Futura Teck do intervene, under contracts signed pursuant to art. 28 RGPD. The updated list is available at{" "}
            <a href="/subprocesadores" className="text-[#FF6600] hover:underline">/subprocesadores</a>.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Additionally, the data may be communicated to public authorities, the Tax Administration, State Security Forces and Bodies and judicial authorities, where a legal provision so requires.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">6.- INTERNATIONAL TRANSFERS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Some of our processors are entities based in the USA (notably Google LLC for Analytics and Vercel Inc. for hosting). These transfers take place under:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· European Commission adequacy decision regarding the <span className="font-semibold text-foreground">EU-US Data Privacy Framework</span> (Decisión (UE) 2023/1795), where the provider is certified.</li>
            <li>· <span className="font-semibold text-foreground">Standard Contractual Clauses</span> (SCC) approved by the European Commission (Decisión (UE) 2021/914) as a supplementary safeguard.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You may request a copy of the applicable safeguards by writing to <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">7.- AUTOMATED DECISIONS AND PROFILING</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Futura Teck <span className="font-semibold text-foreground">does not make decisions based solely on automated processing</span> that produce legal effects on the data subject or that significantly affect them, nor does it carry out profiling for that purpose.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold">8.- RIGHTS OF THE DATA SUBJECT</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You have the following rights over your data:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Access", desc: "Obtain confirmation as to whether we are processing your data and, where applicable, access the information processed." },
              { title: "Rectification", desc: "Request the correction of inaccurate or incomplete data." },
              { title: "Erasure", desc: "Request the deletion of your data when it is no longer necessary for the purpose for which it was collected (right to be forgotten)." },
              { title: "Restriction of processing", desc: "Request that we restrict the processing of your data in the cases provided for in art. 18 RGPD." },
              { title: "Portability", desc: "Receive your data in a structured, commonly used and machine-readable format, or request that it be transmitted to another controller." },
              { title: "Objection", desc: "Object to the processing of your data based on legitimate interest, including profiling." },
              { title: "Withdrawal of consent", desc: "Where the basis is consent, withdraw it at any time without this affecting the lawfulness of the prior processing." },
            ].map((right, idx) => (
              <div key={idx} className="p-5 border-l-4 border-[#FF6600] bg-muted/10 rounded-r-2xl">
                <h4 className="font-bold text-foreground mb-1">Right of {right.title.toLowerCase()}</h4>
                <p className="text-muted-foreground text-sm">{right.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">9.- HOW TO EXERCISE YOUR RIGHTS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You may exercise any of these rights by sending a request, accompanied by a copy of your ID or equivalent document, through any of the following channels:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· By post to Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), Spain.</li>
            <li>· By email to <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We will respond to your request within a maximum period of one month from receipt, extendable by two additional months due to the complexity or number of requests (we will inform you in that case).
          </p>
        </section>

        <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-2">
          <h2 className="text-xl font-bold">10.- COMPLAINT BEFORE THE SUPERVISORY AUTHORITY</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you consider that the processing of your data does not comply with the regulations, or that we have not properly handled your rights, you may lodge a complaint before the <span className="font-semibold text-foreground">Spanish Data Protection Agency (AEPD)</span>, through its electronic office:{" "}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://www.aepd.es</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">11.- DATA PROTECTION OFFICER</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Futura Teck is not subject to the legal obligation to designate a Data Protection Officer under the terms of art. 37 RGPD. Nevertheless, it has enabled a specific channel for privacy matters: <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">12.- CHANGES TO THIS POLICY</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This policy may be updated to adapt to regulatory changes, recommendations of the AEPD or new purposes. We will inform you through the usual channels if the changes are substantial. The date of the last revision appears at the foot.
          </p>
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Version 2.0 — Last updated: 28 May 2026
          </p>
        </footer>
      </>
    ),
    pt: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">1.- RESPONSÁVEL PELO TRATAMENTO</h2>
          <div className="p-6 bg-muted/30 rounded-2xl border border-border/50 space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p><span className="font-semibold text-foreground">Identidade:</span> Futura Teck de Murcia S.L.U. (doravante, &quot;Futura Teck&quot;).</p>
            <p><span className="font-semibold text-foreground">NIF:</span> B30507743.</p>
            <p><span className="font-semibold text-foreground">Sede social:</span> Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), Espanha.</p>
            <p><span className="font-semibold text-foreground">Telefone:</span> +34 968 902 300.</p>
            <p><span className="font-semibold text-foreground">Email de privacidade:</span> <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a> (em alternativa <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>).</p>
            <p><span className="font-semibold text-foreground">Registo Comercial:</span> Murcia, Tomo MU-1135, Fólio 47, Folha MU-20685, primeira inscrição.</p>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">2.- DADOS PESSOAIS QUE TRATAMOS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tratamos unicamente os dados pessoais que nos fornece voluntariamente ao preencher os formulários do sítio web, contactar-nos ou iniciar uma relação comercial. Em concreto:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              "Dados identificativos: nome e apelidos.",
              "Dados de contacto: email, telefone.",
              "Dados profissionais: empresa, país, cargo se aplicável.",
              "Informação da consulta ou pedido (texto livre do formulário).",
              "Dados de navegação: endereço IP, identificadores de cookies (ver Política de Cookies).",
              "Dados contratuais e de faturação caso se venha a formalizar uma relação comercial.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-border/30">
                <div className="w-5 h-5 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0 text-[#FF6600] mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground italic">
            Não tratamos categorias especiais de dados (origem racial, saúde, biometria, etc.) nem dados de menores de 14 anos.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">3.- FINALIDADES E BASE LEGAL</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tratamos os seus dados para as finalidades indicadas a seguir, cada uma com a sua base de legitimação conforme o art. 6 do RGPD:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-muted/40">
                <tr>
                  <th className="text-left font-bold p-4">Finalidade</th>
                  <th className="text-left font-bold p-4">Base legal (RGPD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 text-muted-foreground">Atender consultas e pedidos de orçamento enviados através do formulário de contacto.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — diligências pré-contratuais a pedido do titular dos dados.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Marcação de reuniões comerciais e demonstrações.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — diligências pré-contratuais.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Medição agregada da utilização do sítio web (Google Analytics) com IP anonimizado.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consentimento (banner de cookies).</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Gestão administrativa, contabilística e de faturação com clientes.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — execução do contrato + art. 6.1.c — obrigação legal.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Cumprimento de obrigações legais: fiscais, comerciais, garantia.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.c — obrigação legal.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Segurança do sítio web e prevenção de fraude (logs, rate-limiting).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.f — interesse legítimo.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Comunicações comerciais sobre produtos e novidades a clientes existentes (quando solicitado).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consentimento, ou art. 6.1.f — interesse legítimo quando exista relação contratual prévia (LSSI art. 21).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">4.- PRAZOS DE CONSERVAÇÃO</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· <span className="text-foreground font-semibold">Consultas que não dão origem a relação comercial:</span> 1 ano desde o último contacto.</li>
            <li>· <span className="text-foreground font-semibold">Dados contratuais e de faturação:</span> 6 anos (art. 30 Código de Comercio — Código Comercial espanhol) e os prazos decorrentes de obrigações fiscais e de prescrição de responsabilidades.</li>
            <li>· <span className="text-foreground font-semibold">Cookies analíticos:</span> os prazos indicados na <a href="/cookies" className="text-[#FF6600] hover:underline">Política de Cookies</a>.</li>
            <li>· <span className="text-foreground font-semibold">Cookies de consentimento:</span> 1 ano, após o qual o consentimento é solicitado novamente.</li>
            <li>· <span className="text-foreground font-semibold">Comunicações comerciais:</span> até que o titular retire o seu consentimento ou se oponha.</li>
          </ul>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">5.- DESTINATÁRIOS E CEDÊNCIAS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Os seus dados <span className="font-semibold text-foreground">não são cedidos a terceiros para fins comerciais</span>. Intervêm sim fornecedores que atuam como <span className="font-semibold text-foreground">subcontratantes</span> em nome da Futura Teck, com contratos celebrados em conformidade com o art. 28 RGPD. A lista atualizada está disponível em{" "}
            <a href="/subprocesadores" className="text-[#FF6600] hover:underline">/subprocesadores</a>.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Adicionalmente, os dados poderão ser comunicados a autoridades públicas, Administração Tributária, Forças e Corpos de Segurança do Estado e órgãos judiciais, quando uma norma legal assim o exija.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">6.- TRANSFERÊNCIAS INTERNACIONAIS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Alguns dos nossos subcontratantes são entidades com sede nos EUA (nomeadamente Google LLC para Analytics e Vercel Inc. para o alojamento). Estas transferências são realizadas ao abrigo de:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· Decisão de adequação da Comissão Europeia relativa ao <span className="font-semibold text-foreground">EU-US Data Privacy Framework</span> (Decisión (UE) 2023/1795), quando o fornecedor esteja certificado.</li>
            <li>· <span className="font-semibold text-foreground">Cláusulas Contratuais-Tipo</span> (CCT) aprovadas pela Comissão Europeia (Decisión (UE) 2021/914) como garantia complementar.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pode solicitar cópia das garantias aplicáveis escrevendo para <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">7.- DECISÕES AUTOMATIZADAS E DEFINIÇÃO DE PERFIS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A Futura Teck <span className="font-semibold text-foreground">não toma decisões baseadas exclusivamente em tratamentos automatizados</span> que produzam efeitos jurídicos sobre o titular dos dados ou que o afetem significativamente, nem elabora perfis com essa finalidade.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold">8.- DIREITOS DO TITULAR DOS DADOS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tem os seguintes direitos sobre os seus dados:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Acesso", desc: "Obter confirmação se estamos a tratar os seus dados e, se for o caso, aceder à informação tratada." },
              { title: "Retificação", desc: "Solicitar a correção de dados inexatos ou incompletos." },
              { title: "Apagamento", desc: "Solicitar a eliminação dos seus dados quando já não sejam necessários para a finalidade para a qual foram recolhidos (direito ao esquecimento)." },
              { title: "Limitação do tratamento", desc: "Solicitar que limitemos o tratamento dos seus dados nos casos previstos no art. 18 RGPD." },
              { title: "Portabilidade", desc: "Receber os seus dados num formato estruturado, de uso corrente e de leitura automática, ou solicitar que sejam transmitidos a outro responsável." },
              { title: "Oposição", desc: "Opor-se ao tratamento dos seus dados baseado em interesse legítimo, incluindo a definição de perfis." },
              { title: "Retirada de consentimento", desc: "Quando a base seja o consentimento, retirá-lo a qualquer momento sem que tal afete a licitude do tratamento anterior." },
            ].map((right, idx) => (
              <div key={idx} className="p-5 border-l-4 border-[#FF6600] bg-muted/10 rounded-r-2xl">
                <h4 className="font-bold text-foreground mb-1">Direito de {right.title.toLowerCase()}</h4>
                <p className="text-muted-foreground text-sm">{right.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">9.- COMO EXERCER OS SEUS DIREITOS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pode exercer qualquer destes direitos enviando um pedido, acompanhado de cópia do documento de identificação ou documento equivalente, por qualquer destas vias:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· Por correio postal para Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), Espanha.</li>
            <li>· Por correio eletrónico para <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Atenderemos o seu pedido no prazo máximo de um mês a contar da sua receção, prorrogável por dois meses adicionais devido à complexidade ou ao número de pedidos (informá-lo-emos nesse caso).
          </p>
        </section>

        <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-2">
          <h2 className="text-xl font-bold">10.- RECLAMAÇÃO PERANTE A AUTORIDADE DE CONTROLO</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se considerar que o tratamento dos seus dados não está em conformidade com a regulamentação, ou que não atendemos corretamente os seus direitos, pode apresentar uma reclamação perante a <span className="font-semibold text-foreground">Agência Espanhola de Proteção de Dados (AEPD)</span>, através da sua sede eletrónica:{" "}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://www.aepd.es</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">11.- ENCARREGADO DA PROTEÇÃO DE DADOS</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A Futura Teck não está sujeita à obrigação legal de designar um Encarregado da Proteção de Dados nos termos do art. 37 RGPD. Não obstante, disponibilizou um canal específico para questões de privacidade: <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">12.- ALTERAÇÕES A ESTA POLÍTICA</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Esta política pode ser atualizada para se adaptar a alterações normativas, recomendações da AEPD ou novas finalidades. Informá-lo-emos pelos meios habituais se as alterações forem substanciais. A data da última revisão consta no rodapé.
          </p>
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Versão 2.0 — Última atualização: 28 de maio de 2026
          </p>
        </footer>
      </>
    ),
    it: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">1.- TITOLARE DEL TRATTAMENTO</h2>
          <div className="p-6 bg-muted/30 rounded-2xl border border-border/50 space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p><span className="font-semibold text-foreground">Identità:</span> Futura Teck de Murcia S.L.U. (di seguito, &quot;Futura Teck&quot;).</p>
            <p><span className="font-semibold text-foreground">P.IVA:</span> B30507743.</p>
            <p><span className="font-semibold text-foreground">Sede:</span> Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), Spagna.</p>
            <p><span className="font-semibold text-foreground">Telefono:</span> +34 968 902 300.</p>
            <p><span className="font-semibold text-foreground">Email per la privacy:</span> <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a> (in alternativa <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>).</p>
            <p><span className="font-semibold text-foreground">Registro delle Imprese:</span> Murcia, Tomo MU-1135, Foglio 47, Scheda MU-20685, prima iscrizione.</p>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">2.- DATI PERSONALI CHE TRATTIAMO</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Trattiamo unicamente i dati personali che ci fornisce volontariamente compilando i moduli del sito web, contattandoci o avviando una relazione commerciale. In particolare:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              "Dati identificativi: nome e cognome.",
              "Dati di contatto: email, telefono.",
              "Dati professionali: azienda, paese, ruolo se applicabile.",
              "Informazioni relative alla richiesta (testo libero del modulo).",
              "Dati di navigazione: indirizzo IP, identificativi di cookie (vedi Politica sui Cookie).",
              "Dati contrattuali e di fatturazione qualora si formalizzi una relazione commerciale.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-border/30">
                <div className="w-5 h-5 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0 text-[#FF6600] mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground italic">
            Non trattiamo categorie particolari di dati (origine razziale, salute, biometria, ecc.) né dati di minori di 14 anni.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">3.- FINALITÀ E BASE GIURIDICA</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Trattiamo i suoi dati per le finalità indicate di seguito, ciascuna con la propria base giuridica ai sensi dell&apos;art. 6 del GDPR:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-muted/40">
                <tr>
                  <th className="text-left font-bold p-4">Finalità</th>
                  <th className="text-left font-bold p-4">Base giuridica (GDPR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 text-muted-foreground">Rispondere a richieste di informazioni e di preventivo inviate tramite il modulo di contatto.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — misure precontrattuali su richiesta dell&apos;interessato.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Pianificazione di appuntamenti commerciali e dimostrazioni.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — misure precontrattuali.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Misurazione aggregata dell&apos;utilizzo del sito web (Google Analytics) con IP anonimizzato.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consenso (banner dei cookie).</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Gestione amministrativa, contabile e di fatturazione con i clienti.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.b — esecuzione del contratto + art. 6.1.c — obbligo legale.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Adempimento di obblighi di legge: fiscali, commerciali, di garanzia.</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.c — obbligo legale.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Sicurezza del sito web e prevenzione delle frodi (log, rate-limiting).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.f — legittimo interesse.</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Comunicazioni commerciali su prodotti e novità a clienti esistenti (quando richiesto).</td>
                  <td className="p-4 text-muted-foreground">Art. 6.1.a — consenso, o art. 6.1.f — legittimo interesse in presenza di un rapporto contrattuale precedente (LSSI art. 21).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">4.- PERIODI DI CONSERVAZIONE</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· <span className="text-foreground font-semibold">Richieste che non danno origine a una relazione commerciale:</span> 1 anno dall&apos;ultimo contatto.</li>
            <li>· <span className="text-foreground font-semibold">Dati contrattuali e di fatturazione:</span> 6 anni (art. 30 Código de Comercio — Codice di Commercio spagnolo) oltre ai termini derivanti dagli obblighi fiscali e dalla prescrizione delle responsabilità.</li>
            <li>· <span className="text-foreground font-semibold">Cookie analitici:</span> i periodi indicati nella <a href="/cookies" className="text-[#FF6600] hover:underline">Politica sui Cookie</a>.</li>
            <li>· <span className="text-foreground font-semibold">Cookie di consenso:</span> 1 anno, trascorso il quale il consenso viene nuovamente richiesto.</li>
            <li>· <span className="text-foreground font-semibold">Comunicazioni commerciali:</span> fino a quando l&apos;interessato non ritira il consenso o si oppone.</li>
          </ul>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">5.- DESTINATARI E COMUNICAZIONI</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I suoi dati <span className="font-semibold text-foreground">non vengono ceduti a terzi per finalità commerciali</span>. Intervengono tuttavia fornitori che agiscono come <span className="font-semibold text-foreground">responsabili del trattamento</span> per conto di Futura Teck, con contratti firmati ai sensi dell&apos;art. 28 RGPD. L&apos;elenco aggiornato è disponibile su{" "}
            <a href="/subprocesadores" className="text-[#FF6600] hover:underline">/subprocesadores</a>.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Inoltre, i dati potranno essere comunicati ad autorità pubbliche, Amministrazione Tributaria, Forze e Corpi di Sicurezza dello Stato e organi giudiziari, qualora una norma di legge lo richieda.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">6.- TRASFERIMENTI INTERNAZIONALI</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Alcuni dei nostri responsabili del trattamento sono entità con sede negli USA (in particolare Google LLC per Analytics e Vercel Inc. per l&apos;hosting). Tali trasferimenti vengono effettuati ai sensi di:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· Decisione di adeguatezza della Commissione Europea relativa al <span className="font-semibold text-foreground">EU-US Data Privacy Framework</span> (Decisión (UE) 2023/1795), quando il fornitore è certificato.</li>
            <li>· <span className="font-semibold text-foreground">Clausole Contrattuali Tipo</span> (CCT) approvate dalla Commissione Europea (Decisión (UE) 2021/914) come garanzia complementare.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Può richiedere copia delle garanzie applicabili scrivendo a <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">7.- DECISIONI AUTOMATIZZATE E PROFILAZIONE</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Futura Teck <span className="font-semibold text-foreground">non adotta decisioni basate unicamente su trattamenti automatizzati</span> che producano effetti giuridici sull&apos;interessato o che lo riguardino in modo significativo, né effettua profilazione a tale scopo.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold">8.- DIRITTI DELL&apos;INTERESSATO</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ha i seguenti diritti sui suoi dati:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Accesso", desc: "Ottenere conferma se stiamo trattando i suoi dati e, in tal caso, accedere alle informazioni trattate." },
              { title: "Rettifica", desc: "Richiedere la correzione di dati inesatti o incompleti." },
              { title: "Cancellazione", desc: "Richiedere la cancellazione dei suoi dati quando non siano più necessari per le finalità per le quali sono stati raccolti (diritto all'oblio)." },
              { title: "Limitazione del trattamento", desc: "Richiedere di limitare il trattamento dei suoi dati nei casi previsti dall'art. 18 RGPD." },
              { title: "Portabilità", desc: "Ricevere i suoi dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico, o richiedere che siano trasmessi a un altro titolare." },
              { title: "Opposizione", desc: "Opporsi al trattamento dei suoi dati basato sul legittimo interesse, inclusa la profilazione." },
              { title: "Revoca del consenso", desc: "Quando la base sia il consenso, revocarlo in qualsiasi momento senza che ciò pregiudichi la liceità del trattamento precedente." },
            ].map((right, idx) => (
              <div key={idx} className="p-5 border-l-4 border-[#FF6600] bg-muted/10 rounded-r-2xl">
                <h4 className="font-bold text-foreground mb-1">Diritto di {right.title.toLowerCase()}</h4>
                <p className="text-muted-foreground text-sm">{right.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">9.- COME ESERCITARE I SUOI DIRITTI</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Può esercitare uno qualsiasi di questi diritti inviando una richiesta, accompagnata da copia del documento d&apos;identità o documento equivalente, attraverso uno dei seguenti canali:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li>· Per posta a Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia), Spagna.</li>
            <li>· Per posta elettronica a <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Risponderemo alla sua richiesta entro un massimo di un mese dalla ricezione, prorogabile di due mesi aggiuntivi a causa della complessità o del numero di richieste (in tal caso la informeremo).
          </p>
        </section>

        <section className="mb-12 p-6 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 space-y-2">
          <h2 className="text-xl font-bold">10.- RECLAMO ALL&apos;AUTORITÀ DI CONTROLLO</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se ritiene che il trattamento dei suoi dati non sia conforme alla normativa, o che non abbiamo trattato correttamente i suoi diritti, può presentare un reclamo all&apos;<span className="font-semibold text-foreground">Agenzia Spagnola di Protezione Dati (AEPD)</span>, attraverso la sua sede elettronica:{" "}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://www.aepd.es</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">11.- RESPONSABILE DELLA PROTEZIONE DEI DATI</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Futura Teck non è soggetta all&apos;obbligo legale di designare un Responsabile della Protezione dei Dati ai sensi dell&apos;art. 37 RGPD. Tuttavia, ha attivato un canale specifico per le questioni relative alla privacy: <a href="mailto:privacidad@beinsen.com" className="text-[#FF6600] hover:underline">privacidad@beinsen.com</a>.
          </p>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold">12.- MODIFICHE A QUESTA INFORMATIVA</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            La presente informativa può essere aggiornata per adattarsi a modifiche normative, raccomandazioni dell&apos;AEPD o nuove finalità. La informeremo attraverso i canali abituali se le modifiche saranno sostanziali. La data dell&apos;ultima revisione è riportata in fondo.
          </p>
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Versione 2.0 — Ultimo aggiornamento: 28 maggio 2026
          </p>
        </footer>
      </>
    )
  };

  const d = {
    es: { title: "Política de Privacidad" },
    en: { title: "Privacy Policy" },
    pt: { title: "Política de Privacidade" },
    it: { title: "Informativa sulla Privacy" }
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
