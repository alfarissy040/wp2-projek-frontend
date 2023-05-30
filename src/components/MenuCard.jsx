import { useDispatch } from "react-redux";
import { addToCart } from "../features/OrderSlice";
import { PropTypes } from "prop-types";
import { showModal } from "../features/ModalSlice";

const MenuCard = (props) => {
    const dispatch = useDispatch();
    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });

    return (
        <div className="w-full flex flex-col h-auto flex-1 rounded-lg shadow-md overflow-hidden border border-transparent bg-white">
            {/* image */}
            <div className="w-full aspect-[4/3] flex items-center justify-center">
                <img src={`https://source.unsplash.com/random/480x360/?${props.name}`} alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
            {/* content */}
            <div className="px-3 py-2 flex flex-col flex-1">
                <div className="flex-1">
                    <h3 className="text-sm font-medium">{props.name}</h3>
                    <p className="font-semibold text-lg">{formatter.format(props.price)}</p>
                </div>
                <div className="flex items-center gap-x-2 mt-3 h-fit">
                    <button className="px-2 py-1 rounded text-blue-500 border border-blue-500 bg-white text-sm flex-1 hover:bg-blue-500 hover:text-white transition-colors" onClick={() => dispatch(addToCart(props))}>
                        Add to cart
                    </button>
                    <button className="px-2 py-1 rounded text-blue-500 border border-blue-500 bg-white text-sm flex-1 hover:bg-blue-500 hover:text-white transition-colors" onClick={() => dispatch(showModal(props.id))}>
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
};
MenuCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default MenuCard;
