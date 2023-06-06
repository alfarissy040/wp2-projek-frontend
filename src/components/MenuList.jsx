import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/OrderSlice";
import { PropTypes } from "prop-types";
import { showModal } from "../features/ModalSlice";
import { useState } from "react";

const MenuList = (props) => {
    const [imageLoading, setImageLoading] = useState(true);
    const dispatch = useDispatch();

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });
    return (
        <div className="w-full h-20 flex items-center flex-1 rounded-lg shadow-md overflow-hidden border border-transparent bg-white">
            {/* image */}
            <div className="h-full aspect-[4/3] flex items-center justify-center">
                <img src={props.image} onLoad={() => setImageLoading(false)} className={`w-full h-full object-cover ${imageLoading ? "animate-pulse" : null}`} loading="lazy" />
            </div>
            {/* content */}
            <div className="px-3 py-2 flex items-center gap-x-3 flex-1 justify-between">
                <div className="w-auto">
                    <h3 className="text-sm font-medium">{props.name}</h3>
                    <p className="font-semibold text-lg">{formatter.format(props.price)}</p>
                </div>
                <div className="flex items-center gap-x-2">
                    <button
                        className={`px-3 py-2 rounded border border-blue-500  ${props.isSelected ? "text-white bg-blue-500" : "text-blue-500  bg-white hover:bg-blue-500 hover:text-white"}`}
                        onClick={() => (props.isSelected ? dispatch(removeFromCart(props)) : dispatch(addToCart(props)))}
                    >
                        {props.isSelected ? "Remove from cart" : "Add to cart"}
                    </button>
                    <button className="px-3 py-2 rounded text-blue-500 border border-blue-500 bg-white text-sm flex-1 hover:bg-blue-500 hover:text-white transition-colors" onClick={() => dispatch(showModal(props.id))}>
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
};
MenuList.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default MenuList;
