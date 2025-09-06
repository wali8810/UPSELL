import Image from "next/image";

const bonusData = [
  {
    bonusNumber: "#01",
    title: (
      <>
        <b>
          <span style={{ color: "#FF8F00" }}>23 NOVOS Modelos</span>
        </b>{" "}
        de Balões que Estão em Alta em 2025
      </>
    ),
    originalPrice: "R$37,00",
    image: "https://imgur.com/E0QxgBv.png",
    alt: "Bônus sobre vendas nas redes sociais",
  },
  {
    bonusNumber: "#02",
    title: (
      <>
        Lista de Fornecedores que Estão{" "}
        <b>
          <span style={{ color: "#FF8F00" }}>Vendendo 37% Abaixo</span>
        </b>
        <br />
        do Valor de Mercado
      </>
    ),
    originalPrice: "R$57,00",
    image: "https://imgur.com/hdbzMRu.png",
    alt: "Bônus manual de vendas",
  },
  {
    bonusNumber: "#03",
    title: (
      <>
        <b>
          <span style={{ color: "#FF8F00" }}>100 Artes Prontas</span>
        </b>{" "}
        de Balões Decorativos para Festas
      </>
    ),
    originalPrice: "R$27,00",
    image: "https://imgur.com/eIcZkRK.png",
    alt: "Bônus guia de inspiração",
  },
];

export function Bonuses() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-tighter leading-tight mb-4 text-black font-montserrat">
            BÔNUS PARA <br />
            <u className="text-accent">PRIMEIRA VISITA</u>...
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 font-montserrat text-black">
            <span className="bg-yellow-400 text-black px-2 py-1">
              4 Bônus exclusivos
            </span>{" "}
            para quem adquirir o CURSO NESTA PÁGINA
          </h3>
          <h4 className="text-2xl font-bold uppercase text-destructive font-montserrat">
            <span style={{ color: "#FF0845" }}>
              (<u>ISSO TERMINA HOJE!</u>)
            </span>
          </h4>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {bonusData.map((bonus, index) => (
            <div
              key={index}
              className="p-4 border-2 border-dashed border-pink-400 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-2">
                <div className="md:w-1/2 text-left space-y-2">
                  <h3 className="text-2xl font-bold font-montserrat text-black">
                    BÔNUS {bonus.bonusNumber}:
                  </h3>
                  <h4 className="text-2xl font-bold font-montserrat text-black">
                    {bonus.title}
                  </h4>
                  <p className="text-xl text-red-500 font-montserrat">
                    De: <s>{bonus.originalPrice}</s>
                  </p>
                  <p className="text-2xl font-bold text-green-500 font-montserrat">
                    Por: <b>GRÁTIS</b>
                  </p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <Image
                    src={bonus.image}
                    alt={bonus.alt}
                    width={350}
                    height={450}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
           <div
              className="p-4 border-2 border-dashed border-pink-400 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-2">
                <div className="md:w-1/2 text-left space-y-2">
                  <h3 className="text-2xl font-bold font-montserrat text-black">
                    BÔNUS #04:
                  </h3>
                  <h4 className="text-2xl font-bold font-montserrat text-black">
                     <b><span style={{ color: "#FF8F00" }}>Técnica de Escritas</span></b> em Balões Decorados
                  </h4>
                  <p className="text-xl text-red-500 font-montserrat">
                    De: <s>R$47,00</s>
                  </p>
                  <p className="text-2xl font-bold text-green-500 font-montserrat">
                    Por: <b>GRÁTIS</b>
                  </p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <Image
                    src="https://imgur.com/0jFdKVH.png"
                    alt="Bônus mini curso de publicidade"
                    width={350}
                    height={450}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
