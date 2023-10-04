import { ReactNode, useState } from "react";
import CodePreview from "./CodePreview";

function ToggleButton({
  preview,
  click,
}: {
  preview: boolean;
  click: () => void;
}) {
  return (
    <>
      <div className="relative flex gap-8 rounded bg-zinc-900 px-4 py-2">
        <span
          onClick={click}
          className="z-10 cursor-pointer text-sm font-semibold"
        >
          Preview
        </span>
        <span
          onClick={click}
          className="z-10 cursor-pointer text-sm font-semibold"
        >
          Code
        </span>
        <span
          className={`${
            preview ? "translate-x-0" : "translate-x-full"
          } absolute left-0 top-0 z-[1] h-full w-1/2  rounded bg-[#3a62c6d5] transition-all`}
        ></span>
      </div>
    </>
  );
}

export default function UI({
  title,
  children,
  code,
}: {
  title: string;
  children: ReactNode;
  code: string | string[];
}) {
  const [preview, setPreview] = useState(true);
  return (
    <>
      <div className=" rounded bg-black">
        <div className="sticky left-0 top-0 z-40 flex items-center justify-between rounded rounded-b-none bg-zinc-800 px-4 py-2">
          <h3 className="semibold text-2xl leading-none">{title}</h3>
          <ToggleButton preview={preview} click={() => setPreview(!preview)} />
        </div>
        <div className={`${preview ? "" : "px-4 py-8"} flex h-full`}>
          {preview ? <>{children}</> : <CodePreview>{code}</CodePreview>}
        </div>
      </div>
    </>
  );
}
