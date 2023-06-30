import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "./helper";

// get dashboard data
export const getDashboard = createAsyncThunk("admin/getDashboard", async () => {
    const dataDashboard = await axios.get(baseUrl + "dashboard").then((res) => res.data);
    return {
        sold: dataDashboard.sold,
        menus: dataDashboard.total_menu,
        amount: dataDashboard.amount,
    };
});

// get popular menus
export const getPopularMenu = createAsyncThunk("admin/getPopularMenu", async () => {
    const popularMenus = await axios.get(baseUrl + "menus/popular").then((res) => res.data);
    return popularMenus;
});

// get all menu
export const getMenus = createAsyncThunk("admin/getMenus", async () => {
    const menus = await axios.get(baseUrl + "menus").then((res) => res.data.data);
    return menus;
});

// get transaction data
export const getTransaction = createAsyncThunk("admin/getTransaction", async () => {
    const transaction = await axios.get(baseUrl + "orders").then((res) => res.data);
    return transaction;
});

export const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        dashboard: {
            loading: true,
            data: {
                sold: null,
                menus: null,
                amount: null,
            },
        },
        popularMenus: {
            loading: true,
            data: [],
        },
        menus: {
            loading: true,
            data: [],
        },
        transaction: {
            loading: true,
            data: [],
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        // update dashboard loading
        builder.addCase(getDashboard.pending, (state) => {
            if (!state.dashboard.data) {
                state.dashboard.loading = true;
            }
        });
        // update dashboard data
        builder.addCase(getDashboard.fulfilled, (state, action) => {
            state.dashboard.loading = false;
            state.dashboard.data.sold = action.payload.sold;
            state.dashboard.data.menus = action.payload.menus;
            state.dashboard.data.amount = action.payload.amount;
        });

        // update popular menus loading
        builder.addCase(getPopularMenu.pending, (state) => {
            if (!state.popularMenus.data) {
                state.popularMenus.loading = true;
            }
        });
        // update popular menus
        builder.addCase(getPopularMenu.fulfilled, (state, action) => {
            state.popularMenus.loading = false;
            state.popularMenus.data = action.payload;
        });

        // update menus loading
        builder.addCase(getMenus.pending, (state) => {
            if (!state.menus.data) {
                state.menus.loading = true;
            }
        });
        // update menus
        builder.addCase(getMenus.fulfilled, (state, action) => {
            state.menus.loading = false;
            state.menus.data = action.payload;
        });

        // update transaction loading
        builder.addCase(getTransaction.pending, (state) => {
            if (!state.transaction.data) {
                state.transaction.loading = true;
            }
        });
        // update transaction
        builder.addCase(getTransaction.fulfilled, (state, action) => {
            state.transaction.loading = false;
            state.transaction.data = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const {} = AdminSlice.actions;

export default AdminSlice.reducer;
