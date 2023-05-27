import React, { Suspense, useState } from "react";
import { dummy } from "./dumy";
import Sidebar from "./components/Sidebar";
import { HiOutlineListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import CurrentOrder from "./components/CurrentOrder";
import { useSelector } from "react-redux";

const MenuGrid = React.lazy(() => import("./components/MenuCard"));
const MenuList = React.lazy(() => import("./components/MenuList"));
const Modal = React.lazy(() => import("./components/Modal"));

const App = () => {
    const dataDumy = dummy;
    const [searchValue, setSearchValue] = useState("");
    const [menuMode, setMenuMode] = useState("grid");
    const modalStatus = useSelector(({ modal }) => modal.status);
    return (
        <main className="w-full h-screen flex overflow-hidden overflow-y-auto ">
            {/* sidebar */}
            <Sidebar />
            {/* main content */}
            <div className="w-full flex-1 h-auto p-3">
                {/* header */}
                <header className="flex items-center gap-x-3">
                    {/* searchbar */}
                    <div className="flex-1 w-full flex items-center justify-end gap-3">
                        <input type="search" name="search" id="search" className="w-full max-w-lg px-3 py-2 bg-white rounded-lg outline-none border border-zinc-200" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
                        {/* card item */}
                        {/* active */}
                        <div className={`p-2 border rounded-md cursor-pointer transition-colors ${menuMode === "grid" ? "bg-blue-500 text-white border-transparent" : "bg-white text-black border-zinc-200"}`}>
                            <HiOutlineSquares2X2 className="w-6 h-6" onClick={() => setMenuMode("grid")} />
                        </div>
                        {/* list item */}
                        <div className={`p-2 border rounded-md cursor-pointer transition-colors ${menuMode === "list" ? "bg-blue-500 text-white border-transparent" : "bg-white text-black border-zinc-200"}`}>
                            <HiOutlineListBullet className="w-6 h-6" onClick={() => setMenuMode("list")} />
                        </div>
                    </div>
                </header>
                {/* card container */}
                <div className={`grid w-full gap-3 py-3 ${menuMode === "grid" ? "grid-cols-3" : "grid-cols-1"}`}>
                    {/* card */}
                    {dataDumy
                        .filter((item) => {
                            return item.nama.toLowerCase().includes(searchValue.toLowerCase());
                        })
                        .map((item) =>
                            menuMode === "grid" ? (
                                <Suspense key={item.id} fallback={<div>Loading</div>}>
                                    <MenuGrid id={item.id} nama={item.nama} harga={item.harga} quantity={item.quantity} />
                                </Suspense>
                            ) : (
                                <Suspense key={item.id} fallback={<div>Loading</div>}>
                                    <MenuList id={item.id} nama={item.nama} harga={item.harga} quantity={item.quantity} />
                                </Suspense>
                            )
                        )}
                </div>
            </div>
            {/* order section */}
            <CurrentOrder />
            {modalStatus && (
                <Suspense fallback={<div>Loading</div>}>
                    <Modal />
                </Suspense>
            )}
        </main>
    );
};

export default App;
