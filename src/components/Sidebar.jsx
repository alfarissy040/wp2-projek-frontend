import { HiOutlineShoppingCart, HiOutlineSquares2X2 } from "react-icons/hi2";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const order = useSelector(({ order }) => order.order).length;
    return (
        <aside className="sticky top-0 w-72">
            <div className="w-full h-full p-3 rounded-md shadow-md bg-white">
                {/* logo */}
                <div className="flex items-center gap-x-2">
                    <div className="w-12 aspect-square">
                        <img src={logo} alt="" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-2xl font-bold">Restaurant</h1>
                </div>
                {/* menu */}
                <div className="w-full flex items-center flex-col gap-3 mt-8">
                    {/* menu */}
                    <NavLink to="/" className="sidebar__item">
                        {({ isActive }) => (
                            <Fragment>
                                {/* accent */}
                                <span className={`w-1 h-6 bg-blue-500 absolute inset-0 my-auto ${!isActive ? "hidden" : ""}`}></span>
                                {/* logo */}
                                <HiOutlineSquares2X2 className="w-5 h-5" />
                                {/* label */}
                                <p>Menu</p>
                            </Fragment>
                        )}
                    </NavLink>
                    {/* order */}
                    <NavLink to={"/checkout"} className="sidebar__item">
                        {({ isActive }) => (
                            <Fragment>
                                {/* accent */}
                                <span className={`w-1 h-6 bg-blue-500 absolute inset-0 my-auto ${!isActive ? "hidden" : ""}`}></span>
                                {/* logo */}
                                <HiOutlineShoppingCart className="w-5 h-5" />
                                {/* label */}
                                <p className="flex-1">My Order</p>
                                <span className="text-zinc-400 text-xs">{order} items</span>
                            </Fragment>
                        )}
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
