import { HiOutlineShoppingCart, HiOutlineSquares2X2 } from "react-icons/hi2";

const Sidebar = () => {
    return (
        <aside className="py-3 px-2 bg-zinc-950 sticky top-0">
            {/* logo */}
            <HiOutlineSquares2X2 className="w-12 h-12 text-white mx-auto" />
            {/* menu */}
            <div className="w-full flex items-center flex-col gap-3 mt-8">
                {/* active menu */}
                <div className="rounded-md flex flex-col items-center justify-center w-14 h-14 text-white bg-blue-500 hover:bg-blue-500 cursor-pointer" title="Menu">
                    <HiOutlineSquares2X2 className="w-6 h-6" />
                    <span className="text-xs capitalize">Menu</span>
                </div>
                <div className="rounded-md flex flex-col items-center justify-center w-14 h-14 text-white hover:bg-blue-500 cursor-pointer" title="Order">
                    <HiOutlineShoppingCart className="w-6 h-6" />
                    <span className="text-xs capitalize">Order</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
