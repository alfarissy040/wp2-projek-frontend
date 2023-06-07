import { Fragment, useState } from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import AdminModalDetail from "./AdminModalDetail";
import { dummy } from "../../dumy";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
    const modalStatus = useSelector(({ modal }) => modal.adminStatus);
    const [searchValue, setSearchValue] = useState("");
    return (
        <Fragment>
            <Header label="Menu" btn={<ButtonTambah />} />
            {/* search */}
            <div className="px-3 py-2">
                <input type="search" name="search" id="search" className="w-full px-3 py-2 bg-white rounded-lg outline-none border border-zinc-200 shadow-md" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <ul className="px-3 py-2 gap-3 grid grid-cols-2">
                <AnimatePresence mode="popLayout">
                    {dummy
                        .filter((item) => {
                            return item.name.toLowerCase().includes(searchValue.toLowerCase());
                        })
                        .map((item) => (
                            <motion.li key={item.id} layout>
                                <MenuList name={item.name} image={item.image} price={item.price} id={item.id} />
                            </motion.li>
                        ))}
                </AnimatePresence>
            </ul>
            {modalStatus && <AdminModalDetail />}
        </Fragment>
    );
};

const ButtonTambah = () => <button className="px-3 py-2 rounded text-white bg-emerald-500 hover:bg-emerald-600">Tambah menu</button>;

export default Menu;
