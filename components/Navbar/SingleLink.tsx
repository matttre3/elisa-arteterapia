import Link from "next/link";

type SingleLinkProps = {
  children: string;
};

export default function SingleLink({ children }: SingleLinkProps) {
  const href = "/" + children.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <li className="relative transform font-anaheimmedium text-2xl before:absolute before:bottom-0 before:left-0 before:z-0 before:block before:h-4 before:w-0 before:bg-sky-200 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:w-full">
      <Link className="relative z-10" href={href}>
        {children}
      </Link>
    </li>
  );
}
