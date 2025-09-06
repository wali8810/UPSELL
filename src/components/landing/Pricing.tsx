import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const includedItems = [
  "Curso de Letras Decorativas com Vídeos Passo a Passo",
  "Bônus 1: Como vender nas redes sociais",
  "Bônus 2: Manual de vendas pronto para uso",
  "Bônus 3: Guia rápido para encontrar inspiração",
  "Bônus 4: Mini curso de publicidade e vendas"
];

export function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
            <BackgroundGradient
              containerClassName="w-full max-w-2xl rounded-2xl"
              className="bg-card text-foreground rounded-2xl shadow-2xl flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow text-center">
                <h2 className="text-3xl font-extrabold uppercase mb-4">Vamos recapitular tudo o que você receberá HOJE</h2>
                <p className="text-muted-foreground mb-8">Isto é o que você receberá em menos de um minuto:</p>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3">
                      <Image
                          src="https://picsum.photos/300/300"
                          alt="Mockup do curso e bônus"
                          width={300}
                          height={300}
                          className="rounded-lg shadow-lg"
                          data-ai-hint="ebook cover bonuses"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                        <ul className="divide-y divide-border text-left inline-block">
                          {includedItems.map((item, index) => (
                            <li key={`complete-${index}`} className="flex items-start py-2">
                              <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
                              <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }} />
                            </li>
                          ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center my-8">
                  <p className="text-red-500 line-through text-xl">Preço normal: US$57,50</p>
                  <p className="text-6xl font-extrabold text-primary">US$8</p>
                  <p className="uppercase font-bold text-foreground">Dólares Americanos</p>
                </div>

                <div className="mt-auto">
                   <div className="flex justify-center">
                    <a href="https://pay.kirvano.com/278d35c1-ece3-4c43-90f3-f35474a70d92" target="_blank" rel="noopener noreferrer" className="block w-full max-w-md">
                       <HoverBorderGradient
                          as="button"
                          containerClassName="w-full rounded-md"
                          className="w-full bg-primary text-primary-foreground font-bold text-lg md:text-xl h-auto py-4"
                        >
                          EU QUERO AGORA!
                        </HoverBorderGradient>
                     </a>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
