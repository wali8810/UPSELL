import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonusData = [
  {
    title: "Bônus 1: Mini eBook de Acordes",
    description: "Os acordes essenciais para você combinar com as batidas e tocar centenas de músicas.",
    image: "https://placehold.co/400x250.png",
    alt: "Bônus sobre acordes de apoio",
    value: "R$19,90",
    aiHint: "guitar chords"
  },
  {
    title: "Bônus 2: Guia de Transições",
    description: "A técnica para trocar de acordes de forma rápida e suave, sem travar a música.",
    image: "https://placehold.co/400x250.png",
    alt: "Bônus sobre guia de transições suaves",
    value: "R$27,00",
    aiHint: "guitar learning"
  },
  {
    title: "Bônus 3: Lista de Músicas",
    description: "Uma seleção de músicas fáceis e populares para você praticar cada uma das 26 batidas.",
    image: "https://placehold.co/400x250.png",
    alt: "Bônus com lista de músicas para treinar",
    value: "R$15,00",
    aiHint: "music playlist"
  },
];

export function Bonuses() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span role="img" aria-label="gift">🎁</span> E você ainda leva <span className="text-primary">3 Bônus Exclusivos</span>
          </h2>
          <p className="text-muted-foreground mt-2">Comprando hoje, você garante acesso gratuito a estes materiais de apoio.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonusData.map((bonus, index) => (
            <Card key={index} className="bg-card/80 border-border overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <CardHeader className="p-0 relative">
                <Image
                  src={bonus.image}
                  alt={bonus.alt}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                  data-ai-hint={bonus.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                <p className="text-muted-foreground flex-grow">{bonus.description}</p>
                 <div className="mt-4 flex items-center justify-between">
                  <span className="text-muted-foreground line-through">{bonus.value}</span>
                  <Badge variant="destructive" className="bg-green-600 text-white">GRÁTIS</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
