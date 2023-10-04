import UI from "~/components/Components/UI";
import Navbar1 from "~/components/Components/UI/Navbars/Navbar1";
import { navbar1 } from "~/mockdata/components";

export default function Navbars() {
  return (
    <>
      <div className="container mx-auto">
        <UI title={"Navbar1"} code={navbar1}>
          <Navbar1 />
        </UI>
      </div>
    </>
  );
}
Navbars.layout = "app";
