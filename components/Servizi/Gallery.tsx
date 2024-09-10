"use client";
import React, { useState, useCallback } from "react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  const closeModal = () => {
    setSelectedImage(null);
  };

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
                <Image
                  src={image}
                  alt="prova"
                  width={600}
                  height={200}
                  onClick={() => openModal(image)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Ingrandita"
              width={photoType == "horizontal" ? 800 : 400}
              height={photoType == "horizontal" ? 600 : 200}
            />
            <button
              className="absolute right-2 top-2 text-2xl text-white"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
