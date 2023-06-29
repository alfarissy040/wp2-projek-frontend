import logo from "../../assets/img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUtensils, FaMoneyCheckAlt } from "react-icons/fa";
import { Logout } from "../../features/AuthSlice";
import { useDispatch } from "react-redux";
const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(Logout());
        navigate("/login");
    };
    return (
        <div className="sidebar bg-emerald-500 h-screen">
            <div className="flex justify-center w-full h-24 my-2">
                <img src={logo} className="h-full object-contain" />
            </div>

            <div className="sidebar__content flex-1 flex flex-col justify-between">
                <ul>
                    <li>
                        <NavLink to={"/admin/dashboard"} className="adminSidebar__item">
                            <MdDashboard className="w-5 h-5" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/menu"} className="adminSidebar__item">
                            <FaUtensils className="w-5 h-5" />
                            Menus
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/transaksi"} className="adminSidebar__item">
                            <FaMoneyCheckAlt className="w-5 h-5" />
                            Transaction
                        </NavLink>
                    </li>
                </ul>
                <div className="w-full py-2">
                    <button className="px-3 py-2 bg-rose-500 hover:bg-rose-600 border-t border-white text-white flex-1 w-full" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
