import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import { useDispatch, useSelector } from "react-redux";
import AdminModalDetail from "./AdminModalDetail";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import LoadingAdminMenuList from "./loading/LoadingAdminMenuList";
import AddMenu from "./AddMenu";
import { setadminMenuStatus } from "../../features/ModalSlice";
import Dialog from "./Dialog";
import { MdSort, MdCheck } from "react-icons/md";
import EditMenu from "./EditMenu";
import { getMenus } from "../../features/AdminSlice";

const Menu = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [searchValue, setSearchValue] = useState("");

    const [sortProperty, setSortProperty] = useState("name");
    const [sortStatus, setSortStatus] = useState(false);
    const toggleSortMenu = useCallback(
        (action) => {
            if (action) {
                setSortStatus(action);
            } else {
                setSortStatus(!sortStatus);
            }
        },
        [sortStatus]
    );

    const modalStatus = useSelector(({ modal }) => modal.adminStatus);
    const adminMenuStatus = useSelector(({ modal }) => modal.adminMenuStatus);
    const adminModalEditStatus = useSelector(({ modal }) => modal.adminModalEditStatus);
    const dialogStatus = useSelector(({ dialog }) => dialog.status);
    const menus = useSelector(({ admin }) => admin.menus.data);
    const loading = useSelector(({ admin }) => admin.menus.loading);
    const dispatch = useDispatch();

    const sortedMenus = useMemo(() => [...menus].sort((a, b) => (sortProperty === "name" ? a.name > b.name : parseInt(a.price) > parseInt(b.price))), [menus, sortProperty]);

    const filteredMenus = useMemo(
        () =>
            sortedMenus.filter((item) => {
                return item.name.toLowerCase().includes(searchValue.toLowerCase());
            }),
        [sortedMenus, searchValue]
    );

    const handleChangeSortProperty = (sort) => {
        setSortProperty(sort);
        toggleSortMenu(false);
    };

    useEffect(() => {
        dispatch(getMenus());

        setInterval(() => {
            dispatch(getMenus());
        }, 30000);
    }, []);

    return (
        <Fragment>
            <div className="flex items-center justify-between sticky top-0 bg-[#e3e0f3] z-40">
                <Header label="Menus" />
                <button className="px-3 py-2 rounded text-white bg-emerald-500 hover:bg-emerald-600 mr-3" onClick={() => dispatch(setadminMenuStatus(true))}>
                    Add menu
                </button>
            </div>
            {/* search */}
            <div className="px-3 py-2 flex items-center gap-x-3">
                {/* sort button */}
                <div className="relative">
                    <div className="p-2 rounded-full hover:bg-zinc-300 cursor-pointer" title="Sort By" onClick={() => toggleSortMenu()}>
                        <MdSort className="w-6 h-6" />
                    </div>
                    <AnimatePresence>
                        {sortStatus && (
                            <motion.ul
                                className="absolute left-9 top-0 origin-top-left rounded-md shadow-md bg-white border border-zinc-200 w-44 z-20"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                            >
                                <li className="px-3 py-2 w-full bg-white hover:bg-zinc-200 cursor-pointer flex items-center justify-between" onClick={() => handleChangeSortProperty("name")}>
                                    <p>Name</p>
                                    {sortProperty === "name" && (
                                        <span>
                                            <MdCheck />
                                        </span>
                                    )}
                                </li>
                                <li className="px-3 py-2 w-full bg-white hover:bg-zinc-200 cursor-pointer flex items-center justify-between" onClick={() => handleChangeSortProperty("price")}>
                                    <p>Price</p>
                                    {sortProperty === "price" && (
                                        <span>
                                            <MdCheck />
                                        </span>
                                    )}
                                </li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
                {/* search input */}
                <input type="search" name="search" id="search" className="w-full px-3 py-2 bg-white rounded-lg outline-none border border-zinc-200 shadow-md" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <ul className="px-3 py-2 gap-3 grid grid-cols-2">
                {loading ? (
                    <Fragment>
                        <LoadingAdminMenuList />
                        <LoadingAdminMenuList />
                        <LoadingAdminMenuList />
                        <LoadingAdminMenuList />
                    </Fragment>
                ) : (
                    <AnimatePresence mode="popLayout">
                        {filteredMenus.map((item) => (
                            <motion.li key={item.id} layout>
                                <MenuList
                                    name={item.name}
                                    image={`${baseUrl}${item.image}`}
                                    price={parseInt(item.price)}
                                    id={item.id}
                                    data={{
                                        id: item.id,
                                        name: item.name,
                                        image: `${baseUrl}${item.image}`,
                                        price: parseInt(item.price),
                                        description: item.description,
                                    }}
                                />
                            </motion.li>
                        ))}
                    </AnimatePresence>
                )}
            </ul>
            <AnimatePresence mode="wait">
                <LayoutGroup>
                    {modalStatus && <AdminModalDetail />}
                    {adminMenuStatus && <AddMenu />}
                    {adminModalEditStatus && <EditMenu />}
                </LayoutGroup>
                {dialogStatus && <Dialog />}
            </AnimatePresence>
        </Fragment>
    );
};

export default Menu;
