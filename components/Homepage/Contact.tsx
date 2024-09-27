import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-4 pb-12 pt-12">
        <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
          Contattami
        </h2>
        <h3 className="text-center font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
          E PIANIFICHIAMO IL TUO PERCORSO
        </h3>
        <p className="text-center font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
          Se desideri saperne di più sui miei servizi di arteterapia o hai
          domande sui progetti che ho sviluppato, non esitare a contattarmi.
          Sarò felice di rispondere alle tue domande e di aiutarti a scoprire
          come l&apos;arteterapia può supportare il tuo percorso di benessere.
          Puoi raggiungermi attraverso il modulo qui sotto, via email o sui
          social media.
        </p>
        <div className="mt-4 flex flex-col gap-8 md:flex-row">
          <Link
            className="flex gap-4"
            href="https://www.instagram.com/elisa.daolio/"
          >
            <Image
              src="/images/ig-icon.png"
              alt="instagram"
              width={30}
              height={400}
            ></Image>
            <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              elisa.daolio
            </p>
          </Link>
          <div className="flex gap-4">
            <Image
              src="/images/mail-icon.png"
              alt="instagram"
              width={30}
              height={400}
            ></Image>
            <Link href="mailto:elisadaolio16@gmail.com">
              <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
                elisadaolio16@gmail.com
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
