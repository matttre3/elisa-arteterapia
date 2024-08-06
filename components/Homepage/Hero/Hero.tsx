import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
      <Logo></Logo>
      <h1 className="z-10 font-rachelya text-5xl sm:text-8xl md:text-9xl lg:text-[200px]">
        ELISA DAOLIO
      </h1>
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
        <h2 className="text-center font-anaheimregular text-xl tracking-widest md:text-2xl lg:text-3xl">
          SPECIALISTA ARTETERAPEUTA A MILANO
        </h2>
        <Link
          className="border-2 border-slate-600 p-4 font-anaheimregular text-xl tracking-widest md:text-2xl lg:text-3xl"
          href="/servizi"
        >
          SCOPRI I MIEI SERVIZI
        </Link>
      </div>
    </div>
  );
}
