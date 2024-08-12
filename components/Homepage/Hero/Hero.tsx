import Link from "next/link";
import Logo from "./Logo";
import HeroTextAndCTA from "./HeroTextAndCTA";

export default function Hero() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-3 xl:gap-10">
      <Logo></Logo>
      <HeroTextAndCTA></HeroTextAndCTA>
    </div>
  );
}
