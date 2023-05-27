import { useDispatch } from "react-redux";
import { addQuantity, removeQuantity } from "../features/CartSlice";
import { PropTypes } from "prop-types";

const CartCard = (props) => {
    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
    });
    const dispatch = useDispatch();

    return (
        <div className="flex items-center w-full py-2">
            {/* content */}
            <div className="flex-1 w-full pr-1">
                <h3 className="text-sm">{props.nama}</h3>
                <p className="text-lg font-semibold">{formatter.format(props.harga)}</p>
            </div>
            {/* action */}
            <div className="flex items-center h-auto w-auto">
                <button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white hover:bg-blue-600 rounded-md" onClick={() => dispatch(removeQuantity(props.id))}>
                    -
                </button>
                <p className="w-10 h-full text-center">{props.quantity}</p>
                <button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white hover:bg-blue-600 rounded-md" onClick={() => dispatch(addQuantity(props.id))}>
                    +
                </button>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    id: PropTypes.number.isRequired,
    nama: PropTypes.string.isRequired,
    harga: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default CartCard;
