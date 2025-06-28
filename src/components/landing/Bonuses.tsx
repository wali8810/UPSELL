import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonusData = [
  {
    title: "Bônus 01: Ritmos de Louvor e Adoração",
    description: "Aprenda batidas perfeitas para tocar músicas de louvor em casa, na igreja ou com amigos.",
    image: "https://i.imgur.com/LY2GNNr.png",
    alt: "Bônus sobre ritmos de louvor e adoração"
  },
  {
    title: "Bônus 02: Guia de Transições Suaves",
    description: "Diga adeus às pausas ruins entre os acordes. Toque com fluidez mesmo se for iniciante.",
    image: "https://i.imgur.com/5jFu3ET.png",
    alt: "Bônus sobre guia de transições suaves"
  },
  {
    title: "Bônus 03: Levadas para Roda de Amigos",
    description: "Toque músicas que animam qualquer ambiente. 100% práticas e com repertório incluso.",
    image: "https://i.imgur.com/pMYLy0C.png",
    alt: "Bônus sobre levadas para roda de amigos"
  },
  {
    title: "Bônus 04: Bateria de Exercícios Rítmicos",
    description: "Treine sua mão direita com exercícios práticos e simples para melhorar a precisão nas batidas.",
    image: "https://i.imgur.com/zE0zyv5.png",
    alt: "Bônus sobre exercícios rítmicos"
  },
  {
    title: "Bônus 05: E-book “Segredos da Mão Direita”",
    description: "O guia definitivo para dominar a técnica de batida. Ideal para evoluir rapidamente.",
    image: "https://i.imgur.com/FLcLQWF.png",
    alt: "Bônus e-book segredos da mão direita"
  },
];

export function Bonuses() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span role="img" aria-label="gift">🎁</span> Bônus Exclusivos para Quem Comprar Agora
          </h2>
          <p className="text-muted-foreground mt-2">Apenas na oferta de lançamento. Valem hoje.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonusData.map((bonus, index) => (
            <Card key={index} className="bg-secondary border-border/50 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="p-0 relative">
                <Badge variant="destructive" className="absolute top-2 left-2 bg-red-600 text-white">GRÁTIS</Badge>
                <Image
                  src={bonus.image}
                  alt={bonus.alt}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                  data-ai-hint="guitar learning"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
