import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 xl:gap-10">
      <Logo></Logo>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="text-standard relative z-10 font-rachelya text-5xl sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[200px]">
            ELISA DAOLIO
          </h1>
        </div>

        <div className="relative mt-3 flex flex-col items-center gap-3 sm:gap-5 lg:flex-row xl:gap-10">
          <h2 className="text-standard z-20 text-center font-anaheimmedium text-xl tracking-widest md:text-2xl lg:text-3xl">
            SPECIALISTA ARTETERAPEUTA A MILANO
          </h2>
          <Link
            className="md:text-2l text-standard border-2 border-slate-600 p-4 font-anaheimmedium text-xl tracking-widest lg:text-2xl"
            href="/servizi"
          >
            SCOPRI I MIEI SERVIZI
          </Link>
        </div>
      </div>
    </div>
  );
}
