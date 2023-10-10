import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar1() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/#home");

  return (
    <>
      <div className="mb-32 w-full bg-zinc-900 py-4">
        <div className="container mx-auto flex-col items-center justify-between px-8 md:flex md:flex-row">
          <div className="flex w-full justify-between">
            <Link className="font-semibold" href="/">
              Logo
            </Link>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <IconX /> : <IconMenu2 />}
            </button>
          </div>

          <div
            className={`${
              open ? "visible pt-8 md:pt-0" : "invisible h-max md:visible"
            } flex flex-col items-center  gap-5 transition-all md:flex-row md:gap-8`}
          >
            {links.map((link) => (
              <Link
                onClick={(e) => {
                  setActive(`/${link.href}`);
                  e.preventDefault();
                }}
                className={`${
                  active.includes(link.href) ? "text-blue-500" : "text-white"
                } ${open ? "" : "hidden md:flex"} font-semibold `}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
