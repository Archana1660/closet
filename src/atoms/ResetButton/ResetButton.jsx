import React from "react";
import { StyledResetButton } from "./ResetButtonStyle";

export const ResetButton = ({ buttonText, handleReset }) => {
  return (
    <StyledResetButton onClick={handleReset}>{buttonText}</StyledResetButton>
  );
};
