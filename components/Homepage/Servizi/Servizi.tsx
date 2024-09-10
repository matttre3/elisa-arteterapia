import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function Servizi() {
  const content = [
    {
      title: "WORKSHOP DI GRUPPO",
      description:
        "Laboratori tematici per piccoli gruppi, come arteterapia per la gestione dello stress, espressione emotiva, o supporto al lutto.",
      color: "bg-yellow-200",
      image: "bg-workshop-service",
    },
    {
      title: "ARTETERAPIA PER AZIENDE",
      description:
        "Offerta di servizi di arteterapia per il benessere aziendale, come team building o workshop per la riduzione dello stress",
      color: "bg-sky-200",
      image: "bg-aziende-service",
    },
    {
      title: "SESSIONI INDIVIDUALI DI ARTETERAPIA",
      description:
        "Consulenze personalizzate per affrontare problemi specifici come ansia, depressione, stress, trauma, ecc.",
      color: "bg-orange-200",
      image: "bg-individuali-service",
    },
    {
      title: "ARTETERAPIA PER BAMBINI",
      description:
        "Sessioni specializzate per i più giovani, con un approccio adatto alla loro età, per aiutarli a esprimere emozioni e affrontare difficoltà.",
      color: "bg-fuchsia-200",
      image: "bg-bambini-service",
    },
  ];

  return (
    <>
      <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
            Servizi
          </h2>
          <p className="text-center font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
            Scopri come posso aiutarti a raggiungere il{" "}
            <strong>benessere</strong> attraverso{" "}
            <strong>l&apos;arte e la terapia</strong>
          </p>
          <div className="flex flex-col flex-wrap gap-10 lg:flex-row">
            {content.map((singleService, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={singleService.title}
                  description={singleService.description}
                  color={singleService.color}
                  image={singleService.image}
                ></ServiceCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
