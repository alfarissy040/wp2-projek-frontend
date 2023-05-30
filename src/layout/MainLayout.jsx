import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return (
        <main className="w-full h-screen flex gap-x-3 overflow-hidden overflow-y-auto bg-gray p-2">
            {/* sidebar */}
            <Sidebar />
            {/* main content */}
            <div className="w-full flex-1 h-auto">
                <Outlet />
            </div>
        </main>
    );
};

export default MainLayout;
