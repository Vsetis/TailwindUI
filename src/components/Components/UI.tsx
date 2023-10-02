import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function ToggleButton({
  preview,
  click,
}: {
  preview: boolean;
  click: () => void;
}) {
  return (
    <>
      <div className="relative flex gap-8 rounded bg-zinc-900 px-4 py-2">
        <span
          onClick={click}
          className="z-10 cursor-pointer text-sm font-semibold"
        >
          Preview
        </span>
        <span
          onClick={click}
          className="z-10 cursor-pointer text-sm font-semibold"
        >
          Code
        </span>
        <span
          className={`${
            preview ? "translate-x-0" : "translate-x-full"
          } absolute left-0 top-0 z-[1] h-full w-1/2  rounded bg-[#3a62c6d5] transition-all`}
        ></span>
      </div>
    </>
  );
}

function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
  ];
  const router = useRouter();
  return (
    <>
      <div className="w-full bg-zinc-800 py-4">
        <div className="container mx-auto flex items-center justify-between px-8">
          <Link className=" font-semibold" href="/">
            Logo
          </Link>
          <p>{}</p>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                className={
                  router.asPath.includes(link.href)
                    ? "text-blue-500"
                    : "text-white"
                }
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

function NavbarCode() {
  return (
    <>
      <pre>
        <code>
          <span className="text-blue-500">
            &lt;div<span className="text-orange-400/90"> className="flex"</span>{" "}
            &gt;{" "}
          </span>{" "}
          <br /> <span className="pl-4">Obsah vašeho kódu zde </span>
          <br />
          <span className="text-blue-500">&lt;/div&gt;</span>
        </code>
      </pre>
    </>
  );
}

export default function UI({ title }: { title: string }) {
  const [preview, setPreview] = useState(true);
  return (
    <>
      <div className=" rounded bg-black">
        <div className="flex items-center justify-between rounded rounded-b-none bg-zinc-800 px-4 py-2">
          <h3 className="semibold text-2xl leading-none">{title}</h3>
          <ToggleButton preview={preview} click={() => setPreview(!preview)} />
        </div>
        <div
          className={`${
            preview
              ? "items-center justify-center"
              : "items-start justify-start px-4 py-8"
          } flex h-full min-h-[500px] `}
        >
          {preview ? <Navbar /> : <NavbarCode />}
        </div>
      </div>
    </>
  );
}
