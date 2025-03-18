import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://closet-recruiting-api.azurewebsites.net/api/data")
    const data = await response.json()
    return data
})

const initialState = {
    isLoading: false,
    data: null,
    isReset: false,
    isError: false,
    searchKeyword: "",
    selectedPricingOption: null
}

const ProductStoreSlice = createSlice({
    name: "Products",
    initialState: initialState,
    reducers: {
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload
        },
        setFilterOption: (state, action) => {
            state.selectedPricingOption = action.payload
        },
        resetOptions: (state, action) => {
            state.isReset = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.oldData = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isError = true
        })
    }
})
export const { setSearchKeyword, setFilterOption, resetOptions } = ProductStoreSlice.actions;
export default ProductStoreSlice.reducer;