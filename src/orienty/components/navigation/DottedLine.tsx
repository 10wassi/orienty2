import * as React from "react";
import { DottedLineProps } from "./types";

export const DottedLine: React.FC<DottedLineProps> = ({ className = "" }) => (
  <div
    className={`flex flex-wrap gap-2.5 items-center mt-8 w-full min-h-[20px] ${className}`}
  >
    <div className="flex flex-1 shrink gap-0 items-center self-stretch my-auto basis-0">
      <div className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-white rounded-full border-2 border-solid border-neutral-800 fill-white stroke-[2px] stroke-neutral-800" />
      <div className="flex flex-1 shrink gap-2.5 justify-center items-center self-stretch py-1.5 pr-1.5 my-auto bg-white basis-0">
        <div className="flex-1 shrink self-stretch my-auto w-full border-2 border-black border-solid basis-0 min-h-[2px]" />
      </div>
    </div>
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="flex flex-1 shrink gap-2.5 justify-center items-center self-stretch py-1.5 pr-1.5 my-auto bg-white basis-0"
      >
        <div className="flex-1 shrink self-stretch my-auto w-full border-2 border-black border-solid basis-0 min-h-[2px]" />
      </div>
    ))}
    <div className="flex flex-1 shrink gap-0 items-center self-stretch my-auto basis-0">
      <div className="flex flex-1 shrink gap-2.5 justify-center items-center self-stretch py-1.5 pr-1.5 my-auto bg-white basis-0">
        <div className="flex-1 shrink self-stretch my-auto w-full border-2 border-black border-solid basis-0 min-h-[2px]" />
      </div>
      <div className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-white rounded-full border-2 border-solid border-neutral-800 fill-white stroke-[2px] stroke-neutral-800" />
    </div>
  </div>
);
