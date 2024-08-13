import About from "@/components/Homepage/About";
import Contact from "@/components/Homepage/Contact";
import Hero from "@/components/Homepage/Hero/Hero";
import Progetti from "@/components/Homepage/Progetti";
import Servizi from "@/components/Homepage/Servizi/Servizi";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Servizi></Servizi>
      <Progetti></Progetti>
      <Contact></Contact>
    </>
  );
}
