import * as React from "react";
import { FooterLinkProps } from "./types";

export const FooterLinkSection: React.FC<FooterLinkProps> = ({
  title,
  links,
}) => (
  <div className="flex flex-col flex-1 shrink basis-0">
    <div className="font-semibold text-neutral-800">{title}</div>
    <div className="flex flex-col mt-6 w-full font-medium text-zinc-800">
      {links.map((link, index) => (
        <div key={index} className={index > 0 ? "mt-3.5" : ""}>
          {link}
        </div>
      ))}
    </div>
  </div>
);
