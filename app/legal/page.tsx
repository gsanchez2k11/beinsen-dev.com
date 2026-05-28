"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LegalPage() {
  const { locale } = useLanguage();

  const content: Record<string, React.ReactNode> = {
    es: (
      <>
        <h2 className="text-2xl font-bold mb-4">LEY DE SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN Y COMERCIO ELECTRÓNICO</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          En cumplimiento de lo dispuesto en el art. 10 de la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información (L.S.S.I.), se da a conocer la siguiente Información General:
        </p>
        <p className="mb-8 p-6 bg-muted/30 rounded-2xl border border-border/50 text-sm italic">
          Que el dominio <span className="text-foreground font-semibold">www.beinsen.com</span> (a partir de ahora Sitio Web) está registrado a nombre de <span className="text-foreground font-semibold">Futura Teck de Murcia S.L.U.</span> con domicilio social en Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia); sociedad inscrita en el Registro Mercantil de MURCIA Tomo MU-1135, de la sección Sociedades, Folio 47, Hoja MU-20685, inscripción primera, provista de CIF <span className="text-foreground font-semibold">B30507743</span>, teléfono <span className="text-foreground font-semibold">+34 968 902 300</span>, a partir de ahora EL TITULAR.
        </p>

        <section className="space-y-6 mb-12">
          <h3 className="text-xl font-bold text-[#FF6600]">CONDICIONES DE USO</h3>
          
          <div className="space-y-4">
            <h4 className="font-bold">I.- Usuarios/as</h4>
            <p className="text-muted-foreground text-sm">
              El acceso y/o uso del Sitio Web www.beinsen.com, atribuye a quien lo realiza la condición de usuario/a, aceptando, desde ese mismo momento, plenamente y sin reserva alguna, las presentes condiciones generales, así como las condiciones particulares que, en su caso, complementen.
            </p>

            <h4 className="font-bold">II.- Uso del sitio Web, sus servicios y contenidos</h4>
            <p className="text-muted-foreground text-sm">
              El/la usuario/a se compromete a utilizar el sitio Web y sus servicios y contenidos sin contravenir la legislación vigente, la buena fe, los usos generalmente aceptados y el orden público.
            </p>
            <p className="text-muted-foreground text-sm">
              Respecto de los contenidos (informaciones, textos, gráficos, archivos de sonido y/o imagen, fotografías, diseños, etc.), se prohíbe:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Su reproducción, distribución o modificación, a menos que se cuente con la autorización de sus legítimos/as titulares o resulte legalmente permitido.</li>
              <li>Cualquier vulneración de los derechos del TITULAR o de sus legítimos/as titulares sobre los mismos.</li>
              <li>Su utilización para todo tipo de fines comerciales o publicitarios, distintos de los estrictamente permitidos.</li>
              <li>Cualquier intento de obtener los contenidos del sitio Web por cualquier medio distinto de los que se pongan a disposición de los/las usuarios/as.</li>
            </ul>

            <h4 className="font-bold">III.- Modificación unilateral</h4>
            <p className="text-muted-foreground text-sm">
              EL TITULAR podrá modificar unilateralmente y sin previo aviso, siempre que lo considere oportuno, la estructura y diseño del sitio web, así como modificar o eliminar, los servicios, los contenidos y las condiciones de acceso y/o uso del sitio Web.
            </p>

            <h4 className="font-bold">IV.- Hiperenlaces</h4>
            <p className="text-muted-foreground text-sm">
              Bajo ninguna circunstancia, EL TITULAR será responsable de los contenidos o servicios puestos a disposición del público en la página web desde la que se realice el “hiperenlace” ni de las informaciones y manifestaciones incluidas en las mismas.
            </p>

            <h4 className="font-bold">V. Exclusión de Garantías y responsabilidad</h4>
            <p className="text-muted-foreground text-sm">
              EL TITULAR no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran traer causa de: la falta disponibilidad, mantenimiento y efectivo funcionamiento del Web, existencia de virus, o el uso ilícito y negligente del sitio Web.
            </p>

            <h4 className="font-bold">VI. Legislación aplicable y Jurisdicción</h4>
            <p className="text-muted-foreground text-sm">
              Las presentes Condiciones Generales se regirán por la legislación española. Futura Teck de Murcia S.L.U. y el usuario/a se someten a la Jurisdicción de los Juzgados y Tribunales del domicilio del usuario.
            </p>

            <h4 className="font-bold">VII. Plataforma de Soporte Técnico y Garantías</h4>
            <p className="text-muted-foreground text-sm">
              El servicio de soporte técnico oficial, el registro de productos y la gestión de garantías de los equipos Beinsen se prestan a través de la plataforma <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline font-semibold">soporte.beinsen.com</a>, que dispone de sus propias condiciones de uso, política de privacidad y política de garantías específicas, disponibles en dicha plataforma. El acceso a soporte.beinsen.com se realiza con cuenta separada del presente sitio web.
            </p>
          </div>
        </section>

        <section className="p-8 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20">
          <h3 className="text-lg font-bold mb-2">BAJA DE COMUNICACIONES COMERCIALES</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Se garantiza al usuario la posibilidad de dejar de recibir información comercial en un plazo máximo de 10 días desde que comunique su voluntad mediante correo electrónico dirigido a:
          </p>
          <a href="mailto:info@beinsen.com" className="text-[#FF6600] font-bold hover:underline">info@beinsen.com</a>
        </section>
      </>
    )
  };

  const d = {
    es: { title: "Aviso Legal" },
    en: { title: "Legal Notice" },
    pt: { title: "Aviso Legal" },
    it: { title: "Note Legali" }
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
