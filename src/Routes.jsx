import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import Checkout from "./components/Checkout";
import Dashboard from "./components/admin/Dashboard";

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
                element: <Dashboard />,
            },
        ],
    },
]);

export { router };
