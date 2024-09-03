import React from "react";
import DescriptionHeader from "./DescriptionHeader";
import Gallery from "./Gallery";

export default function Memorie() {
  const images = [
    "/images/F-1.png",
    "/images/F-2.png",
    "/images/F-3.png",
    "/images/F-4.png",
  ];

  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-3 xl:gap-10">
      <DescriptionHeader
        imageAlt={"opera arteterapia fiorire"}
        imageSrc={"/images/fiorire-1.png"}
        title={"Fiorire"}
        category={"Arteterapia"}
        text={`
 Progetto rivolto ai ragazzi adolescenti del comune di Cesate, realizzato grazie alla “Cooperativa Intrecci” e con la collaborazione di Gaelle Lambardiere e Federica Orsolo. Il progetto ha previsto 10 incontri dedicati all'esplorazione del tema dell'identità, con l'obiettivo di aiutare i giovani a trovare la propria essenza e direzione in un'età spesso difficile.
<br><br>
Durante questi incontri, i partecipanti hanno realizzato diverse opere utilizzando vari materiali artistici, incoraggiando l'esplorazione creativa e l'espressione personale. Le opere, sia individuali che collettive, si sono focalizzate su come, coltivando le proprie passioni, possano nascere e crescere elementi positivi, rappresentati simbolicamente da coloratissimi fiori.
<br><br>
Le creazioni finali sono state esposte in una mostra temporanea presso la biblioteca di Cesate, offrendo ai giovani un'opportunità di condividere il loro percorso artistico e le loro riflessioni sulla propria identità con la comunità locale.
`}
      ></DescriptionHeader>

      <div>
        <Gallery photoType={"vertical"} images={images}></Gallery>
      </div>
    </div>
  );
}
