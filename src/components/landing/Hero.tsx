import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative text-white py-24 md:py-40 flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Pessoa tocando violão ao fundo"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-15"
          data-ai-hint="guitar playing background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide leading-tight">
            Mude sua forma de tocar com<br />
            <span className="text-primary">as batidas que transformam!</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Descubra como dominar as 26 batidas mais tocadas de forma simples e prática.
          </p>

          <div className="mt-10 w-full max-w-xs md:max-w-sm">
            <Image
              src="https://i.imgur.com/FLcLQWF.png"
              alt="Mockup do eBook 'As 26 Batidas Mais Poderosas'"
              width={500}
              height={500}
              priority
              className="rounded-lg shadow-2xl shadow-primary/20"
              data-ai-hint="ebook cover 3d"
            />
          </div>
          
          <div className="mt-8 flex flex-col items-center space-y-4">
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                <p className="text-lg text-muted-foreground">DE <span className="line-through">R$67,00</span> POR APENAS</p>
                <div className="flex items-center justify-center gap-4">
                    <p className="text-5xl font-bold text-accent">R$16,90</p>
                </div>
            </div>
            
            <a href="#plans" className="w-full max-w-xs">
              <Button size="lg" className="bg-[#00C853] hover:bg-[#00B148] text-black font-bold text-xl h-auto py-4 w-full transform hover:scale-105 transition-transform duration-300 shadow-lg">
                QUERO APRENDER AGORA!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
