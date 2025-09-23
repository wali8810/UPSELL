import Image from "next/image";
import imageData from '@/app/lib/placeholder-images.json';

const creations = [
  {
    image: imageData.creation1,
    caption: "Criar caixas que valem €15 ou mais.",
  },
  {
    image: imageData.creation2,
    caption: "Dominar um acabamento perfeito e profissional.",
  },
  {
    image: imageData.creation3,
    caption: "Produzir em série sem perder a qualidade.",
  },
  {
    image: imageData.creation4,
    caption: "Vender para casamentos, eventos e empresas.",
  },
];

export function WhatYouWillMake() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-tight mb-2 text-black font-montserrat">
            <span role="img" aria-label="pointing finger">👉</span> O Poder Criativo nas Suas Mãos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme materiais simples em peças únicas e lucrativas que as clientes desejam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {creations.map((creation, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={creation.image.src}
                  alt={creation.image.alt}
                  width={creation.image.width}
                  height={creation.image.height}
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-500"
                  data-ai-hint={creation.image.hint}
                />
              </div>
              <p className="mt-4 text-base md:text-lg font-semibold text-foreground">
                {creation.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
