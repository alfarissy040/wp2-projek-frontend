import { useState } from "react";
import MenuCard from "./components/MenuCard";
import { dummy } from "./dumy";
import Sidebar from "./components/Sidebar";
import { HiOutlineListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import Order from "./components/CurrentOrder";

const App = () => {
    const dataDumy = dummy;
    const [searchValue, setSearchValue] = useState("");
    return (
        <main className="w-full h-screen flex overflow-hidden overflow-y-auto divide-x-2 divide-zinc-200">
            {/* sidebar */}
            <Sidebar />
            {/* main content */}
            <div className="w-full flex-1 h-auto p-3">
                {/* header */}
                <header className="flex items-center gap-x-3">
                    <h1 className="text-2xl font-bold">Restaurant</h1>
                    {/* searchbar */}
                    <div className="flex-1 w-full flex items-center justify-end gap-3">
                        <input type="search" name="search" id="search" className="w-full max-w-lg px-3 py-2 bg-white rounded-lg outline-none border border-zinc-200" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
                        {/* card item */}
                        {/* active */}
                        <div className="p-2 border border-transparent bg-blue-500 text-white rounded-md cursor-pointer">
                            <HiOutlineSquares2X2 className="w-6 h-6" />
                        </div>
                        {/* list item */}
                        <div className="p-2 border border-zinc-200 rounded-md cursor-pointer">
                            <HiOutlineListBullet className="w-6 h-6" />
                        </div>
                    </div>
                </header>
                {/* card container */}
                <div className="grid grid-cols-4 w-full gap-3 py-3">
                    {/* card */}
                    {dataDumy
                        .filter((item) => {
                            return item.nama.toLowerCase().includes(searchValue.toLowerCase());
                        })
                        .map((item) => (
                            <MenuCard key={item.id} props={item} />
                        ))}
                </div>
            </div>
            {/* order section */}
            <Order />
        </main>
    );
};

export default App;
