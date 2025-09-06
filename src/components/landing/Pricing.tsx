import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const planoCompletoFeatures = [
  "Curso de Letras Decorativas com Vídeos Passo a Passo",
  "Bônus 1: Como vender nas redes sociais",
  "Bônus 2: Manual de vendas pronto para uso",
  "Bônus 3: Guia rápido para encontrar inspiração",
  "Bônus 4: Mini curso de publicidade e vendas"
];

const planoBasicoFeatures = {
  included: [
    "Curso de Letras Decorativas (eBook)",
  ],
  notIncluded: [
    "Bônus 1: Como vender nas redes sociais",
    "Bônus 2: Manual de vendas pronto para uso",
    "Bônus 3: Guia rápido para encontrar inspiração",
    "Bônus 4: Mini curso de publicidade e vendas",
    "Vídeos Explicativos Passo a Passo"
  ]
}

const StarIcon = () => (
  <svg
    className="w-7 h-7 text-yellow-400"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-primary mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-5 w-5 text-destructive/50 mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
  </svg>
);


export function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">ESCOLHA O PLANO PERFEITO PARA VOCÊ</h2>
            <p className="text-muted-foreground mt-2">Comece a lucrar com sua arte hoje mesmo!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          
          {/* Plano Básico */}
          <div className="w-full max-w-md">
            <div className="bg-card text-foreground rounded-2xl shadow-lg flex flex-col h-full border border-border">
              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold uppercase mb-4">Plano Básico</h3>
                 <div className="text-center my-8">
                  <p className="text-6xl font-bold" style={{ color: '#00BD39', lineHeight: '34px', letterSpacing: '-0.9px' }}>R$21,90</p>
                  <p className="uppercase font-bold text-foreground/70 text-sm">Pagamento único</p>
                </div>
                <ul className="text-left space-y-3 my-8 text-muted-foreground flex-grow">
                  {planoBasicoFeatures.included.map((item, index) => (
                    <li key={`basic-inc-${index}`} className="flex items-start">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                  {planoBasicoFeatures.notIncluded.map((item, index) => (
                     <li key={`basic-not-${index}`} className="flex items-start text-muted-foreground/50">
                      <XIcon />
                      <span className="line-through">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <a href="https://pay.kirvano.com/268fafab-5986-464b-9c14-bcdfa52ce9a2" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button size="lg" variant="outline" className="w-full text-lg py-6">
                        QUERO ESSA OPÇÃO!
                      </Button>
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* Plano Completo */}
          <div className="w-full max-w-md">
            <div
              className="bg-card text-foreground rounded-2xl shadow-2xl flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow text-center relative" style={{ backgroundColor: '#FF3232', borderRadius: '20px' }}>
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold border-none shadow-lg">MAIS VENDIDO</Badge>
                
                <div className="flex justify-center mt-5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 mt-2 text-white">Plano Completo</h3>

                <div className="text-center my-8">
                  <p className="text-white line-through text-xl red-strike">Preço normal: US$57,50</p>
                  <p className="text-6xl font-extrabold text-white">R$19,90</p>
                  <p className="uppercase font-bold text-white">Pagamento único</p>
                </div>
                
                <ul className="text-left space-y-3 my-8 text-white flex-grow">
                  {planoCompletoFeatures.map((item, index) => (
                    <li key={`complete-${index}`} className="flex items-start">
                      <CheckIcon />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <div className="flex justify-center">
                    <a href="https://pay.kirvano.com/278d35c1-ece3-4c43-90f3-f35474a70d92" target="_blank" rel="noopener noreferrer" className="block w-full">
                       <button className="cta-button w-full">
                          SIM! QUERO ESSA SUPER OFERTA!
                        </button>
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
