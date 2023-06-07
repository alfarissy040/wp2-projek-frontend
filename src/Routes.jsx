import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import Checkout from "./components/Checkout";
import Dashboard from "./components/admin/Dashboard";
import Menu from "./components/admin/Menu";
import Transaksi from "./components/admin/Transaksi";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <h1>test</h1>,
                loader: () => redirect("/admin/dashboard"),
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "transaksi",
                element: <Transaksi />,
            },
        ],
    },
]);

export { router };
