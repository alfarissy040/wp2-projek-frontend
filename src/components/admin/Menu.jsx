import { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import { useDispatch, useSelector } from "react-redux";
import AdminModalDetail from "./AdminModalDetail";
import { AnimatePresence, motion } from "framer-motion";
import LoadingAdminMenuList from "./loading/LoadingAdminMenuList";
import axios from "axios";
import AddMenu from "./AddMenu";
import { showadminMenuStatus } from "../../features/ModalSlice";
import Dialog from "./Dialog";
import { MdSort, MdCheck } from "react-icons/md";

const Menu = () => {
    const [searchValue, setSearchValue] = useState("");
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortProperty, setSortProperty] = useState("name");
    const [sortStatus, setSortStatus] = useState(false);

    const modalStatus = useSelector(({ modal }) => modal.adminStatus);
    const adminMenuStatus = useSelector(({ modal }) => modal.adminMenuStatus);
    const dialogStatus = useSelector(({ dialog }) => dialog.status);
    const dispatch = useDispatch();

    const handleChangeSortProperty = (sort) => {
        setSortProperty(sort);
        setSortStatus(false);
    };

    useEffect(() => {
        setLoading(true);
        axios.get(baseUrl + "menus").then((res) => {
            setLoading(false);
            setMenus(res.data.data);
        });
    }, [baseUrl]);

    return (
        <Fragment>
            <div className="flex items-center justify-between sticky top-0 bg-[#e3e0f3] z-40">
                <Header label="Menu" />
                <button className="px-3 py-2 rounded text-white bg-emerald-500 hover:bg-emerald-600 mr-3" onClick={() => dispatch(showadminMenuStatus(true))}>
                    Tambah menu
                </button>
            </div>
            {/* search */}
            <div className="px-3 py-2 flex items-center gap-x-3">
                {/* sort button */}
                <div className="relative">
                    <div className="p-2 rounded-full hover:bg-zinc-300 cursor-pointer" title="Sort By" onClick={() => setSortStatus(!sortStatus)}>
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
                        {menus
                            .sort((a, b) => (sortProperty === "name" ? a.name > b.name : parseInt(a.price) > parseInt(b.price)))
                            .filter((item) => {
                                return item.name.toLowerCase().includes(searchValue.toLowerCase());
                            })
                            .map((item) => (
                                <motion.li key={item.id} layout>
                                    <MenuList name={item.name} image={baseUrl + item.image} price={item.price} id={item.id} />
                                </motion.li>
                            ))}
                    </AnimatePresence>
                )}
            </ul>
            {modalStatus && <AdminModalDetail />}
            <AnimatePresence>{adminMenuStatus && <AddMenu />}</AnimatePresence>
            <AnimatePresence>{dialogStatus && <Dialog />}</AnimatePresence>
        </Fragment>
    );
};

export default Menu;
