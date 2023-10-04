import UI from "~/components/Components/UI";
import Sidebar1 from "~/components/Components/UI/Sidebars/Sidebar1";
import { sidebar1 } from "~/mockdata/components";

export default function Sidebars() {
  return (
    <>
      <div className="container mx-auto">
        <UI title={"Sidebar1"} code={sidebar1}>
          <Sidebar1 />
        </UI>
      </div>
    </>
  );
}
Sidebars.layout = "app";
