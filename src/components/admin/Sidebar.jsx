import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUtensils, FaMoneyCheckAlt } from "react-icons/fa";
const Sidebar = () => {
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
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/transaksi"} className="adminSidebar__item">
                            <FaMoneyCheckAlt className="w-5 h-5" />
                            Transaksi
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
