import Navbar from "~/components/Navbar";

export default function appLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className=" my-16">{children}</div>
    </>
  );
}
