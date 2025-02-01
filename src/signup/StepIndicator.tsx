import * as React from "react";
import { StepProps } from "./types";

export const StepIndicator: React.FC<StepProps> = ({ number, description }) => (
  <div className="step-indicator">
    <div className="step-number">{number}</div>
    <div className="step-description">{description}</div>
  </div>
);
