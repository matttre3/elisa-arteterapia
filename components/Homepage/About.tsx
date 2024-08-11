import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-4">
      <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
        Chi sono?
      </h2>
      <h3 className="text-center font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
        E COSA POSSO FARE PER TE?
      </h3>
      <p className="text-center font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
        Sono Elisa, <strong>psicologa e arteterapeuta</strong> con una laurea in
        Psicologia e magistrale in Arteterapia. Combinando l&apos;arte con la
        psicologia, ti aiuto a scoprire e comprendere le tue emozioni in modo
        creativo e profondo. Se cerchi un percorso autentico e sensibile per il
        tuo benessere, sarò felice di accompagnarti.
      </p>
      <div className="flex flex-col items-center justify-center gap-10 md:mt-14 md:flex-row">
        <div className="flex flex-row justify-center gap-10">
          <div className="md:order-0 order-1 flex flex-col gap-10">
            <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Diploma Liceo Artistico
            </p>
            <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Laurea Triennale in Psicologia
            </p>
            <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Laurea Magistrale in Terapeutica Artistica
            </p>
          </div>
          <div className="order-0 relative flex w-1 items-center justify-center md:order-1">
            <div className="h-full w-1 bg-standard"></div>
            <div className="absolute top-0 h-3 w-3 rounded-full bg-standard"></div>
            <div className="absolute top-1/2 h-3 w-3 rounded-full bg-standard"></div>
            <div className="absolute top-full h-3 w-3 rounded-full bg-standard"></div>
          </div>
        </div>
        <div>
          <Image
            className="w-80"
            src="/images/elisa-laurea.png"
            alt="laurea elisa daolio"
            width={200}
            height={200}
          />
        </div>
      </div>
      <Link
        className="md:text-2l mt-14 w-80 border-2 border-slate-600 p-4 text-center font-anaheimmedium text-xl tracking-widest text-standard transition-all hover:bg-sky-200 md:w-[500px] lg:text-2xl"
        href="/servizi"
      >
        SCOPRI DI PIU&apos;
      </Link>
    </div>
  );
}
