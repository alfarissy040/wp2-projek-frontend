import React, { Suspense, useState } from "react";
import { dummy } from "./dumy";
import { HiOutlineListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import CurrentOrder from "./components/CurrentOrder";
import { useSelector } from "react-redux";
import LoadingMenuCard from "./components/loading/LoadingMenuCard";
import LoadingMenuList from "./components/loading/LoadingMenuList";
import LoadingModalDetail from "./components/loading/LoadingModalDetail";

const MenuGrid = React.lazy(() => import("./components/MenuCard"));
const MenuList = React.lazy(() => import("./components/MenuList"));
const ModalDetail = React.lazy(() => import("./components/ModalDetail"));

const App = () => {
    const dataDumy = dummy;
    const [searchValue, setSearchValue] = useState("");
    const [menuMode, setMenuMode] = useState("grid");
    const modalStatus = useSelector(({ modal }) => modal.status);
    return (
        <div className="flex flex-1 gap-x-3">
            {/* main content */}
            <div className="w-full flex-1 h-auto">
                {/* header */}
                <header className="flex items-center gap-x-3">
                    {/* searchbar */}
                    <div className="flex-1 w-full flex items-center justify-end gap-3">
                        <input type="search" name="search" id="search" className="w-full px-3 py-2 bg-white rounded-lg outline-none border border-zinc-200" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
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
                            return item.name.toLowerCase().includes(searchValue.toLowerCase());
                        })
                        .map((item) =>
                            menuMode === "grid" ? (
                                <Suspense key={item.id} fallback={<LoadingMenuCard />}>
                                    <MenuGrid id={item.id} name={item.name} price={item.price} quantities={item.quantities} />
                                </Suspense>
                            ) : (
                                <Suspense key={item.id} fallback={<LoadingMenuList />}>
                                    <MenuList id={item.id} name={item.name} price={item.price} quantities={item.quantities} />
                                </Suspense>
                            )
                        )}
                </div>
            </div>
            {/* // <LoadingModalDetail /> */}
            {/* order section */}
            <CurrentOrder />
            {modalStatus && (
                <Suspense fallback={<LoadingModalDetail />}>
                    <ModalDetail />
                </Suspense>
            )}
        </div>
    );
};

export default App;
