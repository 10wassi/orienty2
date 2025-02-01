import * as React from "react";
import { FAQCardProps } from "./types";

export const FAQCard: React.FC<FAQCardProps> = ({
  title,
  description,
  isExpanded,
  iconSrc,
}) => {
  return (
    <div className="flex flex-wrap gap-8 p-10 w-full bg-white rounded-xl border-2 border-solid border-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink basis-4 min-w-[240px] max-md:max-w-full">
        <div className="text-2xl font-semibold text-neutral-800 max-md:max-w-full">
          {title}
        </div>
        {isExpanded && (
          <>
            <div className="mt-6 w-full border-2 border-solid bg-neutral-800 border-neutral-800 min-h-[2px] max-md:max-w-full" />
            <div className="mt-6 text-xl font-medium leading-8 text-zinc-800 max-md:max-w-full">
              {description}
            </div>
          </>
        )}
      </div>
      <div className="flex gap-2.5 items-center self-start p-2 w-10 h-10 bg-orange-50 rounded-md border-2 border-solid border-neutral-800">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain w-6 aspect-square"
        />
      </div>
    </div>
  );
};
