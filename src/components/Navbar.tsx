import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Browse", href: "/components" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <>
      <div className="w-full  border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between py-2">
          <div className="flex items-center gap-16">
            <Link href="/" className=" font-semibold">
              logo
            </Link>
            <div className="flex gap-8 ">
              {links.map((link, i) => (
                <Link
                  key={i}
                  className=" text-sm font-semibold transition-all hover:text-white/80"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link
              className="text-sm font-semibold text-white transition-all hover:text-white/60"
              href="/login"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded border px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-white/5"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
