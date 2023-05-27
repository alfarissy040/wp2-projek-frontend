import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/CartSlice";
import OrderReducer from "../features/OrderSlice";
import ModalReducer from "../features/ModalSlice";

export default configureStore({
    reducer: {
        cart: CartReducer,
        order: OrderReducer,
        modal: ModalReducer,
    },
});
