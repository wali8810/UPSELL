import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
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
                  <p className="text-4xl font-extrabold text-primary">US$21,90</p>
                  <p className="uppercase font-bold text-foreground/70 text-sm">Pagamento único</p>
                </div>
                <ul className="text-left space-y-3 my-8 text-muted-foreground flex-grow">
                  {planoBasicoFeatures.included.map((item, index) => (
                    <li key={`basic-inc-${index}`} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {planoBasicoFeatures.notIncluded.map((item, index) => (
                     <li key={`basic-not-${index}`} className="flex items-start text-muted-foreground/50 line-through">
                      <X className="h-5 w-5 text-destructive/50 mr-2 shrink-0 mt-1" />
                      <span>{item}</span>
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
            <BackgroundGradient
              containerClassName="w-full rounded-2xl h-full"
              className="bg-card text-foreground rounded-2xl shadow-2xl flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow text-center relative">
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold border-none shadow-lg">MAIS VENDIDO</Badge>
                
                <h3 className="text-2xl font-bold uppercase mb-4 mt-5">Plano Completo</h3>

                <div className="text-center my-8">
                  <p className="text-red-500 line-through text-xl">Preço normal: US$57,50</p>
                  <p className="text-6xl font-extrabold text-primary">US$8</p>
                  <p className="uppercase font-bold text-foreground">Dólares Americanos</p>
                </div>
                
                <ul className="text-left space-y-3 my-8 text-muted-foreground flex-grow">
                  {planoCompletoFeatures.map((item, index) => (
                    <li key={`complete-${index}`} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <div className="flex justify-center">
                    <a href="https://pay.kirvano.com/278d35c1-ece3-4c43-90f3-f35474a70d92" target="_blank" rel="noopener noreferrer" className="block w-full">
                       <HoverBorderGradient
                          as="button"
                          containerClassName="w-full rounded-md"
                          className="w-full bg-primary text-primary-foreground font-bold text-lg md:text-xl h-auto py-4"
                        >
                          SIM! QUERO ESSA SUPER OFERTA!
                        </HoverBorderGradient>
                     </a>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
