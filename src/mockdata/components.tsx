export const navbar1 = `import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const router = useRouter();

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
            className={\`$\{
              open ? "visible pt-8 md:pt-0" : "invisible h-max md:visible"
            } flex flex-col items-center gap-5 transition-all md:flex-row md:gap-8 \`}
          >
            {links.map((link) => (
              <Link
                className={\`$\{
                  router.pathname === link.href ? "text-blue-500" : "text-white"
                } $\{open ? "" : "hidden md:flex"} font-semibold \`}
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
}`;

export const sidebar1 = `import {
  IconCalendarEvent,
  IconDashboard,
  IconHome2,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

const links = [
  { label: "Home", target: "#home", icon: IconHome2 },
  { label: "Dashboard", target: "#dashboard", icon: IconDashboard },
  { label: "Events", target: "#events", icon: IconCalendarEvent },
  { label: "Account", target: "#account", icon: IconUser },
];

const footer = { label: "Logout", icon: IconLogout };

const SidebarLink = ({
  label,
  target,
  icon,
}: {
  label: string;
  target?: string;
  icon: ReactNode;
}) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="relative flex items-center">
        {target ? (
          <Link
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={\`$\{
              router.pathname === target
                ? "bg-blue-400/20 text-blue-300"
                : "hover:bg-black/20"
            }  rounded p-3 transition-all \`}
            href={target}
          >
            {icon}
          </Link>
        ) : (
          <button
            className="h-max w-max rounded p-3 transition-all hover:bg-black/20"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {icon}
          </button>
        )}
        <p
          className={\`$\{
            hover ? "visible" : "invisible"
          }\` absolute left-0 translate-x-[60px] rounded bg-white/50 px-4 py-1 text-sm font-semibold text-black/80 \`}
        >
          {label}
        </p>
      </div>
    </>
  );
};

export default function Sidebar1() {
  return (
    <>
      <div className="sticky left-0 top-0 flex h-screen w-max flex-col border-r border-white/20 bg-zinc-900 px-3 py-8">
        <div>
          <p className="font-semibold text-blue-300/60">Module</p>
        </div>
        <div className="flex-flex-col mt-20">
          {links.map((link) => (
            <SidebarLink
              label={link.label}
              target={link.target}
              icon={<link.icon className="h-6 w-6" />}
            />
          ))}
        </div>
        <div className="mt-auto">
          <SidebarLink
            label={footer.label}
            icon={<footer.icon className="h-6 w-6" />}
          />
        </div>
      </div>
    </>
  );
}
`;
