import * as React from "react";
import { StepProps } from "./types";

export const Step: React.FC<StepProps> = ({ number, description }) => (
  <div className="flex flex-col items-center text-center" role="listitem">
    <div
      className="mb-4 text-2xl text-white bg-sky-900 rounded-full h-[50px] w-[50px] flex items-center justify-center"
      aria-label={`Step ${number}`}
    >
      {number}
    </div>
    <div className="text-lg text-center text-black max-w-[200px]">
      {description}
    </div>
  </div>
);
