import { IconH2 } from "@tabler/icons-react";
import Link from "next/link";

const links = [
  {
    title: "Installation",
    links: [
      { label: "Requirments", target: "/docs#requirments" },
      {
        label: "Optional: Add the Inter font family",
        target: "/docs#interfont",
      },
    ],
  },
  {
    title: "Using Next.js",
    links: [
      { label: "Installing dependecies", target: "/docs#next" },
      { label: "Creating components", target: "/docs#next-components" },
    ],
  },
  {
    title: "Using Vue",
    links: [
      { label: "Installing dependecies", target: "/docs#vue" },
      { label: "Creating components", target: "/docs#vue-components" },
    ],
  },
  {
    title: "Using HTML and your own JS",
    links: [
      { label: "Accessibility considerations", target: "/docs#html" },
      { label: "Dynamic classes", target: "/docs#html-classes" },
      { label: "Transitions", target: "/docs#html-transitions" },
      {
        label: "Creating partials/components",
        target: "/docs#html-components",
      },
    ],
  },
];

function DocsMenu() {
  return (
    <>
      <div>
        {links.map((link) => (
          <>
            <h2 className="mb-4 text-2xl">{link.title}</h2>
            <div className="mb-8 flex flex-col gap-4 border-l py-2 pl-4">
              {link.links.map((link) => (
                <Link
                  className="transition-all hover:text-white/60"
                  href={link.target}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default function Docs() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <DocsMenu />
        </div>
      </div>
    </>
  );
}

Docs.layout = "app";
