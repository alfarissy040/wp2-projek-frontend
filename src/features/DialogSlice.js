import { createSlice } from "@reduxjs/toolkit";

export const DialogSlice = createSlice({
    name: "dialog",
    initialState: {
        status: false,
        data: {
            status: null,
            label: null,
        },
    },
    reducers: {
        setDialogStatus: (state, action) => {
            state.status = action.payload;
        },

        showDialog: (state, action) => {
            state.data = {
                status: action.payload.status,
                label: action.payload.label,
            };
            // memunculkan dialog
            state.status = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setDialogStatus, showDialog } = DialogSlice.actions;

export default DialogSlice.reducer;
