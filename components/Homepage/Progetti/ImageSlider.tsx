"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/1-proj.png",
  "/images/2-proj.png",
  "/images/3-proj.png",
  "/images/4-proj.png",
];

export default function ImageSlider() {
  const imagesDuplicated = [...images, ...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="flex w-full gap-4">
          {imagesDuplicated.map((src, index) => (
            <div key={index} className="mr-2 w-[calc(25%-8px)] flex-shrink-0">
              <Image
                src={src}
                alt={`progetto ${(index % images.length) + 1}`}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
