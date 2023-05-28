import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return (
        <main className="w-full h-screen flex overflow-hidden overflow-y-auto ">
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
