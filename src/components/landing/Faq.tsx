import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como vou receber o acesso ao material?",
    answer: "O acesso é imediato após a confirmação da compra. Você receberá um e-mail com todas as instruções para acessar a área de membros."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício! Você pode estudar no seu ritmo, quando e onde quiser, para sempre."
  },
  {
    question: "O curso serve para quem nunca tocou violão?",
    answer: "Sim! O método foi pensado para quem está começando do zero e também para quem já toca mas quer evoluir. As aulas são diretas ao ponto e fáceis de acompanhar."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, basta pedir o reembolso e devolveremos 100% do seu dinheiro."
  },
  {
    question: "Quais ritmos vou aprender?",
    answer: "Você vai dominar batidas essenciais para os mais variados estilos, como pop, rock, sertanejo, MPB, forró e ritmos de louvor."
  }
];

export function Faq() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span role="img" aria-label="question mark">❓</span> Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
