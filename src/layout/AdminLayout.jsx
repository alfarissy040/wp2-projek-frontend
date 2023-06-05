import "../Admin.css";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
    return (
        <main className="flex w-full h-screen">
            <Sidebar />

            {/* start dashboard */}
            <div className="flex-1 h-screen overflow-y-auto bg-gray">
                <Header />
                {/* start card  */}
                <div className="w-full">
                    <Outlet />
                </div>
                {/* end card  */}
            </div>
        </main>
    );
};

export default AdminLayout;
