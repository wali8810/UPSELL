import { Check } from "lucide-react";

const features = [
    "26 batidas com exemplos em vídeo",
    "Ritmos para louvor, MPB, pop, sertanejo e forró",
    "Aplicação prática em músicas reais",
    "Aulas curtas, simples e sem enrolação",
    "Método 100% prático, ideal pra quem tem pouco tempo"
];

export function Features() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">O QUE VOCÊ VAI DOMINAR:</h2>
            <ul className="space-y-4 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-lg p-4 rounded-lg bg-secondary/50">
                        <Check className="h-6 w-6 text-green-500 mr-4 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
