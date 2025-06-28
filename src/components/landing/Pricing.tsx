import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const basicPlanFeatures = {
  included: ["Acesso vitalício ao curso principal"],
  excluded: ["Sem bônus", "Sem suporte personalizado"]
};

const completePlanFeatures = [
  "Curso completo com 26 batidas",
  "Todos os 5 bônus",
  "Acesso vitalício",
  "Suporte individual por e-mail",
  "Grupo VIP com dicas e desafios semanais",
  "Material PDF de apoio"
];

export function Pricing() {
  return (
    <section id="plans" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Escolha sua Oferta</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <Card className="flex-1 flex flex-col w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">PLANO BÁSICO</CardTitle>
              <p className="text-4xl font-bold pt-2">R$12,90</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {basicPlanFeatures.included.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
                {basicPlanFeatures.excluded.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Escolher esta opção</Button>
            </CardFooter>
          </Card>

          {/* Plano Completo */}
          <Card className="flex-1 flex flex-col w-full border-primary border-2 relative shadow-lg shadow-primary/20">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Recomendado</Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">PLANO COMPLETO</CardTitle>
              <p className="text-4xl font-bold pt-2">R$27,00</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {completePlanFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">ESCOLHER ESTA OPÇÃO</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
