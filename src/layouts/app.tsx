import Navbar from "~/components/Navbar";

export default function appLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-red-500">{children}</div>
    </>
  );
}
