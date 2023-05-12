import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
