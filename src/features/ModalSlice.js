import { createSlice } from "@reduxjs/toolkit";
import { dummy } from "../dumy";

export const ModalSlice = createSlice({
    name: "modal",
    initialState: {
        status: false,
        data: {},
    },
    reducers: {
        setModalStatus: (state, action) => {
            state.status = action.payload;
        },

        showModal: (state, action) => {
            state.data = dummy.filter((item) => item.id === action.payload);
            // memunculkan modal
            state.status = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setModalStatus, showModal } = ModalSlice.actions;

export default ModalSlice.reducer;
