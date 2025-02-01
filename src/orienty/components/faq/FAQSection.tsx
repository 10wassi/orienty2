import * as React from "react";
import { FAQSectionProps } from "./types";

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex flex-col px-20 w-full font-medium text-center text-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="overflow-hidden gap-2.5 self-center px-2 py-2 text-lg bg-white rounded-lg border-2 border-black border-solid">
        {title}
      </div>
      <div className="mt-5 text-4xl font-bold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
        {subtitle}
      </div>
      <div className="mt-5 text-xl leading-8 max-md:max-w-full">
        {description}
      </div>
    </div>
  );
};
