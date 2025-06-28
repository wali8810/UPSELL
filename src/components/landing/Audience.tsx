import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const audienceItems = [
  "Para quem quer sair do básico e tocar de forma rítmica e fluida",
  "Para iniciantes que travam nas batidas e querem aprender com clareza",
  "Para quem já toca e quer variar suas levadas de forma criativa",
  "Para quem quer impressionar amigos, tocar em roda ou na igreja",
];

export function Audience() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            PARA QUEM SÃO ESSAS BATIDAS DE VIOLÃO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {audienceItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background/20 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                <p className="text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
