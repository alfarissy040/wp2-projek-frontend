import "../Admin.css";
import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
    return (
        <main className="flex w-full h-screen">
            <Sidebar />

            {/* start dashboard */}
            <div className="flex-1 h-screen overflow-y-auto bg-gray">
                <Outlet />
            </div>
        </main>
    );
};

export default AdminLayout;
