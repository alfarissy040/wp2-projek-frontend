import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./layout/MainLayout";

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
                element: <h1>Checkout</h1>,
            },
        ],
    },
]);

export { router };
