import * as React from "react";
import { FeatureCardProps } from "./types";
import { DottedLine } from "./DottedLine";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  iconUrl,
}) => (
  <div className="flex overflow-hidden flex-col flex-1 shrink p-20 bg-white rounded-xl border-2 border-solid shadow-sm basis-0 border-neutral-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col justify-center w-full max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="self-start text-3xl font-bold leading-tight text-center text-zinc-900 max-md:max-w-full max-md:text-4xl">
          {title}
        </div>
        <DottedLine />
      </div>
      <div className="self-start mt-10 text- full font-medium leading-5 text-center text-neutral-600 max-md:mt-10 max-md:max-w-full">
        {description}
      </div>
    </div>
    <button className="flex overflow-hidden flex-wrap gap-2.5 justify-center items-center py-5 mt-20 w-full text-xl font-medium text-center text-white rounded-xl border-2 border-solid shadow-sm bg-slate-500 !bg-sky-900 border-neutral-800 max-md:mt-10 max-md:max-w-full">
      <span className="self-stretch my-auto">{buttonText}</span>
      <img
        loading="lazy"
        src={iconUrl}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
      />
    </button>
  </div>
);
