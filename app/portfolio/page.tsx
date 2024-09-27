import Colori from "@/components/Servizi/Colori";
import DanzaRossa from "@/components/Servizi/DanzaRossa";
import Fiorire from "@/components/Servizi/Fiorire";
import Memorie from "@/components/Servizi/Memorie";
import Container from "@/components/ui/Container";

export default function Portfolio() {
  return (
    <>
      <Container>
        <DanzaRossa></DanzaRossa>
        <Memorie></Memorie>
        <Colori></Colori>
        <Fiorire></Fiorire>
      </Container>
    </>
  );
}
