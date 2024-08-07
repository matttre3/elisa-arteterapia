import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:mt-5 md:mt-10 md:gap-10">
      <Logo></Logo>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="relative z-50 font-rachelya text-5xl text-standard sm:text-8xl md:text-9xl lg:text-[200px]">
            ELISA DAOLIO
          </h1>
        </div>

        <div className="relative mt-3 flex flex-col items-center gap-3 sm:gap-5 lg:flex-row lg:gap-10">
          <h2 className="z-20 text-center font-anaheimmedium text-xl tracking-widest text-standard md:text-2xl lg:text-3xl">
            SPECIALISTA ARTETERAPEUTA A MILANO
          </h2>
          <Link
            className="border-slate-600 md:text-2l border-2 p-4 font-anaheimmedium text-xl tracking-widest text-standard lg:text-2xl"
            href="/servizi"
          >
            SCOPRI I MIEI SERVIZI
          </Link>
        </div>
      </div>
    </div>
  );
}
