import { createSelector } from "@reduxjs/toolkit";

const getAllProducts = (state) => state.products?.data

const getSearchKeyword = (state) => state.products?.searchKeyword

const getFilterOption = (state) => state.products?.selectedPricingOption

const isReset = (state) => state.products?.isReset

export const selectFilteredProducts = createSelector([getAllProducts, getSearchKeyword, getFilterOption, isReset],
    (products, searchTerm, filterOption, isReset) => {
        if (!searchTerm && !filterOption || isReset) return products;
        console.log({ searchTerm, filterOption })
        if (searchTerm && filterOption.length > 0) {
            return products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.creator.toLowerCase().includes(searchTerm.toLowerCase()) &&
                filterOption.includes(`${product.pricingOption}`))
        }

        if (searchTerm) {
            return products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.creator.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (filterOption.length > 0) {
            return products.filter((product) => {
                return filterOption.includes(`${product.pricingOption}`)
            }
            );
        }
    }
);