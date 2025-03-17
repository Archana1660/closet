import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://closet-recruiting-api.azurewebsites.net/api/data")
    const data = await response.json()
    return data
})

const initialState = {
    isLoading: false,
    data: null,
    isError: false
}
const ProductStoreSlice = createSlice({
    name: "Products",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isError = true
        })
    }
})
export const { addHabit } = ProductStoreSlice.actions;
export default ProductStoreSlice.reducer;