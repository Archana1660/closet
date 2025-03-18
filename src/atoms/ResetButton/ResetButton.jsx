import PropTypes from "prop-types";
import { StyledResetButton } from "./ResetButtonStyle";

export const ResetButton = ({ buttonText }) => {
  return <StyledResetButton>{buttonText}</StyledResetButton>;
};

ResetButton.prototype = {
  buttonText: PropTypes.string,
};
