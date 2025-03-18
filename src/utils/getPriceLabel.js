import { pricingOptionList } from "./enumPricingOption"

export const getPriceLabel = (value) => {
    return Object.values(pricingOptionList).filter((option) => {
        return option.value === value.pricingOption
    })[0]?.label
}