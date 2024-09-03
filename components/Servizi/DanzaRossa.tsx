import React from "react";
import DescriptionHeader from "./DescriptionHeader";
import Gallery from "./Gallery";

export default function DanzaRossa() {
  const images = [
    "/images/DR1.png",
    "/images/DR2.png",
    "/images/DR3.png",
    "/images/DR4.png",
    "/images/DR5.png",
    "/images/DR6.png",
  ];

  return (
    <div className="mt-32 flex flex-col items-center justify-center gap-3 xl:gap-10">
      <DescriptionHeader
        imageAlt={"copertina mostra danza rossa"}
        imageSrc={"/images/danza-rossa-1.png"}
        title={"Danza Rossa"}
        category={"Arteterapia"}
        text={`Laboratorio di Terapeutica Artistica presso la Casa dei Bambini di CasAmica a Milano. Questo spazio creativo è stato ideato per offrire alle madri e ai bambini oncologici un luogo sicuro in cui esprimere le proprie emozioni e trovare sollievo dalle sfide quotidiane. 
        <br><br>Attraverso l'uso della lana cardata, materiale scelto per la sua connessione simbolica con la femminilità e la rinascita, e il suo infeltrimento, le partecipanti hanno dato vita a una barriera corallina rossa, metafora della resilienza e della forza collettiva.  <br><br>
Il progetto ha visto anche la creazione di un video intitolato "Danza Rossa", in cui una madre e una figlia celebrano la loro connessione e le loro radici attraverso una danza rituale. Questo progetto dimostra il potere trasformativo dell'arte, capace di trasformare le emozioni in bellezza che cura.`}
      ></DescriptionHeader>
      <div className="md:hidden">
        <Gallery photoType={"horizontal"} images={images}></Gallery>
      </div>
      <div className="hidden md:block">
        <Gallery photoType={"horizontal"} images={images}></Gallery>
      </div>
    </div>
  );
}
