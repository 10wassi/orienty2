import * as React from "react";
import { StepProps } from "./types";

export const RegistrationStep: React.FC<StepProps> = ({
  number,
  description,
  isActive = false,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span
        className={`mb-2.5 text-2xl rounded-full h-[50px] w-[50px] flex items-center justify-center
          ${isActive ? "bg-sky-900 text-white" : "bg-gray-300 text-gray-700"}`}
        aria-current={isActive ? "step" : undefined}
      >
        {number}
      </span>
      <div className="text-lg max-w-[200px]">{description}</div>
    </div>
  );
};
