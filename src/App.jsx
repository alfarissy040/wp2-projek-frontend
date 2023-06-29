import React, { Fragment, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { HiOutlineListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import CurrentOrder from "./components/CurrentOrder";
import { useDispatch, useSelector } from "react-redux";
import LoadingMenuCard from "./components/loading/LoadingMenuCard";
import LoadingMenuList from "./components/loading/LoadingMenuList";
import ModalDetail from "./components/ModalDetail";
import { AnimatePresence, motion } from "framer-motion";
import { getMenus } from "./features/AdminSlice";
import { baseUrl } from "./features/helper";

const MenuGrid = React.lazy(() => import("./components/MenuGrid"));
const MenuList = React.lazy(() => import("./components/MenuList"));

const App = () => {
    const modalStatus = useSelector(({ modal }) => modal.status);
    const cartItems = useSelector(({ order }) => order.cart.map((item) => item.id));
    const menus = useSelector(({ admin }) => admin.menus.data);
    const loading = useSelector(({ admin }) => admin.menus.loading);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");
    const [menuMode, setMenuMode] = useState("grid");
    const menuToggle = useCallback(() => {
        if (menuMode === "grid") {
            setMenuMode("list");
        }
        if (menuMode === "list") {
            setMenuMode("grid");
        }
    }, [menuMode]);

    const filteredMenu = useMemo(
        () =>
            menus.filter((item) => {
                return item.name.toLowerCase().includes(searchValue.toLowerCase());
            }),
        [menus, searchValue]
    );

    const LoadingMenu = () => {
        if (menuMode === "grid") {
            return <LoadingMenuCard />;
        } else {
            return <LoadingMenuList />;
        }
    };

    useEffect(() => {
        dispatch(getMenus());
        setInterval(() => {
            dispatch(getMenus());
        }, 30000);
    }, []);

    return (
        <div className="flex flex-1 gap-x-3">
            {/* main content */}
            <div className="w-full flex-1 h-auto">
                {/* header */}
                <motion.header className="flex items-center gap-x-3" initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -5, opacity: 0 }} transition={{ duration: 0.5 }}>
                    {/* searchbar */}
                    <div className="flex-1 w-full flex items-center justify-end gap-3">
                        <input type="search" name="search" id="search" className="w-full px-3 py-2 bg-white rounded-lg outline-none border border-zinc-200" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
                        {/* card item */}
                        {/* active */}
                        <div className={`p-2 border rounded-md cursor-pointer transition-colors ${menuMode === "grid" ? "bg-blue-500 text-white border-transparent" : "bg-white text-black border-zinc-200"}`}>
                            <HiOutlineSquares2X2 className="w-6 h-6" onClick={() => menuToggle()} />
                        </div>
                        {/* list item */}
                        <div className={`p-2 border rounded-md cursor-pointer transition-colors ${menuMode === "list" ? "bg-blue-500 text-white border-transparent" : "bg-white text-black border-zinc-200"}`}>
                            <HiOutlineListBullet className="w-6 h-6" onClick={() => menuToggle()} />
                        </div>
                    </div>
                </motion.header>
                {/* card container */}
                <ul className={`grid w-full gap-3 py-3 ${menuMode === "grid" ? "grid-cols-3" : "grid-cols-1"}`}>
                    {/* card */}
                    <AnimatePresence mode="popLayout">
                        {loading ? (
                            <Fragment>
                                <LoadingMenu />
                                <LoadingMenu />
                                <LoadingMenu />
                            </Fragment>
                        ) : (
                            filteredMenu.map((item) =>
                                menuMode === "grid" ? (
                                    <Suspense key={item.id} fallback={<LoadingMenuCard />}>
                                        <motion.li className="h-auto flex flex-col flex-1" layout initial={{ opacity: 0, scale: "95%" }} animate={{ opacity: 1, scale: "100%" }}>
                                            <MenuGrid id={item.id} name={item.name} image={baseUrl + item.image} price={parseInt(item.price)} quantities={1} isSelected={cartItems.includes(item.id)} />
                                        </motion.li>
                                    </Suspense>
                                ) : (
                                    <Suspense key={item.id} fallback={<LoadingMenuList />}>
                                        <motion.li layout initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
                                            <MenuList id={item.id} name={item.name} image={baseUrl + item.image} price={parseInt(item.price)} quantities={1} isSelected={cartItems.includes(item.id)} />
                                        </motion.li>
                                    </Suspense>
                                )
                            )
                        )}
                    </AnimatePresence>
                </ul>
            </div>
            {/* // <LoadingModalDetail /> */}
            {/* order section */}
            <CurrentOrder />
            {modalStatus && <ModalDetail />}
        </div>
    );
};

export default App;
