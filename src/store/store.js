import { configureStore } from '@reduxjs/toolkit'
import ProductStoreSliceReducer from "./ProductStoreSlice"

const store = configureStore({
    reducer: {
        products: ProductStoreSliceReducer
    },
})

export default store