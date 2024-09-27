import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
export default function About() {
  return (
    <div className="mt-12 bg-sky-100">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 pb-12 pt-12">
          <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
            Chi sono?
          </h2>
          <h3 className="text-center font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
            E COSA POSSO FARE PER TE?
          </h3>
          <p className="text-center font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
            Sono Elisa, psicologa e arteterapeuta con una laurea triennale in
            Psicologia e magistrale in Terapeutica Artistica. Combinando
            l&apos;arte con la psicologia aiuto a scoprire e comprendere le
            emozioni in modo creativo e profondo. Creo percorsi artistici e
            sensibili per il proprio benessere.
          </p>

          <Link
            className="md:text-2l mt-10 w-80 border-2 border-slate-600 p-4 text-center font-anaheimmedium text-xl tracking-widest text-standard transition-all hover:bg-sky-300 md:w-[500px] lg:text-2xl"
            href="/chi-sono"
          >
            SCOPRI DI PIU&apos;
          </Link>
        </div>
      </Container>
    </div>
  );
}
