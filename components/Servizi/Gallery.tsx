"use client";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";

type GalleryProps = {
  images: string[];
  photoType: string;
};

export default function Gallery({ images, photoType }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const gallerySizes = classNames({
    "flex-[0_0_50%] md:flex-[0_0_32.6%]": photoType === "horizontal",
    "flex-[0_0_50%] md:flex-[0_0_25%]": photoType === "vertical",
  });

  return (
    <>
      <div className="container mt-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-10">
            {images.map((image, index) => (
              <div key={index} className={gallerySizes}>
                <Image src={image} alt="prova" width={600} height={200} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
