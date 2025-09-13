
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿En cuántos dispositivos puedo usar los archivos?",
    answer: "Una vez que descargues los archivos, puedes copiarlos y compartirlos en todos tus dispositivos."
  },
  {
    question: "¿Por cuánto tiempo y cuántas veces puedo descargar las plantillas?",
    answer: "Podrás acceder a los archivos cuando quieras, sin límites de tiempo o acceso. Entendemos que, después de la compra, el archivo es tuyo y no hay límites de tiempo. ¡El acceso es vitalicio!"
  },
  {
    question: "¿Necesito algún programa especial para abrir los archivos?",
    answer: "Solo necesitas un lector de PDF para abrir e imprimir los archivos. Actualmente, todos los dispositivos (PC, Android, iOS) soportan este formato."
  },
  {
    question: "¿Hay alguna garantía?",
    answer: "Ofrecemos a nuestros clientes una garantía de satisfacción de 30 días. Si durante este período no estás satisfecho con nuestro producto, envíanos un correo electrónico para solicitar un reembolso completo, sin preguntas. Queremos asegurarnos de que nuestros clientes estén completamente satisfechos con su compra."
  },
  {
    question: "¿Necesito acceso a Internet para usar los archivos?",
    answer: "Solo necesitas una conexión a internet para descargar los archivos."
  }
];

export function Faq() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
            <span role="img" aria-label="question mark">❓</span> Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground mt-2">Aclara todas tus dudas</p>
        </div>
        <Accordion type="single" collapsible className="w-full bg-black text-yellow-400">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-white/30">
              <AccordionTrigger className="text-md md:text-lg text-left hover:no-underline py-6">{item.question}</AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
