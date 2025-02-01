import * as React from "react";
import { PasswordInputProps } from "./types";

export const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  placeholder,
}) => (
  <div className="flex-1">
    <label htmlFor={id} className="mb-2.5 text-lg text-left text-black block">
      {label}
    </label>
    <input
      id={id}
      type="password"
      placeholder={placeholder}
      className="px-5 py-4 mt-1 w-full text-2xl rounded-2xl border border-black border-solid focus:outline-none focus:ring-2 focus:ring-sky-900"
      aria-required="true"
    />
  </div>
);
