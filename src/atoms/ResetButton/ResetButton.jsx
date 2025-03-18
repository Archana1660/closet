import PropTypes from "prop-types";
import { StyledResetButton } from "./ResetButtonStyle";

export const ResetButton = ({ buttonText, handleReset }) => {
  return (
    <StyledResetButton onClick={handleReset}>{buttonText}</StyledResetButton>
  );
};

ResetButton.prototype = {
  buttonText: PropTypes.string,
};
