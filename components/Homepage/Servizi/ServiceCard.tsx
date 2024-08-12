import React from "react";
type ServiceCardProps = {
  title: string;
  description: string;
  color: string;
  image: string;
};
export default function ServiceCard({
  title,
  description,
  color,
  image,
}: ServiceCardProps) {
  return (
    <>
      <div
        className={`flex w-full cursor-pointer transition-all lg:w-[calc(50%-20px)] lg:outline-none lg:hover:shadow-xl lg:hover:outline-2 lg:hover:outline-standard ${image} flex-col items-center justify-center gap-5 rounded-xl bg-cover bg-center bg-no-repeat pb-14 pl-10 pr-10 pt-14`}
      >
        <div className={`z-50 h-16 w-16 rounded-full ${color}`}></div>
        <h3 className="text-center font-anaheimbold text-3xl tracking-widest text-standard">
          {title}
        </h3>
        <p className="text-center font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
          {description}
        </p>
      </div>
    </>
  );
}
