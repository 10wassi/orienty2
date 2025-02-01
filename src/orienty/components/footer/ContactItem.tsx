import * as React from "react";
import { ContactItemProps } from "./types";

export const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  text,
  alt,
}) => (
  <div className="flex flex-wrap gap-2.5 items-center w-full rounded-md max-md:max-w-full">
    <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-10 h-10 bg-orange-50 rounded-md border-2 border-solid border-neutral-800">
      <img
        loading="lazy"
        src={icon}
        alt={alt}
        className="object-contain w-6 aspect-square"
      />
    </div>
    <div className="flex-1 shrink self-stretch my-auto text-xl font-medium basis-4 text-neutral-800 max-md:max-w-full">
      {text}
    </div>
  </div>
);
