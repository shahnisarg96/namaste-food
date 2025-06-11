import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Assuming you have a cartSlice.js file

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;