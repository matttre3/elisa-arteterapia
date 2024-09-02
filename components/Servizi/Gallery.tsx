"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type GalleryProps = {
  images: string[];
  galleryType: number;
};

export default function Gallery({ galleryType, images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagesPerSlide = galleryType === 1 ? 3 : 1;

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + imagesPerSlide) % images.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - imagesPerSlide + images.length) % images.length,
    );
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const currentImages = images.slice(
    currentIndex,
    currentIndex + imagesPerSlide,
  );

  return (
    <>
      <div className="container relative w-full overflow-hidden pl-5 pr-5 md:pl-0 md:pr-0">
        <div className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`image-${currentIndex + index}`}
                  className="cursor-pointer object-cover"
                  width={600}
                  height={200}
                  onClick={() => openModal(image)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-70 p-2 pb-4 text-4xl font-extrabold text-white"
        >
          &#8592;
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-70 p-2 pb-4 text-4xl font-extrabold text-white"
        >
          &#8594;
        </button>

        <div className="mt-4 flex justify-center gap-2">
          {Array.from({
            length: Math.ceil(images.length / imagesPerSlide),
          }).map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 cursor-pointer rounded-full bg-black ${
                currentIndex === index * imagesPerSlide
                  ? "bg-opacity-100"
                  : "bg-opacity-50"
              }`}
              onClick={() => setCurrentIndex(index * imagesPerSlide)}
            ></span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 pl-5 pr-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Full screen image"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <button
                className="absolute right-2 top-2 text-2xl text-white"
                onClick={closeModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
