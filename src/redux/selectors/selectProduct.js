import { createSelector } from "@reduxjs/toolkit";

const getAllProducts = (state) => state.products?.data

const getSearchKeyword = (state) => state.products?.searchKeyword

const getFilterOption = (state) => state.products?.selectedPricingOption

export const selectFilteredProducts = createSelector([getAllProducts, getSearchKeyword, getFilterOption],
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