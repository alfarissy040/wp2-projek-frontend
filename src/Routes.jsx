import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./layout/MainLayout";
import Checkout from "./components/Checkout";

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
]);

export { router };
