import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItemToCart(state, action) {
            state.items.push(action.payload);
        },
        removeItemFromCart(state) {
            state.items.pop();
        },
        clearCart(state) {
            state.items.length = 0;
        },
    },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
