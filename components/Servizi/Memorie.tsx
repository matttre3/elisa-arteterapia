import React from "react";
import DescriptionHeader from "./DescriptionHeader";
import Gallery from "./Gallery";

export default function Memorie() {
  const images = [
    "/images/MM2.jpg",
    "/images/MM1.jpg",
    "/images/MM3.jpg",
    "/images/MM4.jpg",
  ];

  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-3 xl:gap-10">
      <DescriptionHeader
        imageAlt={"scatola con dentro memorie"}
        imageSrc={"/images/memorie-1.png"}
        title={"Memorie in scatola"}
        category={"Arteterapia"}
        text={`Il decadimento cognitivo rappresenta una sfida significativa sia per gli ospiti che per il personale sanitario. La demenza è una condizione che porta ad una perdita progressiva delle funzioni cognitive, compromettendo la memoria, l'attenzione e le abilità motorie.  
<br><br>
Il progetto prevede la realizzazione di scatole sensoriali, concepite come strumenti per stimolare i ricordi e favorire il coinvolgimento degli ospiti attraverso attività manuali e creative. 
<br><br>
Attraverso l'esplorazione di temi significativi e la manipolazione di materiali evocativi, gli ospiti saranno incoraggiati a esplorare il proprio passato, riconnettersi con le proprie esperienze.  Ogni scatola avrà un tema specifico, che verrà scelto in base alle esperienze e alle preferenze degli ospiti.
<br><br>
 Una volta completate, le scatole saranno messe a disposizione di tutti gli ospiti della RSA, in modo che possano essere esplorate e utilizzate liberamente durante il tempo libero o con i famigliari.`}
      ></DescriptionHeader>
      <div>
        <Gallery photoType={"horizontal"} images={images}></Gallery>
      </div>
    </div>
  );
}
