import CodePreviewCard from "~/components/Components/CodePreviewCard";
import Navbar1 from "~/components/Components/UI/Navbars/Navbar1";
import { navbar1 } from "~/mockdata/components";

export default function Category() {
  return (
    <>
      <div className="container mx-auto">
        <CodePreviewCard title={""} code={navbar1}>
          <Navbar1 />
        </CodePreviewCard>
      </div>
    </>
  );
}

Category.layout = "app";
