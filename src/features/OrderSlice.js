import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
    name: "order",
    initialState: {
        cart: [],
        cartSubTotal: 0,
        order: [],
        orderSubTotal: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.cart.some((item) => item.id === action.payload.id)) {
                OrderSlice.caseReducers.addquantities(action.payload.id);
            } else {
                state.cart = state.cart.concat(action.payload);
            }
            // update subtotal
            OrderSlice.caseReducers.countCartSubtotal(state);
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => (item.id != action.payload.id ? item : null));
            OrderSlice.caseReducers.countCartSubtotal(state);
        },

        addQuantities: (state, action) => {
            const updatedCart = state.cart.filter((item) => {
                if (item.id === action.payload) {
                    item.quantities += 1;
                }
                return item.quantities > 0;
            });

            state.cart = updatedCart;
            // update subtotal
            OrderSlice.caseReducers.countCartSubtotal(state);
        },

        removeQuantities: (state, action) => {
            const updatedCart = state.cart.filter((item) => {
                if (item.id === action.payload) {
                    item.quantities -= 1;
                }
                return item.quantities > 0;
            });

            state.cart = updatedCart;
            // update subtotal
            OrderSlice.caseReducers.countCartSubtotal(state);
        },

        countCartSubtotal: (state) => {
            state.cartSubTotal = state.cart.reduce((total, item) => total + item.price * item.quantities, 0);
        },

        clearCart: (state) => {
            state.cart = [];
            state.cartSubTotal = 0;
        },

        // order

        addOrder: (state, action) => {
            const order = action.payload.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    status: false,
                    quantities: item.quantities,
                };
            });

            state.order = state.order.concat(order);
            OrderSlice.caseReducers.countOrderSubtotal(state);
            OrderSlice.caseReducers.clearCart(state);
        },

        countOrderSubtotal: (state) => {
            state.orderSubTotal = state.order.reduce((total, item) => total + item.price * item.quantities, 0);
        },

        clearOrder: (state) => {
            state.order = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addQuantities, removeQuantities, getSubtotal, clearCart, addOrder, clearOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
