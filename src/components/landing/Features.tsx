import { Check } from "lucide-react";

const features = [
    "Guia completo do zero: Vídeos passo a passo que ensinam como selecionar materiais acessíveis, traços de mestre, letras e acabamentos premium.",
    "Modelos e recursos prontos para uso: Aprenda a criar um cardápio em menos de 30 minutos, otimizando seu tempo para receber mais pedidos.",
    "Plano de lançamento de 7 dias: Um calendário de ações diárias para que, até o final da semana, você tenha seu negócio funcionando e sua primeira renda.",
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">ISTO É TUDO O QUE ESTÁ INCLUÍDO</h2>
            <p className="text-lg text-muted-foreground mb-10 -mt-4">Com este curso, você não aprende apenas técnicas: você começa seu negócio desde o primeiro módulo.</p>
            <ul className="space-y-4 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-lg p-4 rounded-lg bg-card border border-border shadow-md transition-all hover:shadow-xl hover:border-primary">
                        <Check className="h-8 w-8 text-primary mr-4 shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
