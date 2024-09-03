"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type GalleryProps = {
  images: string[];
  galleryType: number;
};

export default function Gallery({ galleryType, images }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <>
      <div className="container">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10">
            {images.map((image, index) => (
              <div className="flex-[0_0_50%] md:flex-[0_0_32%]">
                <Image
                  key={index}
                  src={image}
                  alt="prova"
                  width={600}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
