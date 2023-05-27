import { HiOutlineShoppingCart, HiOutlineSquares2X2 } from "react-icons/hi2";
import logo from "../assets/img/logo.png";

const Sidebar = () => {
    return (
        <aside className="p-2 sticky top-0 w-72">
            <div className="w-full h-full p-3 rounded-md shadow-md bg-zinc-100">
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
                    <div className="flex items-center gap-3 w-full bg-blue-200 p-2 rounded relative cursor-pointer">
                        {/* accent */}
                        <div className="w-1 h-6 bg-blue-500 absolute inset-0 my-auto"></div>
                        {/* logo */}
                        <HiOutlineSquares2X2 className="w-5 h-5" />
                        {/* label */}
                        <p>Menu</p>
                    </div>
                    {/* order */}
                    <div className="flex items-center gap-3 w-full bg-white p-2 rounded relative cursor-pointer">
                        {/* accent */}
                        {/* <div className="w-1 h-6 bg-blue-500 absolute inset-0 my-auto"></div> */}
                        {/* logo */}
                        <HiOutlineShoppingCart className="w-5 h-5" />
                        {/* label */}
                        <p className="flex-1">My Order</p>
                        <span className="text-zinc-400 text-xs">1 items</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
