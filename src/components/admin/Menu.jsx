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

const Menu = () => {
    const [searchValue, setSearchValue] = useState("");
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    const modalStatus = useSelector(({ modal }) => modal.adminStatus);
    const adminMenuStatus = useSelector(({ modal }) => modal.adminMenuStatus);
    const dialogStatus = useSelector(({ dialog }) => dialog.status);
    const dispatch = useDispatch();

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
            <div className="px-3 py-2">
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
