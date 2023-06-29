import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { setModalStatus } from "../features/ModalSlice";
import { PropTypes } from "prop-types";
import { addToCart, removeFromCart } from "../features/OrderSlice";
import { useEffect } from "react";
import LoadingModalDetail from "./loading/LoadingModalDetail";
import { getMenus } from "../features/AdminSlice";
import { formatter } from "../features/helper";

const ModalDetail = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const dataId = useSelector(({ modal }) => modal.dataId);
    const loading = useSelector(({ admin }) => admin.menus.loading);
    const menus = useSelector(({ admin }) => admin.menus.data.filter(({ id }) => id === dataId))[0];
    const cartItems = useSelector(({ order }) => order.cart.filter((item) => item.id === menus.id));
    const dispatch = useDispatch();

    const isSelected = cartItems.length > 0;

    const props = {
        id: menus.id,
        name: menus.name,
        image: menus.image,
        price: parseInt(menus.price),
        description: menus.description,
        quantities: 1,
    };

    useEffect(() => {
        if (menus === null) {
            return dispatch(getMenus());
        }
    }, []);

    return loading ? (
        <LoadingModalDetail />
    ) : (
        <div className="w-full h-screen absolute inset-0 bg-zinc-950 bg-opacity-60 flex items-center justify-center z-50">
            <div className="max-w-5xl w-full max-h-[500px] h-auto flex gap-x-3 bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* Close Button */}
                <div className="absolute top-3 right-2">
                    <HiXMark className="w-7 h-7 text-zinc-700 cursor-pointer" title="Close" onClick={() => dispatch(setModalStatus(false))} />
                </div>
                {/* gambar */}
                <div className="h-[500px] aspect-[4/3] flex items-center justify-center">
                    <img src={baseUrl + menus.image} alt="" className="w-full h-full object-contain" />
                </div>
                {/* content */}
                <div className="pr-3 py-2 overflow-y-auto scrollbar-thin flex flex-col justify-between flex-1 w-full">
                    <div className="flex-1">
                        {/* title */}
                        <h2 className="text-3xl font-medium pr-5">{menus.name}</h2>
                        <p className="font-bold text-xl">{formatter.format(parseInt(menus.price))}</p>
                        {/* deskripsi */}
                        <p className="flex-1 w-full h-auto mt-2">{menus.description}</p>
                    </div>
                    <button
                        className={`px-3 py-2 mb-3 w-full rounded text-sm  border border-blue-500 transition-colors ${isSelected ? "text-white bg-blue-500" : "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"}`}
                        onClick={() => (isSelected ? dispatch(removeFromCart(props)) : dispatch(addToCart(props)))}
                    >
                        {isSelected ? "Remove from cart" : "Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};
ModalDetail.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    quantities: PropTypes.string,
};

export default ModalDetail;
