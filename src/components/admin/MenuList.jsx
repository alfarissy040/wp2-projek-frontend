import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const MenuList = () => {
    const [isDetail, setIsDetail] = useState(false);
    return (
        <div className="w-full h-auto rounded-lg overflow-hidden shadow-md bg-white">
            <div className="flex items-center gap-x-3 w-full h-20 ">
                {/* image */}
                <div className="h-full aspect-[4/3]">
                    <img src="https://source.unsplash.com/random/480x360/?jelly" alt="" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                    {/* judul */}
                    <h2 className="text-lg font-semibold">Jelly</h2>
                    {/* harga */}
                    <p className="font-bold">Rp. 1000</p>
                </div>
                {/* more */}
                <button className="p-2 mx-3 rounded-full hover:bg-zinc-100">
                    <HiOutlineChevronDown className="w-5 h-5 text-zinc-500" />
                </button>
            </div>
        </div>
    );
};

export default MenuList;
