import styled from "styled-components";
import { Colors } from "../../utils/Colors";

const StyledCheckBoxLabel = styled.label`
  margin-left: 0.5rem;
  color: ${Colors.TEXT_COLOR};
`;

const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const StyledFormTitle = styled.p`
  color: ${Colors.TEXT_COLOR};
`;

export const CheckboxInput = ({ pricingOption }) => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault}>
      <StyledFormTitle>Pricing Options</StyledFormTitle>
      {Object.keys(pricingOption).map((option) => {
        return (
          <div key={pricingOption[option]}>
            <input
              type="checkbox"
              id={pricingOption[option]}
              name={option}
              value={pricingOption[option]}
            />
            <StyledCheckBoxLabel htmlFor={pricingOption[option]}>
              {option}
            </StyledCheckBoxLabel>
          </div>
        );
      })}
    </StyledForm>
  );
};
