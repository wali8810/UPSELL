import Image from "next/image";

export function SecondaryMockup() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="max-w-md">
          <Image 
            src="https://i.imgur.com/ZZK7Oy6.png"
            alt="Mockup do material digital"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
            data-ai-hint="ebook cover"
          />
        </div>
        <p className="mt-6 text-muted-foreground max-w-md">
          Material digital com acesso vitalício. Após a compra você receberá acesso imediato via e-mail.
        </p>
      </div>
    </section>
  );
}
