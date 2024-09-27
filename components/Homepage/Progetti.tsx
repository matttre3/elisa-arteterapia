import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./Progetti/ImageSlider";
import Container from "../ui/Container";
export default function Progetti() {
  return (
    <div className="mt-12 bg-yellow-100">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 pb-12 pt-12">
          <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
            I miei progetti
          </h2>
          <p className="text-center font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
            Grazie alla mia esperienza all&apos;
            <strong>Accademia di Belle Arti di Brera</strong> e a collaborazioni
            esterne, ho sviluppato{" "}
            <strong>numerosi progetti di arteterapia</strong>. Questi progetti
            hanno esplorato <strong>diverse tecniche artistiche</strong> per
            favorire l&apos;espressione creativa e il benessere emotivo. Ogni
            iniziativa è stata un&apos;opportunità per applicare e innovare le
            pratiche di arteterapia, portando{" "}
            <strong>benefici tangibili</strong> a chi vi ha partecipato.
          </p>

          <ImageSlider></ImageSlider>

          <Link
            className="md:text-2l mt-14 w-80 border-2 border-slate-600 p-4 text-center font-anaheimmedium text-xl tracking-widest text-standard transition-all hover:bg-yellow-300 md:w-[500px] lg:text-2xl"
            href="/portfolio"
          >
            SCOPRI I MIEI PROGETTI
          </Link>
        </div>
      </Container>
    </div>
  );
}
