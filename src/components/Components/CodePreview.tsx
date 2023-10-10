import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodePreview = ({ children }: { children: string | string[] }) => {
  return (
    <>
      <SyntaxHighlighter
        className="!bg-black"
        language="javascript"
        style={vscDarkPlus}
      >
        {children}
      </SyntaxHighlighter>
    </>
  );
};

export default CodePreview;
