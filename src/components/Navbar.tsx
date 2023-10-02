import Link from "next/link";
import { api } from "~/utils/api";
import { useUser } from "~/utils/atoms";

const links = [
  { label: "Home", href: "/" },
  { label: "Browse", href: "/components" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [user, setUser] = useUser();
  const logoutMutation = api.auth.logout.useMutation({
    onSuccess: () => {
      setUser(null);
    },
  });
  return (
    <>
      <div className="w-full  border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between py-2">
          <div className="flex items-center gap-16">
            <Link href="/" className=" font-semibold">
              Module
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

          {user ? (
            <button
              className="text-sm font-semibold text-white transition-all hover:text-white/60"
              onClick={() => logoutMutation.mutate()}
            >
              Log Out
            </button>
          ) : (
            <div className="flex items-center gap-8">
              <Link
                className="text-sm font-semibold text-white transition-all hover:text-white/60"
                href="/login"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded  bg-[#3a62c6d5] px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-[bg-[#3a62c6]]"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
