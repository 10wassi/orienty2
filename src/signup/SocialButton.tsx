import * as React from "react";
import { RawImg } from "./RawImg";
import { SocialButtonProps } from "./types";

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  altText,
  label,
}) => (
  <button className="social-button">
    <RawImg image={icon} altText={altText} className="social-icon" />
    <span>{label}</span>
  </button>
);
