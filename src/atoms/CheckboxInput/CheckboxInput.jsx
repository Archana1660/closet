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
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledFormTitle = styled.p`
  color: ${Colors.TEXT_COLOR};
`;

export const CheckboxInput = ({ pricingOptionList }) => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault}>
      <StyledFormTitle>Pricing Options</StyledFormTitle>
      {Object.keys(pricingOptionList).map((option) => {
        return (
          <div key={pricingOptionList[option].value}>
            <input
              type="checkbox"
              id={pricingOptionList[option].value}
              name={option}
              value={pricingOptionList[option].value}
            />
            <StyledCheckBoxLabel htmlFor={pricingOptionList[option].value}>
              {pricingOptionList[option].label}
            </StyledCheckBoxLabel>
          </div>
        );
      })}
    </StyledForm>
  );
};
