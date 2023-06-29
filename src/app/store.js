import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "../features/OrderSlice";
import ModalReducer from "../features/ModalSlice";
import DialogReducer from "../features/DialogSlice";
import AdminReducer from "../features/AdminSlice";
import AuthReducer from "../features/AuthSlice";

export default configureStore({
    reducer: {
        order: OrderReducer,
        modal: ModalReducer,
        dialog: DialogReducer,
        admin: AdminReducer,
        auth: AuthReducer,
    },
});
