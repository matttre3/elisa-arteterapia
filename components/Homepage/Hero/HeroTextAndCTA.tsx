import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function HeroTextAndCTA() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <h1 className="relative z-10 font-rachelya text-5xl text-standard sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[200px]">
          ELISA DAOLIO
        </h1>
      </div>

      <div className="relative mt-3 flex flex-col items-center gap-3 sm:gap-5 lg:flex-row xl:gap-10">
        <h2 className="z-20 text-center font-anaheimmedium text-xl tracking-widest text-standard md:text-2xl lg:text-3xl">
          SPECIALISTA ARTETERAPEUTA A MILANO
        </h2>
        <Link
          className="md:text-2l border-2 border-slate-600 p-4 font-anaheimmedium text-xl tracking-widest text-standard transition-all hover:bg-yellow-200 lg:text-2xl"
          href="/portfolio"
        >
          SCOPRI I PROGETTI
        </Link>
      </div>
    </div>
  );
}
