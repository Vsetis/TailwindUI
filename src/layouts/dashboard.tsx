import Sidebar1 from "~/components/Components/UI/Sidebars/Sidebar1";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <Sidebar1 />
        {children}
      </div>
    </>
  );
}
