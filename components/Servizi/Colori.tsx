import React from "react";
import DescriptionHeader from "./DescriptionHeader";
import Gallery from "./Gallery";

export default function Memorie() {
  const images = [
    "/images/C-1.png",
    "/images/C-2.png",
    "/images/C-3.png",
    "/images/C-4.png",
    "/images/C-5.png",
  ];

  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-3 xl:gap-10">
      <DescriptionHeader
        imageAlt={"opera arteterapia i colori dei ricordi"}
        imageSrc={"/images/colori-1.png"}
        title={"I colori dei nostri ricordi"}
        category={"Arteterapia"}
        text={`
 I Colori dei Nostri Ricordi" è un progetto di Terapeutica Artistica, che vede il coinvolgimento di tutti gli ospiti della RSA e mira a migliorare il benessere emotivo attraverso l'espressione creativa e la condivisione di esperienze.
<br><br>
Si propone di esplorare le associazioni emotive legate ai colori. Il colore, con la sua potenza evocativa e simbolica, diventa il mezzo attraverso il quale gli ospiti possono esplorare e comunicare le proprie esperienze, memorie ed emozioni. Il progetto si propone di coinvolgere attivamente gli ospiti nella creazione di opere d'arte condivise, attraverso le quali potranno esplorare in profondità il significato personale del colore e dei ricordi ad esso associati.

`}
        moreText="Ciascuna opera è incentrata su un colore specifico. La realizzazione delle opere d'arte avverrà attraverso una serie di sessioni di laboratorio durante le quali gli ospiti potranno sperimentare diverse tecniche artistiche, tra cui il disegno, la pittura, l'uncinetto e l'uso di fili.
Verranno poi esposte all'interno della struttura e accompagnate da QR code, che daranno accesso alle interviste e alle riflessioni degli ospiti raccolte durante il processo creativo, consentendo al pubblico di immergersi nelle esperienze e nelle storie personali dei partecipanti al progetto.
"
      ></DescriptionHeader>

      <div>
        <Gallery photoType={"vertical"} images={images}></Gallery>
      </div>
    </div>
  );
}
