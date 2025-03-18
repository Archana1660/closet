import { pricingOptionList } from "./enumPricingOption"

export const getProductOption = (value) => {
    return Object.values(pricingOptionList).filter((option) => {
        return option.value === value.pricingOption
    })
}