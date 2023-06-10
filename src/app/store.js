import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "../features/OrderSlice";
import ModalReducer from "../features/ModalSlice";
import DialogReducer from "../features/DialogSlice";

export default configureStore({
    reducer: {
        order: OrderReducer,
        modal: ModalReducer,
        dialog: DialogReducer,
    },
});
