import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/OrderSlice";
import { PropTypes } from "prop-types";
import { showModal } from "../features/ModalSlice";
import { memo, useState } from "react";
import { formatter } from "../features/helper";

const MenuGrid = (props) => {
    const [imageLoading, setImageLoading] = useState(true);
    const dispatch = useDispatch();

    return (
        <div className="w-full flex flex-col h-auto flex-1 rounded-lg shadow-md overflow-hidden border border-transparent bg-white">
            {/* image */}
            <div className="w-full aspect-[4/3] flex items-center justify-center">
                <img src={props.image} onLoad={() => setImageLoading(false)} className={`w-full h-full object-cover ${imageLoading ? "animate-pulse" : null}`} loading="lazy" />
            </div>
            {/* content */}
            <div className="px-3 py-2 flex flex-col flex-1">
                <div className="flex-1">
                    <h3 className="text-sm font-medium">{props.name}</h3>
                    <p className="font-semibold text-lg">{formatter.format(props.price)}</p>
                </div>
                <div className="flex items-center gap-x-2 mt-3 h-fit">
                    <button
                        className={`px-2 py-1 rounded text-sm flex-1 transition-all border border-blue-500 ${props.isSelected ? "text-white bg-blue-500" : "text-blue-500  bg-white hover:bg-blue-500 hover:text-white"}`}
                        onClick={() => (props.isSelected ? dispatch(removeFromCart(props)) : dispatch(addToCart(props)))}
                    >
                        {props.isSelected ? "Remove from cart" : "Add to cart"}
                    </button>
                    <button
                        className={`px-2 py-1 rounded text-blue-500 border border-blue-500 bg-white text-sm hover:bg-blue-500 hover:text-white transition-colors  ${props.isSelected ? null : "flex-1"}`}
                        onClick={() => dispatch(showModal(props.id))}
                    >
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
};
MenuGrid.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default memo(MenuGrid);
