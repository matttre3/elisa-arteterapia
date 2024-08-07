type LinksProps = {
  mobile: boolean;
};

import Link from "next/link";

export default function Links({ mobile }: LinksProps) {
  return (
    <>
      {!mobile && (
        <div className="hidden lg:block">
          <ul className="text-bold flex items-center justify-between text-standard">
            <li className="font-anaheimmedium text-2xl">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="font-anaheimmedium text-2xl">
              <Link href="/servizi">Servizi</Link>
            </li>
            <li>
              <Link
                className="flex flex-col items-center justify-center font-rachelya"
                href="/"
              >
                <span className="text-5xl">ELISA DAOLIO</span>
                <span className="text-md w-fit font-anaheimmedium tracking-[10px]">
                  ARTETERAPEUTA
                </span>
              </Link>
            </li>
            <li className="font-anaheimmedium text-2xl">
              <Link href="/contatti">Contatti</Link>
            </li>
            <li className="font-anaheimmedium text-2xl">
              <Link href="/chi-sono">Chi sono</Link>
            </li>
          </ul>
        </div>
      )}

      {mobile && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center gap-10">
            <li className="font-rachelya text-6xl">
              <Link href="/">ELISA DAOLIO</Link>
            </li>
            <li className="font-anaheimmedium text-2xl">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="font-anaheimmedium text-2xl">
              <Link href="/servizi">Servizi</Link>
            </li>
            <li className="font-anaheimmedium text-2xl">
              <Link href="/contatti">Contatti</Link>
            </li>
            <li className="font-anaheimmedium text-2xl">
              <Link href="/chi-sono">Chi sono</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
