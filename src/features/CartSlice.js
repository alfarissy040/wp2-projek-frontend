import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        subTotal: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.cart.some((item) => item.id === action.payload.id)) {
                CartSlice.caseReducers.addQuantity(action.payload.id);
            } else {
                state.cart = state.cart.concat(action.payload);
            }
            // update subtotal
            CartSlice.caseReducers.countSubtotal(state);
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => (item.id != action.payload.id ? item : null));
            CartSlice.caseReducers.countSubtotal(state);
        },

        addQuantity: (state, action) => {
            const updatedCart = state.cart.filter((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }
                return item.quantity > 0;
            });

            state.cart = updatedCart;
            // update subtotal
            CartSlice.caseReducers.countSubtotal(state);
        },

        removeQuantity: (state, action) => {
            const updatedCart = state.cart.filter((item) => {
                if (item.id === action.payload) {
                    item.quantity -= 1;
                }
                return item.quantity > 0;
            });

            state.cart = updatedCart;
            // update subtotal
            CartSlice.caseReducers.countSubtotal(state);
        },

        countSubtotal: (state) => {
            state.subTotal = state.cart.reduce((total, item) => total + item.harga * item.quantity, 0);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addQuantity, removeQuantity, getSubtotal } = CartSlice.actions;

export default CartSlice.reducer;
