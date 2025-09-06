import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

export function SecondaryMockup() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl">
        <div className="md:w-1/2 flex-shrink-0">
          <Image 
            src="https://picsum.photos/600/600"
            alt="Exemplos de cartões decorados prontos para venda"
            width={600}
            height={600}
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="decorated cards product"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-wide">Em questão de minutos você pode criar peças como essas prontas para vender.</h2>
            <p className="text-lg text-muted-foreground mb-6">
                Coloque as mãos nas ferramentas para construir uma fonte de renda de mais de <span className="text-accent font-semibold">US$ 2.000 por mês</span>.
            </p>
            <div className="flex flex-col items-center md:items-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>Descubra a solução: seu curso, seu negócio imediato.</span>
                </div>
            </div>
            <a href="#plans" className="inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl h-auto py-4 transform hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse-pink">
                Comece hoje mesmo e tenha acesso imediato!
              </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
