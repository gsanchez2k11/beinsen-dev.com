"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  const content: Record<string, React.ReactNode> = {
    es: (
      <>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">1.- ¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE TUS DATOS?</h2>
          <div className="p-6 bg-muted/30 rounded-2xl border border-border/50 space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-foreground font-semibold">Futura Teck de Murcia S.L.U.</span>, con CIF: <span className="text-foreground font-semibold">B30507743</span>, domicilio social en Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia) y teléfono <span className="text-foreground font-semibold">+34 968 902 300</span>, es el responsable del tratamiento de los mismos. Estos datos serán tratados de conformidad con lo dispuesto en las normativas vigentes sobre protección de datos personales.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desde Futura Teck de Murcia S.L.U. nos comprometemos al cumplimiento de la obligación de secreto de los datos de carácter personal y de su deber de guardarlos. Adoptamos las medidas necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold">2.- ¿QUÉ DATOS PERSONALES TRATAMOS?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Aquellos que tú decidas facilitarnos voluntariamente.",
              "Los datos derivados de las comunicaciones que mantengas con nosotros.",
              "Información de navegación (dirección IP, cookies).",
              "Información de fuentes accesibles al público.",
              "Datos de la relación contractual o precontractual.",
              "Datos proporcionados por terceras personas con base legítima."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl text-sm border border-border/30">
                <div className="w-5 h-5 rounded-full bg-[#FF6600]/10 flex items-center justify-center shrink-0 text-[#FF6600] mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold">3.- ¿CUÁLES SON TUS DERECHOS?</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Derecho de acceso", desc: "Obtener confirmación de si estamos tratando tus datos y acceder a la información específica." },
              { title: "Derecho de rectificación", desc: "Modificar datos inexactos o incompletos." },
              { title: "Derecho de supresión", desc: "El 'derecho al olvido' para obtener la eliminación de tus datos cuando ya no sean necesarios." },
              { title: "Derecho a la limitación", desc: "Limitar el tratamiento de tus datos en determinadas circunstancias." },
              { title: "Derecho a la portabilidad", desc: "Recibir tus datos en un formato estructurado y mecánico." },
              { title: "Derecho de oposición", desc: "Derecho a que no se lleve a cabo el tratamiento o se cese el mismo." }
            ].map((right, idx) => (
              <div key={idx} className="p-5 border-l-4 border-[#FF6600] bg-muted/10 rounded-r-2xl">
                <h4 className="font-bold text-foreground mb-1">{right.title}</h4>
                <p className="text-muted-foreground text-sm">{right.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20 text-center">
          <h2 className="text-xl font-bold mb-4">¿Cómo ejercer tus derechos?</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Puedes dirigirte por escrito a Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia) o mediante correo electrónico:
          </p>
          <a href="mailto:info@beinsen.com" className="px-8 py-3 bg-[#FF6600] text-white rounded-xl font-bold hover:bg-[#cc5200] transition-all inline-block">
            info@beinsen.com
          </a>
          <p className="mt-6 text-[10px] text-muted-foreground uppercase tracking-widest">
            Última revisión: 26 de Marzo de 2024
          </p>
        </section>
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
