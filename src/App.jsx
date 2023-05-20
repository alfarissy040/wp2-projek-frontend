import { useRef, useState } from "react";
import { MdShoppingCart, MdExpandMore } from "react-icons/md";
import LanguagePopup from "./components/LanguagePopup";
import CartModal from "./components/CartModal";
import MenuCard from "./components/MenuCard";
import { dummy } from "./dumy";
import { useSelector } from "react-redux";

const App = () => {
    const dataDumy = dummy;
    const [cartToggle, setCartToggle] = useState(false);
    const [languageToggle, setLanguageToggle] = useState(false);
    const [language, setLanguage] = useState("id");
    const [searchValue, setSearchValue] = useState("");
    const refLanguageToggle = useRef();

    const cartCount = useSelector((state) => state.cart.cart).length;

    const handleChangeLanguage = (lang) => {
        setLanguage(lang);
    };
    const handleCartToggle = (state) => {
        setCartToggle(state);
    };
    return (
        <main className="w-full h-screen bg-zinc-100">
            <header className="flex items-center justify-between p-3 sticky top-0 bg-zinc-100">
                <h1 className="font-bold text-2xl text-blue-600">Restaurant</h1>
                <div className="flex items-center gap-x-3">
                    {/* shooping cart */}
                    <button className="p-2 rounded-full hover:bg-zinc-200 relative" onClick={() => setCartToggle(!cartToggle)}>
                        {cartCount > 0 && <span className="flex items-center justify-center w-5 h-5 text-xs font-semibold bg-blue-500 text-white rounded-full absolute -top-1 -right-1">{cartCount}</span>}
                        <MdShoppingCart className="h-5 w-5 text-black" />
                    </button>
                    {/* modal Cart */}
                    {cartToggle && <CartModal handleCartToggle={handleCartToggle} />}

                    {/* language selection button */}
                    <div className="relative">
                        <button className="py-1 px-3 flex items-center hover:bg-zinc-200 rounded-md" title="Language" ref={refLanguageToggle} onClick={() => setLanguageToggle(!languageToggle)}>
                            {language}{" "}
                            <span>
                                <MdExpandMore className="h-3 w-3" />
                            </span>
                        </button>
                        {/* language modal */}
                        {languageToggle && <LanguagePopup handleClose={() => setLanguageToggle(false)} refLanguageToggle={refLanguageToggle.current} handleChangeLanguage={handleChangeLanguage} currentLanguage={language} />}
                    </div>
                </div>
            </header>
            <div className="w-full h-auto p-3">
                {/* searchbar */}
                <div className="flex-1 w-full">
                    <input type="search" name="search" id="search" className="w-full px-3 py-2 bg-white rounded-lg outline-none " placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                {/* card container */}
                <div className="grid grid-cols-5 w-full h-full gap-3 py-3">
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
        </main>
    );
};

export default App;
