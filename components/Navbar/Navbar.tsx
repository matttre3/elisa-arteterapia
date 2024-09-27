import Links from "./Links";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-start justify-center bg-white">
      <div className="container z-50 w-full pb-3 pl-5 pr-5 pt-3 sm:pl-10 sm:pr-10">
        <Links mobile={false} />
        <MobileNavbar />
      </div>
    </div>
  );
}
