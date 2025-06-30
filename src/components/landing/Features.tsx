import { Check } from "lucide-react";

const features = [
    "26 Ritmos e Batidas Essenciais: Explore uma variedade de ritmos cuidadosamente selecionados que abrangem diferentes estilos musicais, desde a valsa até o rock, passando por guarânia e muito mais.",
    "Instruções Detalhadas: Receba instruções passo a passo para cada ritmo, com explicações claras e exemplos práticos que ajudarão você a dominar cada técnica com facilidade.",
    "Material Inspirador: Mais do que um simples livro digital, este guia conecta você com a beleza da música e amplia seu repertório para performances, ensaios e momentos de prática pessoal.",
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">O QUE VOCÊ VAI DOMINAR:</h2>
            <ul className="space-y-4 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-lg p-4 rounded-lg bg-card border border-border shadow-md transition-all hover:shadow-xl hover:border-primary">
                        <Check className="h-6 w-6 text-primary mr-4 shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
