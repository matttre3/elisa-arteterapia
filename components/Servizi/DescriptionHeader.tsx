import React from "react";
import Image from "next/image";

type DescriptionHeaderProps = {
  imageSrc: string;
  imageAlt: string;
  text: string;
  title: string;
  category: string;
  moreText?: string;
};

export default function DescriptionHeader({
  imageSrc,
  imageAlt,
  text,
  title,
  category,
  moreText,
}: DescriptionHeaderProps) {
  return (
    <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
      <div className="mb-10 flex justify-center lg:hidden">
        <Image src={imageSrc} alt={imageAlt} width={530} height={590} />
      </div>
      <h3 className="font-anaheimbold text-xl tracking-wider text-gray-500 md:text-3xl">
        {category}
      </h3>
      <div className="mt-6 flex flex-col justify-between gap-10 lg:flex-row lg:gap-32">
        <div className="lg:w-2/3">
          <h2 className="font-anaheimbold text-4xl tracking-widest text-standard md:text-5xl">
            {title}
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: text }}
            className="mt-6 font-anaheimregular text-xl tracking-widest text-standard md:text-2xl"
          ></p>
        </div>

        <div className="hidden lg:block">
          <Image src={imageSrc} alt={imageAlt} width={530} height={590} />
        </div>
      </div>
      {moreText && (
        <p
          dangerouslySetInnerHTML={{ __html: moreText }}
          className="mt-6 font-anaheimregular text-xl tracking-widest text-standard md:text-2xl"
        ></p>
      )}
    </div>
  );
}
