import { redirect } from "react-router-dom";

const AdminLoader = () => {
    const auth = window.localStorage.getItem("user");
    if (!auth) return redirect("/login");

    return null;
};

export default AdminLoader;
