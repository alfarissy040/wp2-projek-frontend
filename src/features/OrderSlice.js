import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
    name: "order",
    initialState: {
        order: [],
        subTotal: 0,
    },
    reducers: {
        addOrder: (state, action) => {
            if (state.order.some((item) => item.id === action.payload.id)) {
                OrderSlice.caseReducers.addQuantity(action.payload.id);
            } else {
                state.order = state.order.concat(action.payload);
            }
        },

        clearOrder: (state) => {
            state.order = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addOrder, clearOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
