import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    src: "https://i.imgur.com/RSo4tUO.jpeg",
    alt: "Depoimento de aluno satisfeito 1"
  },
  {
    src: "https://i.imgur.com/LVgGjrz.jpeg",
    alt: "Depoimento de aluno satisfeito 2"
  },
  {
    src: "https://i.imgur.com/e1L0Ua7.jpeg",
    alt: "Depoimento de aluno satisfeito 3"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">O que nossos alunos dizem</h2>
        </div>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden bg-secondary border-border/50">
                    <CardContent className="p-0">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={400}
                        height={400}
                        className="aspect-square w-full object-contain"
                        data-ai-hint="user testimonial"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
