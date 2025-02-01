import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  id,
  value,
  onChange,
  required = false,
  error,
}) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-2.5">
        <label htmlFor={id} className="text-lg leading-10">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`px-7 py-2 text-base rounded-2xl border ${
            error ? "border-red-500" : "border-black"
          } border-solid focus:outline-none focus:ring-2 focus:ring-sky-900`}
        />
        {error && (
          <span id={`${id}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
