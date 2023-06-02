import { useDispatch } from "react-redux";
import { addQuantities, removeQuantities } from "../features/OrderSlice";
import { PropTypes } from "prop-types";

const CartCard = (props) => {
    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });
    const dispatch = useDispatch();

    return (
        <div className="flex items-center w-full py-2 bg-white">
            {/* content */}
            <div className="flex-1 w-full pr-1">
                <h3 className="text-sm">{props.name}</h3>
                <p className="text-lg font-semibold">{formatter.format(props.price)}</p>
            </div>
            {/* action */}
            <div className="flex items-center h-auto w-auto">
                <button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white hover:bg-blue-600 rounded-md" onClick={() => dispatch(removeQuantities(props.id))}>
                    -
                </button>
                <p className="w-10 h-full text-center">{props.quantities}</p>
                <button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white hover:bg-blue-600 rounded-md" onClick={() => dispatch(addQuantities(props.id))}>
                    +
                </button>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantities: PropTypes.number.isRequired,
};

export default CartCard;
