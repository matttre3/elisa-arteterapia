import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 md:mt-14 md:flex-row lg:gap-24">
        <div className="flex flex-row justify-center gap-8 lg:gap-24">
          <div className="md:order-0 order-1 flex flex-col gap-[72px] sm:gap-16">
            <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Diploma Liceo <strong>Artistico</strong>
            </p>
            <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Laurea Triennale in <strong>Psicologia</strong>
            </p>
            <p className="font-anaheimregular text-xl tracking-widest text-standard md:text-2xl">
              Laurea Magistrale in <strong>Terapeutica Artistica</strong>
            </p>
          </div>
          <div className="order-0 relative flex h-fit w-1 items-center justify-center md:order-1">
            <div className="h-[210px] w-1 bg-standard sm:h-[190px] md:h-[205px]"></div>
            <div className="absolute top-0 h-3 w-3 rounded-full bg-standard"></div>
            <div className="absolute top-1/2 h-3 w-3 rounded-full bg-standard"></div>
            <div className="absolute top-full h-3 w-3 rounded-full bg-standard"></div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="relative z-0 w-80"
            src="/images/elisa-laurea.png"
            alt="laurea elisa daolio"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
