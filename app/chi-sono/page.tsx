import Gallery from "@/components/Servizi/Gallery";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const images = [
    "/images/g1.jpg",
    "/images/g2.jpeg",
    "/images/g3.jpg",
    "/images/g4.jpg",
    "/images/g5.jpg",
    "/images/g6.jpg",
    "/images/g7.jpg",
    "/images/g8.jpg",
    "/images/g9.jpg",
    "/images/g10.jpg",
    "/images/g11.jpg",
    "/images/g12.jpg",
    "/images/g13.jpg",
    "/images/g14.jpg",
  ];

  return (
    <>
      <div className="mt-24 bg-sky-100">
        <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
          <div className="flex flex-col items-center justify-between gap-14 pb-12 pt-12 md:flex-row">
            <div className="flex flex-col gap-4 md:w-2/3">
              <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
                Chi sono?
              </h2>
              <h3 className="text-left font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
                E PIANIFICHIAMO IL TUO PERCORSO
              </h3>
              <p className="text-left font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
                Sono Elisa, un&apos; <strong>arteterapeuta</strong> con un
                profondo <strong>amore per l&apos;arte</strong> e la cura del
                benessere emotivo. Attraverso l&apos;arte, offro uno
                <strong> spazio sicuro </strong> e stimolante dove esplorare e
                comprendere le emozioni in maniera creativa e autentica. Il mio
                obiettivo è quello di accompagnare le persone in un{" "}
                <strong>
                  viaggio interiore che promuove la consapevolezza di sé e la
                  crescita personale.
                </strong>{" "}
                Attraverso percorsi artistici su misura, è possibile esplorare
                le proprie emozioni, superare le difficoltà e scoprire nuove
                risorse interiori per vivere una vita più piena e soddisfacente.
                Credo fermamente che l&apos;arte, in tutte le sue forme, sia uno
                strumento potente per il benessere psicologico, capace di{" "}
                <strong>trasformare il dolore in espressione artistica.</strong>
              </p>
              <Link
                className="md:text-2l mt-4 w-fit border-2 border-slate-600 p-4 font-anaheimmedium text-xl tracking-widest text-standard transition-all hover:bg-yellow-200 lg:text-2xl"
                href="/documents/cv-elisa.pdf"
                target="_blank"
                download
              >
                SCARICA IL MIO CURRICULUM
              </Link>
            </div>
            <div>
              <Image
                className="relative z-0 w-96"
                src="/images/foto-elisa.jpg"
                alt="laurea elisa daolio"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
        <div className="flex flex-col items-center justify-center gap-4 pt-12">
          <h2 className="mb-4 font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
            Qual&apos;é stato il mio percorso?
          </h2>
          <p className="text-left font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
            Durante il mio percorso, ho approfondito le tecniche e i metodi che
            favoriscono l&apos;espressione creativa come strumento di crescita
            personale e guarigione. Questo mi consente di offrire un supporto
            mirato e adattato alle esigenze specifiche di ciascun individuo e
            diversi contesti.{" "}
          </p>
          <div className="flex flex-col items-center justify-center gap-10 md:mt-14 md:flex-row lg:gap-24">
            <div className="flex flex-row justify-center gap-8 lg:gap-24">
              <div className="md:order-0 order-1 flex flex-col gap-[72px] sm:gap-16">
                <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
                  <strong>2024</strong> Diploma Accademico di secondo livello in
                  Terapeutica artistica, presso Accademia Delle Belle Arti di
                  Brera
                </p>
                <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
                  <strong>2022</strong> Laurea Triennale in Psicologia presso
                  Università degli studi di Milano Bicocca
                </p>
                <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
                  <strong>2021</strong> Corso di teatro educazione presso scuola
                  contemporanea teatrale di Varese
                </p>
              </div>
              <div className="order-0 md:order-1">
                <div className="order-0 relative flex h-[100%] w-1 items-center justify-center md:order-1">
                  <div className="h-full w-1 bg-standard"></div>
                  <div className="absolute top-0 h-3 w-3 rounded-full bg-standard"></div>
                  <div className="absolute top-1/2 h-3 w-3 rounded-full bg-standard"></div>
                  <div className="absolute top-full h-3 w-3 rounded-full bg-standard"></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="relative z-0 w-80"
                src="/images/foto_laurea.jpg"
                alt="laurea elisa daolio"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 bg-yellow-100">
        <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
          <div className="flex flex-col justify-center gap-4 pt-12">
            <h2 className="text-left font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
              Cos&apos;è l&apos;arte terapia?
            </h2>
            <h3 className="text-left font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
              Scopri come l&apos;arte può trasformare la tua vita
            </h3>
            <p className="text-left font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Il termine &quot;Terapeutica&quot; deriva etimologicamente dal
              latino &quot;Therapèutica&quot; e dal greco
              &quot;Therapheytkè&quot;, e significa &quot;arte della cura&quot;.
              Come artista terapista, non mi limito a prendermi cura
              dell&apos;altro, ma piuttosto apro la possibilità per le persone
              di prendersi cura di sé stesse, attraverso il linguaggio
              dell&apos;arte. Il mio obiettivo è guidare ciascuno nel viaggio
              alla scoperta della propria creatività, attivando il processo
              creativo e sostenendo l&apos;evoluzione personale.
            </p>
          </div>
          <div className="pb-10">
            <Gallery photoType={"vertical"} images={images}></Gallery>
          </div>
        </div>
      </div>

      <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
        <div className="flex flex-col justify-center gap-4 pb-12 pt-12">
          <h2 className="text-left font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
            A Cosa Serve l&apos;Arte Terapia?
          </h2>
          <h3 className="text-left font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
            Un Percorso di Cura Attraverso l&apos;Espressione Creativa
          </h3>
          <p className="text-left font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
            Nell&apos;ambito della terapeutica artistica, il colore ha un ruolo
            fondamentale. I colori non solo stimolano i sensi, ma hanno il
            potere di evocare emozioni e stati d&apos;animo profondi. Accompagno
            nell&apos;esplorazione dei colori, permettendo di esprimere
            sentimenti e pensieri che possono essere difficili da comunicare
            verbalmente. <br />
            <br /> Questo approccio rappresenta una forma innovativa e olistica
            di cura, che riconosce il potere trasformativo della creatività e
            dell&apos;espressione artistica. Con competenza e sensibilità, creo
            un ambiente sicuro e stimolante in cui le persone possono esprimersi
            liberamente e scoprire nuove possibilità per il proprio benessere.
            La terapeutica artistica spesso culmina nella realizzazione di
            un&apos;Opera Condivisa, soprattutto nei lavori di gruppo. <br />
            <br /> Si tratta di un&apos;opera collettiva, creata
            dall&apos;assemblaggio dei lavori di diversi partecipanti. Questo
            processo invita i partecipanti a unirsi in una realtà corale, dove
            ognuno mantiene la propria identità, ma al tempo stesso si apre al
            dialogo con gli altri, contribuendo alla realizzazione di
            un&apos;espressione comune
          </p>
        </div>
      </div>
    </>
  );
}
