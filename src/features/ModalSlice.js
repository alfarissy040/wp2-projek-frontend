import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: "modal",
    initialState: {
        status: false,
        checkoutStatus: false,
        adminStatus: false,
        adminMenuStatus: false,
        dataId: null,
    },
    reducers: {
        setModalStatus: (state, action) => {
            state.status = action.payload;
        },

        showModal: (state, action) => {
            state.dataId = action.payload;
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
            state.dataId = action.payload;
            // memunculkan modal
            state.adminStatus = true;
        },

        // admin modal create edit
        setadminMenuStatus: (state, action) => {
            state.adminMenuStatus = action.payload;
        },

        showadminMenuStatus: (state, action) => {
            state.dataId = action.payload;
            // memunculkan modal
            state.adminMenuStatus = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setModalStatus, showModal, setCheckoutModalStatus, setAdminModalStatus, showAdminModal, setadminMenuStatus, showadminMenuStatus } = ModalSlice.actions;

export default ModalSlice.reducer;
