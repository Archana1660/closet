import styled from "styled-components";

import { Colors } from "../../utils/Colors";
import { pricingOptionList } from "../../utils/enumPricingOption";

const StyledCheckBoxLabel = styled.label`
  margin-left: 0.5rem;
  color: ${Colors.TEXT_COLOR};
`;

const StyledSection = styled.section`
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

export const CheckboxInput = ({
  selectedPriceOption,
  setSelectedPriceOption,
}) => {
  const handlePricingOption = (e) => {
    const { value, checked } = e.target;
    setSelectedPriceOption(
      (prev) =>
        checked ? [...prev, value] : prev.filter((item) => item !== value) // Add/remove item
    );
  };

  return (
    <StyledSection>
      <StyledFormTitle>Pricing Options</StyledFormTitle>
      {Object.keys(pricingOptionList).map((option) => {
        // get the list of price name and value
        return (
          <div key={pricingOptionList[option].value}>
            <input
              type="checkbox"
              id={pricingOptionList[option].value}
              value={pricingOptionList[option].value}
              checked={selectedPriceOption.includes(
                `${pricingOptionList[option].value}`
              )}
              onChange={handlePricingOption}
            />
            <StyledCheckBoxLabel htmlFor={pricingOptionList[option].value}>
              {pricingOptionList[option].label}
            </StyledCheckBoxLabel>
          </div>
        );
      })}
    </StyledSection>
  );
};
