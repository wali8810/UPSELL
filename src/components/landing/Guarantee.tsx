import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Guarantee() {
  return (
    <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex flex-col items-center">
                <Image 
                    src="https://i.imgur.com/3nS8KCV.png"
                    alt="Selo de Garantia de 30 dias"
                    width={250}
                    height={250}
                    className="mx-auto"
                    data-ai-hint="satisfaction guarantee seal"
                    priority
                />
                <div className="text-center mt-8">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-destructive uppercase tracking-wide mb-2">A Minha Garantia Pessoal Risco Zero!</h3>
                    <div className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        <p className="mb-4">Adicione o curso ao seu pedido agora. Mergulhe no conteúdo, aplique o método, crie as suas primeiras caixas. Se dentro de 30 dias você não sentir que este foi o melhor investimento de €9,90 que já fez para a sua independência financeira, eu devolvo cada cêntimo.</p>
                        <p className="font-bold">Sem perguntas, sem ressentimentos. O risco é todo meu.</p>
                    </div>
                </div>
            </div>
            
            <hr className="border-border my-12" />

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                ÚLTIMA OPORTUNIDADE DE ADICIONAR COM DESCONTO
            </h2>

            <div className="mb-4">
                <a href="#plans" className="inline-block">
                  <Button size="lg" className="cta-button shadow-lg text-center h-auto whitespace-normal animate-pulse-green leading-tight">
                    SIM, EU QUERO O ACESSO COMPLETO E OS BÓNUS POR APENAS €9,90!
                  </Button>
                </a>
            </div>
            <a href="#" className="text-gray-500 underline text-sm">Não, Eugênia, obrigado. Eu dispenso a sua ajuda e prefiro aprender da maneira mais difícil, mesmo que isso signifique errar, frustrar-me e gastar mais dinheiro em material do que o valor deste curso.</a>
            
        </div>
    </section>
  );
}
