import { render } from "react-dom";
import { createElement } from "react";

export default function CodeRender({ code }: { code: string }) {
  const transformedCode = `
    const element = ${code};
    ReactDOM.render(element, document.getElementById("root"));
  `;

  eval(transformedCode);

  return <div id="root" />;
}
