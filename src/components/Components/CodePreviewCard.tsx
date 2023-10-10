import { useState } from "react";
import CodePreview from "./CodePreview";
import { IconCopy } from "@tabler/icons-react";

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

export default function CodePreviewCard({
  title,
  children,
  code,
}: {
  title: string;
  children: React.ReactNode;
  code: string | string[];
}) {
  const [preview, setPreview] = useState(true);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className=" rounded bg-black">
        <div className="sticky left-0 top-0 z-40 flex items-center justify-between rounded rounded-b-none bg-zinc-800 px-4 py-2">
          <h3 className="semibold text-2xl leading-none">{title}</h3>
          <ToggleButton preview={preview} click={() => setPreview(!preview)} />
        </div>
        <div className={`${preview ? "" : "px-4 py-8"} flex h-full`}>
          {preview ? (
            <>
              <div className="w-full ">{children}</div>
            </>
          ) : (
            <div className="relative w-full">
              <div className="relative ml-auto w-max">
                <div className="flex items-center">
                  <p
                    className={`${
                      hover ? "flex" : "hidden"
                    } absolute left-0 translate-x-[-70px] rounded bg-white/80 px-3 py-1 text-sm font-semibold text-black/80`}
                  >
                    Copy
                  </p>
                  <button
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() =>
                      navigator.clipboard.writeText(code.toString())
                    }
                  >
                    <IconCopy className="h-6  w-6 text-white/60 transition-all hover:text-white/80" />
                  </button>
                </div>
              </div>
              <CodePreview>{code}</CodePreview>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
