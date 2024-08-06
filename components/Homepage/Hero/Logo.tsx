import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative z-20 h-[220px] w-[300px] overflow-hidden md:h-[342px] md:w-[500px]">
      <svg
        className="absolute h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
        viewBox="0 0 300 300"
      >
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
          />
        </defs>
        <text className="font-anaheimregular" font-size="20" fill="black">
          <textPath href="#circlePath" startOffset="1.5%">
            SPECIALISTA ARTETERAPEUTA MILANO
          </textPath>
        </text>
      </svg>
      <Image
        className="absolute left-[50px] top-[40px] md:left-[80px] md:top-[60px] md:h-[350px] md:w-[350px]"
        width={200}
        height={200}
        src="/images/logo-elisa-daolio.png"
        alt="logo Elisa Daolio"
      />
    </div>
  );
}
