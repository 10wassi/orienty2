import * as React from "react";
import { RawImg } from "./RawImg";
import { SocialButtonProps } from "./types";

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  altText,
  text,
}) => (
  <button
    type="button"
    className="flex flex-1 items-center px-12 py-4 text-lg bg-blue-50 border border-black border-solid cursor-pointer rounded-[50px] max-md:px-5 max-md:py-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-900"
    aria-label={text}
  >
    <RawImg image={icon} altText={altText} className="mr-5 h-[42px] w-[42px]" />
    <span>{text}</span>
  </button>
);
