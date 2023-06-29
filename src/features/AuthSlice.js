import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        auth: {
            status: false,
            username: null,
            tokenId: null,
        },
    },
    reducers: {
        Login: (state) => {
            window.localStorage.setItem("user", JSON.stringify({ username: "admin" }));
            state.auth.status = true;
            state.auth.username = "admin";
        },

        Logout: (state) => {
            window.localStorage.clear();
            state.auth.status = false;
            state.auth.username = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { Login, Logout, checkAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
