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
