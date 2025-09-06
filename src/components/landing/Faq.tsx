import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Em quantos dispositivos posso usar os arquivos?",
    answer: "Você pode baixar e usar os arquivos em quantos dispositivos quiser: computador, tablet ou celular."
  },
  {
    question: "Por quanto tempo e quantas vezes posso baixar as planilhas?",
    answer: "O acesso é vitalício! Você pode baixar os materiais quantas vezes precisar, para sempre."
  },
  {
    question: "Preciso de algum programa especial para abrir os arquivos?",
    answer: "Não. Os arquivos são em formato PDF e podem ser abertos em qualquer dispositivo com um leitor de PDF, como o Adobe Reader, que é gratuito."
  },
  {
    question: "Existe uma garantia?",
    answer: "Sim! Oferecemos uma garantia de satisfação de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem complicações."
  },
  {
    question: "Preciso de acesso à Internet para usar os arquivos?",
    answer: "Você só precisa de internet para baixar os arquivos. Depois de salvos no seu dispositivo, você pode acessá-los a qualquer momento, mesmo offline."
  }
];

export function Faq() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            <span role="img" aria-label="question mark">❓</span> Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mt-2">Esclareça todas as suas dúvidas</p>
        </div>
        <Accordion type="single" collapsible className="w-full bg-card border border-border rounded-lg p-2 md:p-4 shadow-lg">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className={index === faqItems.length - 1 ? "border-b-0" : ""}>
              <AccordionTrigger className="text-lg text-left hover:no-underline px-4">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base px-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
