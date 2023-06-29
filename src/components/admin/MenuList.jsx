import { memo, useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import { HiDotsVertical } from "react-icons/hi";
import { showAdminModal, showadminModalEdit } from "../../features/ModalSlice";
import { useDispatch } from "react-redux";
import { formatter } from "../../features/helper";

const MenuList = (props) => {
    const [showTools, setShowTools] = useState(false);
    const tools = useRef();
    const toggleBtn = useRef();

    const dispatch = useDispatch();

    const handleShowDetail = () => {
        setShowTools(false);
        dispatch(showAdminModal(props.id));
    };

    const handleEditMenu = () => {
        setShowTools(false);
        dispatch(showadminModalEdit(props.data));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (tools.current && !tools.current.contains(e.target) && !toggleBtn.current.contains(e.target)) {
                setShowTools(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [tools, toggleBtn]);

    return (
        <div className="flex-1 w-full h-auto rounded-lg shadow-md bg-white">
            <div className="flex items-center gap-x-3 w-full h-20">
                {/* image */}
                <div className="h-full aspect-[4/3] rounded-tl-lg rounded-bl-lg overflow-hidden">
                    <img src={props.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    {/* judul */}
                    <h2 className="text-lg font-semibold">{props.name}</h2>
                    {/* harga */}
                    <p className="font-bold">{formatter.format(props.price)}</p>
                </div>
                {/* more */}
                <div className="relative">
                    <button className="p-2 mx-3 rounded-full hover:bg-zinc-100" onClick={() => setShowTools(!showTools)} ref={toggleBtn}>
                        <HiDotsVertical className="w-5 h-5 text-zinc-500" />
                    </button>
                    {showTools && (
                        <div className="origin-top-right bg-white border border-zinc-200 rounded shadow-lg absolute top-9 right-6 w-32 z-20" ref={tools}>
                            <button className="px-3 py-2 border-b border-zinc-300 hover:bg-zinc-100 flex-1 w-full" onClick={handleShowDetail}>
                                Show
                            </button>
                            <button className="px-3 py-2 hover:bg-zinc-100 flex-1 w-full" onClick={handleEditMenu}>
                                Edit
                            </button>
                            <button className="px-3 py-2 hover:bg-zinc-100 flex-1 w-full">Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

MenuList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export default memo(MenuList);
