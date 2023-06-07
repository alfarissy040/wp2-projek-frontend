import { createSlice } from "@reduxjs/toolkit";
import { dummy } from "../dumy";

export const ModalSlice = createSlice({
    name: "modal",
    initialState: {
        status: false,
        checkoutStatus: false,
        adminStatus: false,
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

        // checkout modal
        setCheckoutModalStatus: (state, action) => {
            state.checkoutStatus = action.payload;
        },

        // admin modal
        setAdminModalStatus: (state, action) => {
            state.adminStatus = action.payload;
        },

        showAdminModal: (state, action) => {
            state.data = dummy.filter((item) => item.id === action.payload);
            // memunculkan modal
            state.adminStatus = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setModalStatus, showModal, setCheckoutModalStatus, setAdminModalStatus, showAdminModal } = ModalSlice.actions;

export default ModalSlice.reducer;
