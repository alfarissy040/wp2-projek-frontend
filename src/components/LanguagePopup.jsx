import { useEffect, useRef } from "react";
import { MdCheck } from "react-icons/md";

const LanguagePopup = ({ handleClose, refLanguageToggle, handleChangeLanguage, currentLanguage }) => {
    const popup = useRef();
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popup]);
    function handleClickOutside(e) {
        console.log();
        if (popup.current && !popup.current.contains(event.target) && !refLanguageToggle.contains(e.target)) {
            handleClose();
        }
    }
    return (
        <ul className="absolute bg-white w-28 rounded-lg shadow-md right-0 overflow-clip" ref={popup}>
            <li className="px-3 py-2 hover:bg-zinc-200 flex items-center cursor-pointer" onClick={() => handleChangeLanguage("id")}>
                <span className="flex-1 w-full">id</span>
                {currentLanguage == "id" ? <MdCheck className="w-5 h-5" /> : null}
            </li>
            <li className="px-3 py-2 hover:bg-zinc-200 flex items-center cursor-pointer" onClick={() => handleChangeLanguage("en")}>
                <span className="flex-1 w-full">en</span>
                {currentLanguage == "en" ? <MdCheck className="w-5 h-5" /> : null}
            </li>
        </ul>
    );
};

export default LanguagePopup;
