import Image from "next/image";

const testimonials = [
  {
    src: "https://picsum.photos/400/401",
    alt: "Depoimento de aluna satisfeita 1"
  },
  {
    src: "https://picsum.photos/400/402",
    alt: "Depoimento de aluna satisfeita 2"
  },
  {
    src: "https://picsum.photos/400/403",
    alt: "Depoimento de aluna satisfeita 3"
  },
  {
    src: "https://imgur.com/Hx06IEj.png",
    alt: "Depoimento de aluna satisfeita 4"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">Milhares de mulheres já treinam conosco. Veja o que elas dizem:</h2>
           <p className="text-lg mt-4 text-muted-foreground">Eles estão <span className="text-accent underline">transformando o som do violão.</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-1">
              <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={400}
                  height={400}
                  className="w-auto h-full object-contain"
                  data-ai-hint="user testimonial social"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
