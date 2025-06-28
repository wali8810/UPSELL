import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonusData = [
  {
    title: "Bônus 1: Ritmos e Exercícios",
    description: "Aprofunde seu conhecimento com exercícios rítmicos que vão solidificar sua batida.",
    image: "https://i.imgur.com/L4zK2x7.png",
    alt: "Bônus de ritmos e exercícios rítmicos",
    value: "R$19,90",
    aiHint: "music stand sheet"
  },
  {
    title: "Bônus 2: Guia de Transições",
    description: "Domine a arte de trocar de acordes sem esforço para que suas músicas fluam perfeitamente.",
    image: "https://i.imgur.com/qiwkg1e.png",
    alt: "Bônus sobre guia de transições suaves",
    value: "R$27,00",
    aiHint: "guitar chord transition"
  },
  {
    title: "Bônus 3: Cifras em PDF",
    description: "Uma coleção de cifras em PDF para você aplicar as batidas aprendidas em músicas populares.",
    image: "https://i.imgur.com/3S4eXiK.png",
    alt: "Bônus com lista de músicas para treinar",
    value: "R$15,00",
    aiHint: "sheet music pdf"
  }
];

export function Bonuses() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            <span role="img" aria-label="gift">🎁</span> E você ainda leva <span className="text-primary">3 Bônus Exclusivos</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Comprando hoje, você garante acesso gratuito a estes materiais de apoio que vão acelerar sua jornada no violão.</p>
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
                  <Badge variant="destructive" className="bg-green-600 text-white border-none">GRÁTIS</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
