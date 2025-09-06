import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ThumbsUp, Lock } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center bg-card border border-border rounded-lg p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-destructive uppercase tracking-wide">Garantia de Satisfação!</h2>
          
          <div className="flex justify-center my-8">
            <Image 
              src="https://picsum.photos/150/150"
              alt="Selo de Garantia de 7 dias"
              width={150}
              height={150}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full"
              data-ai-hint="guarantee seal"
            />
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Se, por algum motivo, você não gostar deste produto ou se ele não atender às suas expectativas, você terá uma garantia de reembolso de 7 dias. Sem e-mails inconvenientes, sem mensagens de texto. Basta solicitar a devolução pelo e-mail lamaestracreativa@gmail.com.
          </p>
          
          <a href="#plans" className="inline-block w-full max-w-md">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl h-auto py-4 w-full transform hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse-pink">
              EU QUERO AGORA!
            </Button>
          </a>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <span>Compra Segura</span>
            </div>
             <div className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5" />
              <span>Satisfação Garantida</span>
            </div>
             <div className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              <span>Privacidade Protegida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
