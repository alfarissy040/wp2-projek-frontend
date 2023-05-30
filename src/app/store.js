import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "../features/OrderSlice";
import ModalReducer from "../features/ModalSlice";

export default configureStore({
    reducer: {
        order: OrderReducer,
        modal: ModalReducer,
    },
});
