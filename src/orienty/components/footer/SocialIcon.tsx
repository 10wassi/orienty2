import * as React from "react";
import { SocialIconProps } from "./types";

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <div className="flex gap-2.5 items-center p-4 w-14 h-14 rounded-lg border-2 border-solid bg-slate-500 border-neutral-800">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain w-6 aspect-square"
    />
  </div>
);
