import { createSelector } from "@reduxjs/toolkit";

const selectAllProducts = (state) => state.products?.data

const selectSearchKeyword = (state) => state.products?.searchKeyword

const selectFilterOption = (state) => state.products?.selectedPricingOption

export const selectFilteredProducts = createSelector([selectAllProducts, selectSearchKeyword, selectFilterOption],
    (products, searchTerm, filterOption) => {
        if (!searchTerm && !filterOption) return products;

        if (searchTerm) {
            return products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.creator.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (filterOption) {
            return products.filter((product) => {
                return filterOption.includes(product.pricingOption)
            }
            );
        }
    }
);