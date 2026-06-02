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

        <footer className="pt-8 border-t border-border mt-12">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Versión 1.0 — Última actualización: 2 de junio de 2026
          </p>
        </footer>
      </>
    ),
    en: (
      <>
        <h2 className="text-2xl font-bold mb-4">LAW ON INFORMATION SOCIETY SERVICES AND ELECTRONIC COMMERCE</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          In compliance with the provisions of Article 10 of Law 34/2002 of 11 July on Information Society Services (L.S.S.I.), the following General Information is disclosed:
        </p>
        <p className="mb-8 p-6 bg-muted/30 rounded-2xl border border-border/50 text-sm italic">
          That the domain <span className="text-foreground font-semibold">www.beinsen.com</span> (hereinafter the Website) is registered in the name of <span className="text-foreground font-semibold">Futura Teck de Murcia S.L.U.</span> with registered office at Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia); a company registered in the Commercial Registry of MURCIA Tomo MU-1135, Companies Section, Folio 47, Hoja MU-20685, first entry, with Tax ID <span className="text-foreground font-semibold">B30507743</span>, telephone <span className="text-foreground font-semibold">+34 968 902 300</span>, hereinafter THE HOLDER.
        </p>

        <section className="space-y-6 mb-12">
          <h3 className="text-xl font-bold text-[#FF6600]">CONDITIONS OF USE</h3>

          <div className="space-y-4">
            <h4 className="font-bold">I.- Users</h4>
            <p className="text-muted-foreground text-sm">
              Access to and/or use of the Website www.beinsen.com confers upon the person who carries it out the status of user, accepting, from that very moment, fully and without any reservation, these general conditions, as well as the particular conditions that may, where appropriate, supplement them.
            </p>

            <h4 className="font-bold">II.- Use of the Website, its services and contents</h4>
            <p className="text-muted-foreground text-sm">
              The user undertakes to use the Website and its services and contents without contravening current legislation, good faith, generally accepted practices and public order.
            </p>
            <p className="text-muted-foreground text-sm">
              With respect to the contents (information, texts, graphics, sound and/or image files, photographs, designs, etc.), the following is prohibited:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Their reproduction, distribution or modification, unless authorisation has been obtained from their legitimate holders or is legally permitted.</li>
              <li>Any infringement of the rights of THE HOLDER or of its legitimate holders over them.</li>
              <li>Their use for any commercial or advertising purposes other than those strictly permitted.</li>
              <li>Any attempt to obtain the contents of the Website by any means other than those made available to users.</li>
            </ul>

            <h4 className="font-bold">III.- Unilateral modification</h4>
            <p className="text-muted-foreground text-sm">
              THE HOLDER may unilaterally and without prior notice modify, whenever it deems appropriate, the structure and design of the website, as well as modify or eliminate the services, contents and conditions of access and/or use of the Website.
            </p>

            <h4 className="font-bold">IV.- Hyperlinks</h4>
            <p className="text-muted-foreground text-sm">
              Under no circumstances shall THE HOLDER be liable for the contents or services made available to the public on the website from which the "hyperlink" is made, nor for the information and statements included therein.
            </p>

            <h4 className="font-bold">V. Exclusion of Warranties and Liability</h4>
            <p className="text-muted-foreground text-sm">
              THE HOLDER grants no warranty and shall not be liable, in any case, for damages of any nature whatsoever that may arise from: the lack of availability, maintenance and effective operation of the Website, the existence of viruses, or the unlawful and negligent use of the Website.
            </p>

            <h4 className="font-bold">VI. Applicable Law and Jurisdiction</h4>
            <p className="text-muted-foreground text-sm">
              These General Conditions shall be governed by Spanish law. Futura Teck de Murcia S.L.U. and the user submit to the Jurisdiction of the Courts and Tribunals of the user's domicile.
            </p>

            <h4 className="font-bold">VII. Technical Support and Warranties Platform</h4>
            <p className="text-muted-foreground text-sm">
              The official technical support service, product registration and warranty management for Beinsen equipment are provided through the <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline font-semibold">soporte.beinsen.com</a> platform, which has its own terms of use, privacy policy and specific warranty policy, available on said platform. Access to soporte.beinsen.com is made with an account separate from this website.
            </p>
          </div>
        </section>

        <section className="p-8 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20">
          <h3 className="text-lg font-bold mb-2">UNSUBSCRIBE FROM COMMERCIAL COMMUNICATIONS</h3>
          <p className="text-sm text-muted-foreground mb-4">
            The user is guaranteed the possibility of ceasing to receive commercial information within a maximum period of 10 days from the moment they communicate their wish by email addressed to:
          </p>
          <a href="mailto:info@beinsen.com" className="text-[#FF6600] font-bold hover:underline">info@beinsen.com</a>
        </section>

        <footer className="pt-8 border-t border-border mt-12">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Version 1.0 — Last updated: 2 June 2026
          </p>
        </footer>
      </>
    ),
    pt: (
      <>
        <h2 className="text-2xl font-bold mb-4">LEI DOS SERVIÇOS DA SOCIEDADE DA INFORMAÇÃO E DO COMÉRCIO ELECTRÓNICO</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Em cumprimento do disposto no art. 10.º da Ley 34/2002 de 11 de julio, dos Serviços da Sociedade da Informação (L.S.S.I.), divulga-se a seguinte Informação Geral:
        </p>
        <p className="mb-8 p-6 bg-muted/30 rounded-2xl border border-border/50 text-sm italic">
          Que o domínio <span className="text-foreground font-semibold">www.beinsen.com</span> (doravante Sítio Web) está registado em nome de <span className="text-foreground font-semibold">Futura Teck de Murcia S.L.U.</span> com sede social em Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia); sociedade inscrita no Registro Mercantil de MURCIA Tomo MU-1135, da secção Sociedades, Folio 47, Hoja MU-20685, primeira inscrição, com NIF <span className="text-foreground font-semibold">B30507743</span>, telefone <span className="text-foreground font-semibold">+34 968 902 300</span>, doravante O TITULAR.
        </p>

        <section className="space-y-6 mb-12">
          <h3 className="text-xl font-bold text-[#FF6600]">CONDIÇÕES DE UTILIZAÇÃO</h3>

          <div className="space-y-4">
            <h4 className="font-bold">I.- Utilizadores/as</h4>
            <p className="text-muted-foreground text-sm">
              O acesso e/ou utilização do Sítio Web www.beinsen.com atribui a quem o realiza a condição de utilizador/a, aceitando, desde esse mesmo momento, plenamente e sem qualquer reserva, as presentes condições gerais, bem como as condições particulares que, se aplicável, as complementem.
            </p>

            <h4 className="font-bold">II.- Utilização do sítio Web, dos seus serviços e conteúdos</h4>
            <p className="text-muted-foreground text-sm">
              O/a utilizador/a compromete-se a utilizar o sítio Web e os seus serviços e conteúdos sem contravir a legislação em vigor, a boa-fé, os usos geralmente aceites e a ordem pública.
            </p>
            <p className="text-muted-foreground text-sm">
              Relativamente aos conteúdos (informações, textos, gráficos, ficheiros de som e/ou imagem, fotografias, desenhos, etc.), é proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>A sua reprodução, distribuição ou modificação, salvo se contar com a autorização dos seus legítimos/as titulares ou resultar legalmente permitido.</li>
              <li>Qualquer violação dos direitos do TITULAR ou dos seus legítimos/as titulares sobre os mesmos.</li>
              <li>A sua utilização para qualquer tipo de fins comerciais ou publicitários, distintos dos estritamente permitidos.</li>
              <li>Qualquer tentativa de obter os conteúdos do sítio Web por qualquer meio distinto dos que sejam colocados à disposição dos/as utilizadores/as.</li>
            </ul>

            <h4 className="font-bold">III.- Modificação unilateral</h4>
            <p className="text-muted-foreground text-sm">
              O TITULAR poderá modificar unilateralmente e sem aviso prévio, sempre que o considere oportuno, a estrutura e o design do sítio web, bem como modificar ou eliminar os serviços, os conteúdos e as condições de acesso e/ou utilização do sítio Web.
            </p>

            <h4 className="font-bold">IV.- Hiperligações</h4>
            <p className="text-muted-foreground text-sm">
              Sob nenhuma circunstância, O TITULAR será responsável pelos conteúdos ou serviços colocados à disposição do público na página web a partir da qual se efectue a "hiperligação" nem pelas informações e manifestações incluídas nas mesmas.
            </p>

            <h4 className="font-bold">V. Exclusão de Garantias e responsabilidade</h4>
            <p className="text-muted-foreground text-sm">
              O TITULAR não concede qualquer garantia nem se responsabiliza, em caso algum, pelos danos e prejuízos de qualquer natureza que possam resultar de: a falta de disponibilidade, manutenção e efectivo funcionamento da Web, existência de vírus, ou a utilização ilícita e negligente do sítio Web.
            </p>

            <h4 className="font-bold">VI. Legislação aplicável e Jurisdição</h4>
            <p className="text-muted-foreground text-sm">
              As presentes Condições Gerais reger-se-ão pela legislação espanhola. A Futura Teck de Murcia S.L.U. e o/a utilizador/a submetem-se à Jurisdição dos Juízos e Tribunais do domicílio do utilizador.
            </p>

            <h4 className="font-bold">VII. Plataforma de Suporte Técnico e Garantias</h4>
            <p className="text-muted-foreground text-sm">
              O serviço de suporte técnico oficial, o registo de produtos e a gestão de garantias dos equipamentos Beinsen são prestados através da plataforma <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline font-semibold">soporte.beinsen.com</a>, que dispõe das suas próprias condições de utilização, política de privacidade e política de garantias específicas, disponíveis na referida plataforma. O acesso a soporte.beinsen.com é realizado com conta separada do presente sítio web.
            </p>
          </div>
        </section>

        <section className="p-8 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20">
          <h3 className="text-lg font-bold mb-2">CANCELAMENTO DE COMUNICAÇÕES COMERCIAIS</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Garante-se ao utilizador a possibilidade de deixar de receber informação comercial num prazo máximo de 10 dias a partir do momento em que comunique a sua vontade através de correio electrónico dirigido a:
          </p>
          <a href="mailto:info@beinsen.com" className="text-[#FF6600] font-bold hover:underline">info@beinsen.com</a>
        </section>

        <footer className="pt-8 border-t border-border mt-12">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Versão 1.0 — Última actualização: 2 de junho de 2026
          </p>
        </footer>
      </>
    ),
    it: (
      <>
        <h2 className="text-2xl font-bold mb-4">LEGGE SUI SERVIZI DELLA SOCIETÀ DELL'INFORMAZIONE E DEL COMMERCIO ELETTRONICO</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          In ottemperanza a quanto disposto dall'art. 10 della Ley 34/2002 de 11 de julio, sui Servizi della Società dell'Informazione (L.S.S.I.), si rende nota la seguente Informazione Generale:
        </p>
        <p className="mb-8 p-6 bg-muted/30 rounded-2xl border border-border/50 text-sm italic">
          Che il dominio <span className="text-foreground font-semibold">www.beinsen.com</span> (di seguito Sito Web) è registrato a nome di <span className="text-foreground font-semibold">Futura Teck de Murcia S.L.U.</span> con sede legale in Av. Alto de las Atalayas, 18, 30110 – Cabezo de Torres (Murcia); società iscritta presso il Registro Mercantil de MURCIA Tomo MU-1135, della sezione Sociedades, Folio 47, Hoja MU-20685, prima iscrizione, con codice fiscale <span className="text-foreground font-semibold">B30507743</span>, telefono <span className="text-foreground font-semibold">+34 968 902 300</span>, di seguito IL TITOLARE.
        </p>

        <section className="space-y-6 mb-12">
          <h3 className="text-xl font-bold text-[#FF6600]">CONDIZIONI D'USO</h3>

          <div className="space-y-4">
            <h4 className="font-bold">I.- Utenti</h4>
            <p className="text-muted-foreground text-sm">
              L'accesso e/o l'utilizzo del Sito Web www.beinsen.com attribuisce a chi lo effettua la condizione di utente, accettando, da quel medesimo momento, pienamente e senza alcuna riserva, le presenti condizioni generali, nonché le condizioni particolari che, se del caso, le integrino.
            </p>

            <h4 className="font-bold">II.- Utilizzo del Sito Web, dei suoi servizi e contenuti</h4>
            <p className="text-muted-foreground text-sm">
              L'utente si impegna a utilizzare il Sito Web e i suoi servizi e contenuti senza contravvenire alla legislazione vigente, alla buona fede, agli usi generalmente accettati e all'ordine pubblico.
            </p>
            <p className="text-muted-foreground text-sm">
              Per quanto riguarda i contenuti (informazioni, testi, grafica, file sonori e/o di immagini, fotografie, disegni, ecc.), è vietato:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>La loro riproduzione, distribuzione o modifica, salvo che si disponga dell'autorizzazione dei legittimi titolari o risulti legalmente consentito.</li>
              <li>Qualsiasi violazione dei diritti del TITOLARE o dei suoi legittimi titolari sui medesimi.</li>
              <li>Il loro utilizzo per qualsiasi tipo di finalità commerciali o pubblicitarie, diverse da quelle strettamente consentite.</li>
              <li>Qualsiasi tentativo di ottenere i contenuti del Sito Web con qualsiasi mezzo diverso da quelli messi a disposizione degli utenti.</li>
            </ul>

            <h4 className="font-bold">III.- Modifica unilaterale</h4>
            <p className="text-muted-foreground text-sm">
              IL TITOLARE potrà modificare unilateralmente e senza preavviso, qualora lo ritenga opportuno, la struttura e il design del sito web, nonché modificare o eliminare i servizi, i contenuti e le condizioni di accesso e/o utilizzo del Sito Web.
            </p>

            <h4 className="font-bold">IV.- Collegamenti ipertestuali</h4>
            <p className="text-muted-foreground text-sm">
              In nessuna circostanza, IL TITOLARE sarà responsabile dei contenuti o dei servizi messi a disposizione del pubblico nella pagina web da cui si effettui il "collegamento ipertestuale", né delle informazioni e dichiarazioni in essi contenute.
            </p>

            <h4 className="font-bold">V. Esclusione di Garanzie e responsabilità</h4>
            <p className="text-muted-foreground text-sm">
              IL TITOLARE non concede alcuna garanzia né è responsabile, in nessun caso, dei danni e pregiudizi di qualsiasi natura che potrebbero derivare da: la mancata disponibilità, manutenzione ed effettivo funzionamento del Sito Web, l'esistenza di virus, o l'uso illecito e negligente del Sito Web.
            </p>

            <h4 className="font-bold">VI. Legislazione applicabile e Giurisdizione</h4>
            <p className="text-muted-foreground text-sm">
              Le presenti Condizioni Generali saranno disciplinate dalla legislazione spagnola. Futura Teck de Murcia S.L.U. e l'utente si sottopongono alla Giurisdizione dei Tribunali del domicilio dell'utente.
            </p>

            <h4 className="font-bold">VII. Piattaforma di Supporto Tecnico e Garanzie</h4>
            <p className="text-muted-foreground text-sm">
              Il servizio di supporto tecnico ufficiale, la registrazione dei prodotti e la gestione delle garanzie delle apparecchiature Beinsen vengono erogati attraverso la piattaforma <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline font-semibold">soporte.beinsen.com</a>, che dispone di proprie condizioni d'uso, politica sulla privacy e politica di garanzia specifiche, disponibili sulla suddetta piattaforma. L'accesso a soporte.beinsen.com si effettua con un account separato dal presente sito web.
            </p>
          </div>
        </section>

        <section className="p-8 bg-[#FF6600]/5 rounded-3xl border border-[#FF6600]/20">
          <h3 className="text-lg font-bold mb-2">CANCELLAZIONE DALLE COMUNICAZIONI COMMERCIALI</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Si garantisce all'utente la possibilità di cessare di ricevere informazioni commerciali entro un termine massimo di 10 giorni dal momento in cui comunichi la propria volontà mediante posta elettronica indirizzata a:
          </p>
          <a href="mailto:info@beinsen.com" className="text-[#FF6600] font-bold hover:underline">info@beinsen.com</a>
        </section>

        <footer className="pt-8 border-t border-border mt-12">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Versione 1.0 — Ultimo aggiornamento: 2 giugno 2026
          </p>
        </footer>
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
