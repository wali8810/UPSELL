import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function Hero() {
  return (
    <section className="relative text-white py-20 md:py-32 min-h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Pessoa tocando violão"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="guitar playing"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide leading-tight">
            Mude sua forma de tocar com<br />
            <span className="text-primary">as batidas que transformam!</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Descubra como dominar as 26 batidas de violão mais usadas e transformar seu som do zero — mesmo que seja iniciante!
          </p>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-sm md:max-w-md">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="https://i.imgur.com/FLcLQWF.png"
                      alt="Mockup do produto '26 Batidas Mais Poderosas para Violão'"
                      width={500}
                      height={500}
                      priority
                      className="rounded-lg shadow-2xl"
                      data-ai-hint="product mockup"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="https://i.imgur.com/ZZK7Oy6.png"
                      alt="Variação do mockup do produto"
                      width={500}
                      height={500}
                      className="rounded-lg shadow-2xl"
                      data-ai-hint="ebook cover"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center space-y-4">
            <div className="bg-background/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-lg text-muted-foreground">DE <span className="line-through">R$67,00</span> POR APENAS</p>
                <div className="flex items-center justify-center gap-4">
                    <p className="text-5xl font-bold text-accent">R$16,90</p>
                    <span className="bg-accent text-accent-foreground font-bold py-1 px-3 rounded-md text-sm -rotate-6">RISCO ZERO!</span>
                </div>
            </div>
            
            <a href="#plans">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl h-auto py-4 px-10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                QUERO APROVEITAR
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
