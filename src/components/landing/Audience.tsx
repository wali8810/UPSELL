import { XCircle, CheckCircle } from "lucide-react";

const tiredOfItems = [
  "Ver que negócio começar com pouco investimento e não saber o que vender...",
  "Sentir-se preso em empregos que esgotam você e não pagam o suficiente.",
  "Observar outros ganhando dinheiro com artesanato enquanto você continua em busca do 'Negócio Lucrativo'.",
];

const whatIfItems = [
  "Suas mãos podem criar cartas tão atraentes que as pessoas pagarão de US$ 15 a US$ 30 sem hesitar.",
  "Seu talento se transforma em uma renda de US$ 1.800 por mês ou mais, trabalhando em casa.",
  "Você pode começar um negócio em casa com um investimento bem pequeno.",
]

export function Audience() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-wide flex items-center justify-center gap-3">
              <XCircle className="h-8 w-8 text-destructive" />
              Você está cansado de:
            </h2>
            <div className="space-y-4 text-left">
              {tiredOfItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border transition-all hover:shadow-xl hover:border-destructive/50 shadow-lg">
                  <XCircle className="h-6 w-6 text-destructive mt-1 shrink-0" />
                  <p className="text-foreground/90 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
           <div>
            <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-wide flex items-center justify-center gap-3">
              <CheckCircle className="h-8 w-8 text-primary" />
             E se…
            </h2>
            <div className="space-y-4 text-left">
              {whatIfItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border transition-all hover:shadow-xl hover:border-primary/50 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <p className="text-foreground/90 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
