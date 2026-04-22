"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ConditionsPage() {
  const { locale } = useLanguage();

  const content: Record<string, React.ReactNode> = {
    es: (
      <>
        <div className="p-8 bg-muted/20 border-2 border-[#FF6600]/20 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">AVISO LEGAL Y CONDICIONES GENERALES</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            En el presente documento de <span className="font-bold">Futura Teck de Murcia S.L.U.</span>, constan los términos de uso de los sitios webs de los que es titular, así como la política general de contratación en la que se regula el derecho de desistimiento del cliente, los plazos para el ejercicio del mismo así como la política de devoluciones y gastos de envío.
          </p>
        </div>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">TRANSMISIÓN DEL RIESGO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Compras por Internet</h4>
              <p className="text-sm text-muted-foreground">
                En caso de que el cliente opte por los métodos de envío que Futura Teck ofrece, el riesgo lo asume la empresa hasta la entrega. Si el cliente opta por un método distinto, el riesgo se transmite desde la recogida.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Tienda Física</h4>
              <p className="text-sm text-muted-foreground">
                El riesgo se transmite al CLIENTE desde el mismo momento en el que él mismo o un tercero adquiera la posesión material del bien.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">DERECHO DE DESISTIMIENTO</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            El derecho de desistimiento consiste en la facultad del CLIENTE de dejar sin efecto el contrato celebrado, previa notificación en el plazo legalmente establecido y sin necesidad de justificación ni penalización.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl">
            <h4 className="font-bold mb-1">Plazo de ejercicio</h4>
            <p className="text-sm text-muted-foreground">
              El CLIENTE dispondrá de un plazo de <span className="font-bold text-foreground">CATORCE DÍAS NATURALES (14)</span> a partir de la recepción del producto.
            </p>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">EXCEPCIONES</h3>
          <ul className="space-y-3">
            {[
              "Productos personalizados o creados a medida.",
              "Bienes que se puedan deteriorar con rapidez (tinta, cartuchos abiertos).",
              "Impresoras y plotters una vez probados (uso de cartuchos)."
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl text-sm italic">
                <span className="text-[#FF6600] font-black text-xl">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">PRODUCTO DEFECTUOSO</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Si el producto es defectuoso, se puede optar entre la reparación gratuita o sustitución. Futura Teck devolverá los gastos de envío originales. Sin embargo, los gastos de envío a la empresa para reparación corren por cuenta del CLIENTE.
          </p>
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Última actualización: 6 de Febrero de 2019
          </p>
        </footer>
      </>
    )
  };

  const d = {
    es: { title: "Condiciones Generales" },
    en: { title: "General Conditions" },
    pt: { title: "Condições Gerais" },
    it: { title: "Condizioni Generali" }
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
