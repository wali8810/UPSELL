import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">PRODUTO COM RISCO ZERO!</h2>
          <p className="text-xl md:text-2xl font-semibold mt-2 text-accent">GARANTIA INCONDICIONAL DE 7 DIAS</p>
          
          <div className="flex justify-center my-8">
            <Image 
              src="https://i.imgur.com/TYxqyrh.png" 
              alt="Selo de Garantia de 7 dias"
              width={200}
              height={200}
              className="w-32 h-32 md:w-40 md:h-40"
              data-ai-hint="guarantee seal"
            />
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Se por qualquer motivo você não gostar do conteúdo, devolvemos 100% do seu dinheiro — sem burocracia.
          </p>

          <div className="text-left max-w-md mx-auto space-y-3 mb-10">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Entre em contato através do nosso suporte</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Informe o motivo (opcional)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Reembolso em até 5 dias úteis</span>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
             <Image 
              src="https://i.imgur.com/vHqQ9sE.png" 
              alt="Clique no botão abaixo para garantir o curso com desconto e segurança"
              width={600}
              height={150}
              className="w-full max-w-lg"
              data-ai-hint="security icons"
            />
          </div>

          <a href="#plans">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl h-auto py-4 px-10 transform hover:scale-105 transition-transform duration-300">
              LIBERAR MEU ACESSO AGORA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
