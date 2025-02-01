import * as React from "react";
import { SocialButtonProps } from "./types";

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  altText,
  text,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-1 gap-5 justify-center items-center px-12 py-4 text-lg 
        bg-blue-50 border border-black border-solid cursor-pointer rounded-[50px] 
        max-sm:px-5 max-sm:py-4 hover:bg-gray-100 transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-sky-900"
      aria-label={`S'inscrire avec ${altText}`}
    >
      <img src={icon} alt="" className="h-[42px] w-[42px]" aria-hidden="true" />
      <span>{text}</span>
    </button>
  );
};
