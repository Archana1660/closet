import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    creator: "",
    pricingOption: "",
    imagePath: "",
    price: 0
}
const ProductStoreSlice = createSlice({
    name: "Products",
    initialState: initialState,
    reducers: {
        addHabit: () => { }
    }
})
export const { addHabit } = ProductStoreSlice.actions;
export default ProductStoreSlice.reducer;