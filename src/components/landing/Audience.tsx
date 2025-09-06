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

const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-primary mt-1 shrink-0"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-6 w-6 text-destructive mt-1 shrink-0"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
  </svg>
);

export function Audience() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-wide flex items-center justify-center gap-3">
              <XIcon />
              Você está cansado de:
            </h2>
            <div className="space-y-4 text-left">
              {tiredOfItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border transition-all hover:shadow-xl hover:border-destructive/50 shadow-lg">
                  <XIcon />
                  <p className="text-foreground/90 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
           <div>
            <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-wide flex items-center justify-center gap-3">
              <CheckIcon />
             E se…
            </h2>
            <div className="space-y-4 text-left">
              {whatIfItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border transition-all hover:shadow-xl hover:border-primary/50 shadow-lg">
                  <CheckIcon />
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
