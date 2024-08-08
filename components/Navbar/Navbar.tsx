import Links from "./Links";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="container mx-auto mt-5 pl-5 pr-5 sm:pl-3 sm:pr-3">
      <Links mobile={false} />
      <MobileNavbar />
    </div>
  );
}
