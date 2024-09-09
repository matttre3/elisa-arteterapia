import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="mt-24 bg-sky-100">
        <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
          <div className="flex flex-col justify-center gap-4 pb-12 pt-12">
            <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
              Chi sono?
            </h2>
            <h3 className="text-left font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
              E PIANIFICHIAMO IL TUO PERCORSO
            </h3>
            <p className="text-left font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Sono Elisa, un&apos; <strong>arteterapeuta</strong> con un
              profondo <strong>amore per l'arte</strong> e la cura del benessere
              emotivo. Attraverso l'arte, offro uno
              <strong> spazio sicuro </strong> e stimolante dove esplorare e
              comprendere le emozioni in maniera creativa e autentica. Il mio
              obiettivo è quello di accompagnare le persone in un{" "}
              <strong>
                viaggio interiore che promuove la consapevolezza di sé e la
                crescita personale.
              </strong>{" "}
              Attraverso percorsi artistici su misura, è possibile esplorare le
              proprie emozioni, superare le difficoltà e scoprire nuove risorse
              interiori per vivere una vita più piena e soddisfacente. Credo
              fermamente che l'arte, in tutte le sue forme, sia uno strumento
              potente per il benessere psicologico, capace di{" "}
              <strong>trasformare il dolore in espressione artistica.</strong>
            </p>
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
            favoriscono l'espressione creativa come strumento di crescita
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
                src="/images/elisa-laurea.png"
                alt="laurea elisa daolio"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 bg-yellow-100">
        <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
          <div className="flex flex-col justify-center gap-4 pb-12 pt-12">
            <h2 className="text-left font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
              Cos&apos;è l&apos;arte terapia?
            </h2>
            <h3 className="text-left font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
              E PIANIFICHIAMO IL TUO PERCORSO
            </h3>
            <p className="text-left font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Il termine "Terapeutica" deriva etimologicamente dal latino
              "Therapèutica" e dal greco "Therapheytkè", e significa "arte della
              cura". Come artista terapista, non mi limito a prendermi cura
              dell&apos;altro, ma piuttosto apro la possibilità per le persone
              di prendersi cura di sé stesse, attraverso il linguaggio
              dell&apos;arte. Il mio obiettivo è guidare ciascuno nel viaggio
              alla scoperta della propria creatività, attivando il processo
              creativo e sostenendo l&apos;evoluzione personale.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
        <div className="flex flex-col justify-center gap-4 pb-12 pt-12">
          <h2 className="text-left font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
            A Cosa Serve l'Arte Terapia?
          </h2>
          <h3 className="text-left font-anaheimbold text-2xl tracking-wider text-gray-500 md:text-3xl">
            E PIANIFICHIAMO IL TUO PERCORSO
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
