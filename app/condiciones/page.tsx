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

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">GARANTÍA LEGAL DE CONFORMIDAD</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            De conformidad con la Ley General para la Defensa de los Consumidores y Usuarios (Texto refundido aprobado por RDLeg 1/2007, en su redacción dada por el RD-Ley 7/2021), Futura Teck de Murcia S.L.U. responde de las faltas de conformidad de los bienes durante el plazo de <span className="font-bold text-foreground">TRES (3) AÑOS</span> desde la entrega.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl space-y-2">
            <h4 className="font-bold">Periodos por modelo</h4>
            <p className="text-sm text-muted-foreground">
              La mayoría de los modelos Beinsen disponen de garantía de <span className="font-bold text-foreground">3 años</span>. Los modelos <span className="font-semibold text-foreground">Andra, Tobago, Miranda y Felina</span> disponen de garantía de <span className="font-bold text-foreground">1 año</span>. La activación de la cobertura extendida requiere el registro del equipo en <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com</a> en los 90 días posteriores a la compra.
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Las condiciones completas de la garantía, exclusiones, procedimientos de reclamación y soporte técnico se publican y mantienen actualizadas en{" "}
            <a href="https://soporte.beinsen.com/garantia" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com/garantia</a>.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">RESOLUCIÓN DE LITIGIOS EN LÍNEA (ODR)</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            En cumplimiento del Reglamento (UE) 524/2013, se informa a los consumidores de que la Comisión Europea pone a su disposición una plataforma de resolución de litigios en línea, accesible en{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://ec.europa.eu/consumers/odr</a>.
            El usuario también puede dirigir sus reclamaciones por correo electrónico a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
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
          <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">LEGAL NOTICE AND GENERAL CONDITIONS</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            This document of <span className="font-bold">Futura Teck de Murcia S.L.U.</span> sets out the terms of use of the websites it owns, as well as the general contracting policy, which regulates the client's right of withdrawal, the time limits for its exercise, and the returns and shipping costs policy.
          </p>
        </div>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">TRANSFER OF RISK</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Online Purchases</h4>
              <p className="text-sm text-muted-foreground">
                If the client chooses the shipping methods offered by Futura Teck, the risk is assumed by the company until delivery. If the client opts for a different method, the risk is transferred from the moment of collection.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Physical Store</h4>
              <p className="text-sm text-muted-foreground">
                The risk is transferred to the CLIENT from the very moment when the client or a third party acquires material possession of the goods.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">RIGHT OF WITHDRAWAL</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The right of withdrawal consists of the CLIENT's faculty to render the concluded contract ineffective, after notification within the legally established period and without any justification or penalty.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl">
            <h4 className="font-bold mb-1">Exercise period</h4>
            <p className="text-sm text-muted-foreground">
              The CLIENT shall have a period of <span className="font-bold text-foreground">FOURTEEN CALENDAR DAYS (14)</span> from receipt of the product.
            </p>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">EXCEPTIONS</h3>
          <ul className="space-y-3">
            {[
              "Personalised or custom-made products.",
              "Goods liable to deteriorate rapidly (ink, opened cartridges).",
              "Printers and plotters once tested (use of cartridges)."
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl text-sm italic">
                <span className="text-[#FF6600] font-black text-xl">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">DEFECTIVE PRODUCT</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            If the product is defective, the client may choose between free repair or replacement. Futura Teck will refund the original shipping costs. However, the shipping costs to the company for repair shall be borne by the CLIENT.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">LEGAL GUARANTEE OF CONFORMITY</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            In accordance with the General Law for the Defence of Consumers and Users (Consolidated Text approved by RDLeg 1/2007, as amended by RD-Ley 7/2021), Futura Teck de Murcia S.L.U. is liable for any lack of conformity of the goods for a period of <span className="font-bold text-foreground">THREE (3) YEARS</span> from delivery.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl space-y-2">
            <h4 className="font-bold">Periods by model</h4>
            <p className="text-sm text-muted-foreground">
              Most Beinsen models come with a <span className="font-bold text-foreground">3-year</span> warranty. The <span className="font-semibold text-foreground">Andra, Tobago, Miranda and Felina</span> models come with a <span className="font-bold text-foreground">1-year</span> warranty. Activation of extended cover requires registration of the device at <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com</a> within 90 days of purchase.
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The full warranty conditions, exclusions, claims procedures and technical support are published and kept up to date at{" "}
            <a href="https://soporte.beinsen.com/garantia" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com/garantia</a>.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">ONLINE DISPUTE RESOLUTION (ODR)</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            In compliance with Regulation (EU) 524/2013, consumers are informed that the European Commission provides an online dispute resolution platform, accessible at{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://ec.europa.eu/consumers/odr</a>.
            Users may also send their complaints by email to <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
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
          <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">AVISO LEGAL E CONDIÇÕES GERAIS</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No presente documento de <span className="font-bold">Futura Teck de Murcia S.L.U.</span> constam os termos de utilização dos sítios web de que é titular, bem como a política geral de contratação, na qual se regula o direito de livre resolução do cliente, os prazos para o seu exercício e a política de devoluções e despesas de envio.
          </p>
        </div>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">TRANSMISSÃO DO RISCO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Compras pela Internet</h4>
              <p className="text-sm text-muted-foreground">
                Caso o cliente opte pelos métodos de envio que a Futura Teck oferece, o risco é assumido pela empresa até à entrega. Se o cliente optar por um método diferente, o risco transmite-se a partir da recolha.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Loja Física</h4>
              <p className="text-sm text-muted-foreground">
                O risco transmite-se ao CLIENTE a partir do próprio momento em que este ou um terceiro adquire a posse material do bem.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">DIREITO DE LIVRE RESOLUÇÃO</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            O direito de livre resolução consiste na faculdade de o CLIENTE pôr termo ao contrato celebrado, mediante notificação prévia no prazo legalmente estabelecido e sem necessidade de justificação nem penalização.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl">
            <h4 className="font-bold mb-1">Prazo de exercício</h4>
            <p className="text-sm text-muted-foreground">
              O CLIENTE disporá de um prazo de <span className="font-bold text-foreground">CATORZE DIAS DE CALENDÁRIO (14)</span> a contar da receção do produto.
            </p>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">EXCEÇÕES</h3>
          <ul className="space-y-3">
            {[
              "Produtos personalizados ou feitos por medida.",
              "Bens suscetíveis de se deteriorarem rapidamente (tinta, cartuchos abertos).",
              "Impressoras e plotters depois de testados (utilização de cartuchos)."
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl text-sm italic">
                <span className="text-[#FF6600] font-black text-xl">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">PRODUTO DEFEITUOSO</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Se o produto for defeituoso, pode optar-se entre a reparação gratuita ou a substituição. A Futura Teck devolverá as despesas de envio originais. Contudo, as despesas de envio para a empresa para reparação ficam a cargo do CLIENTE.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">GARANTIA LEGAL DE CONFORMIDADE</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Em conformidade com a Lei Geral para a Defesa dos Consumidores e Utilizadores (Texto refundido aprovado pelo RDLeg 1/2007, na redação dada pelo RD-Ley 7/2021), a Futura Teck de Murcia S.L.U. responde pelas faltas de conformidade dos bens durante o prazo de <span className="font-bold text-foreground">TRÊS (3) ANOS</span> a contar da entrega.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl space-y-2">
            <h4 className="font-bold">Períodos por modelo</h4>
            <p className="text-sm text-muted-foreground">
              A maioria dos modelos Beinsen dispõe de garantia de <span className="font-bold text-foreground">3 anos</span>. Os modelos <span className="font-semibold text-foreground">Andra, Tobago, Miranda e Felina</span> dispõem de garantia de <span className="font-bold text-foreground">1 ano</span>. A ativação da cobertura alargada requer o registo do equipamento em <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com</a> nos 90 dias posteriores à compra.
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            As condições completas da garantia, exclusões, procedimentos de reclamação e apoio técnico são publicadas e mantidas atualizadas em{" "}
            <a href="https://soporte.beinsen.com/garantia" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com/garantia</a>.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">RESOLUÇÃO DE LITÍGIOS EM LINHA (ODR)</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Em cumprimento do Regulamento (UE) 524/2013, informa-se os consumidores de que a Comissão Europeia disponibiliza uma plataforma de resolução de litígios em linha, acessível em{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://ec.europa.eu/consumers/odr</a>.
            O utilizador pode também dirigir as suas reclamações por correio eletrónico para <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
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
          <h2 className="text-2xl font-bold mb-4 text-[#FF6600]">AVVISO LEGALE E CONDIZIONI GENERALI</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Nel presente documento di <span className="font-bold">Futura Teck de Murcia S.L.U.</span> sono indicati i termini di utilizzo dei siti web di cui è titolare, nonché la politica generale di contrattazione, nella quale si disciplina il diritto di recesso del cliente, i termini per il suo esercizio, nonché la politica di restituzione e le spese di spedizione.
          </p>
        </div>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">TRASFERIMENTO DEL RISCHIO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Acquisti via Internet</h4>
              <p className="text-sm text-muted-foreground">
                Qualora il cliente opti per i metodi di spedizione offerti da Futura Teck, il rischio è assunto dall'azienda fino alla consegna. Se il cliente opta per un metodo diverso, il rischio si trasferisce dal momento del ritiro.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Negozio Fisico</h4>
              <p className="text-sm text-muted-foreground">
                Il rischio si trasferisce al CLIENTE dal momento stesso in cui egli o un terzo acquisisce il possesso materiale del bene.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">DIRITTO DI RECESSO</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Il diritto di recesso consiste nella facoltà del CLIENTE di rendere inefficace il contratto concluso, previa notifica nel termine legalmente stabilito e senza necessità di giustificazione né penalizzazione.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl">
            <h4 className="font-bold mb-1">Termine di esercizio</h4>
            <p className="text-sm text-muted-foreground">
              Il CLIENTE disporrà di un termine di <span className="font-bold text-foreground">QUATTORDICI GIORNI DI CALENDARIO (14)</span> a partire dal ricevimento del prodotto.
            </p>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">ECCEZIONI</h3>
          <ul className="space-y-3">
            {[
              "Prodotti personalizzati o realizzati su misura.",
              "Beni suscettibili di deteriorarsi rapidamente (inchiostro, cartucce aperte).",
              "Stampanti e plotter una volta provati (uso di cartucce)."
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl text-sm italic">
                <span className="text-[#FF6600] font-black text-xl">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">PRODOTTO DIFETTOSO</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Se il prodotto è difettoso, si può optare tra la riparazione gratuita o la sostituzione. Futura Teck rimborserà le spese di spedizione originarie. Tuttavia, le spese di spedizione all'azienda per la riparazione sono a carico del CLIENTE.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">GARANZIA LEGALE DI CONFORMITÀ</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            In conformità con la Legge Generale per la Difesa dei Consumatori e Utenti (Testo consolidato approvato con RDLeg 1/2007, nella redazione data dal RD-Ley 7/2021), Futura Teck de Murcia S.L.U. risponde dei difetti di conformità dei beni per un termine di <span className="font-bold text-foreground">TRE (3) ANNI</span> dalla consegna.
          </p>
          <div className="bg-[#FF6600]/5 border-l-4 border-[#FF6600] p-6 rounded-r-2xl space-y-2">
            <h4 className="font-bold">Periodi per modello</h4>
            <p className="text-sm text-muted-foreground">
              La maggior parte dei modelli Beinsen dispone di garanzia di <span className="font-bold text-foreground">3 anni</span>. I modelli <span className="font-semibold text-foreground">Andra, Tobago, Miranda e Felina</span> dispongono di garanzia di <span className="font-bold text-foreground">1 anno</span>. L'attivazione della copertura estesa richiede la registrazione del dispositivo su <a href="https://soporte.beinsen.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com</a> entro 90 giorni dall'acquisto.
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Le condizioni complete della garanzia, le esclusioni, le procedure di reclamo e il supporto tecnico sono pubblicate e mantenute aggiornate su{" "}
            <a href="https://soporte.beinsen.com/garantia" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">soporte.beinsen.com/garantia</a>.
          </p>
        </section>

        <section className="mb-12 space-y-6">
          <h3 className="text-xl font-bold">RISOLUZIONE DELLE CONTROVERSIE ONLINE (ODR)</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            In ottemperanza al Regolamento (UE) 524/2013, si informano i consumatori che la Commissione Europea mette a loro disposizione una piattaforma di risoluzione delle controversie online, accessibile su{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">https://ec.europa.eu/consumers/odr</a>.
            L'utente può inoltre inoltrare i suoi reclami via posta elettronica a <a href="mailto:info@beinsen.com" className="text-[#FF6600] hover:underline">info@beinsen.com</a>.
          </p>
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Versione 1.0 — Ultimo aggiornamento: 2 giugno 2026
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
