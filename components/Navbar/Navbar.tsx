import Links from "./Links";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-start justify-center bg-white shadow-md">
      <div className="z-50 w-full max-w-screen-lg pb-3 pl-5 pr-5 pt-3 sm:pl-3 sm:pr-3">
        <Links mobile={false} />
        <MobileNavbar />
      </div>
    </div>
  );
}
