import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonusData = [
  {
    title: "Bônus 1: Top 50 Gospel",
    description: "Uma seleção exclusiva das melhores músicas gospel cifradas, ideal para louvores e momentos de adoração.",
    image: "https://i.imgur.com/BEK0mhM.png",
    alt: "Bônus Top 50 Gospel",
    value: "R$19,90",
    aiHint: "gospel sheet music"
  },
  {
    title: "Bônus 2: Top 50 Rock Internacional",
    description: "Grandes sucessos do rock britânico e americano, com cifras precisas para músicos de todos os níveis.",
    image: "https://i.imgur.com/PPugZ2o.png",
    alt: "Bônus Top 50 Rock Internacional",
    value: "R$27,00",
    aiHint: "rock music guitar"
  },
  {
    title: "Bônus 3: Top 50 Sertanejo",
    description: "Descubra os melhores modões e sertanejo universitário com cifras completas.",
    image: "https://i.imgur.com/T7lmnPm.png",
    alt: "Bônus Top 50 Sertanejo",
    value: "R$15,00",
    aiHint: "sertanejo sheet music"
  },
  {
    title: "Bônus 4: Top 50 MPB",
    description: "Clássicos e contemporâneos da música brasileira reunidos em um único lugar.",
    image: "https://i.imgur.com/JQQDJtj.png",
    alt: "Bônus Top 50 MPB",
    value: "R$22,00",
    aiHint: "mpb sheet music"
  },
  {
    title: "Bônus 5: Rock / Pop Nacional",
    description: "Clássicos inesquecíveis do rock e pop brasileiro, desde Legião Urbana até Jota Quest.",
    image: "https://i.imgur.com/urXcrKy.png",
    alt: "Bônus Rock / Pop Nacional",
    value: "R$12,00",
    aiHint: "brazilian rock music"
  }
];

export function Bonuses() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            <span role="img" aria-label="gift">🎁</span> E você ainda leva <span className="text-accent underline">5 Bônus Exclusivos</span>
          </h2>
          <p className="text-destructive font-bold mt-2 max-w-2xl mx-auto text-xl tracking-wide">(ISSO TERMINA HOJE)</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonusData.map((bonus, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col shadow-lg">
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
                  <Badge variant="default" className="bg-primary text-primary-foreground border-none font-bold">GRÁTIS</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
