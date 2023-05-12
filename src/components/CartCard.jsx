import { useDispatch } from "react-redux";
import { addQuantity, removeQuantity } from "../features/CartSlice";

const CartCard = ({ id, nama, harga, quantity }) => {
    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
    });
    const dispatch = useDispatch();

    return (
        <div className="flex items-center w-full py-2">
            {/* content */}
            <div className="flex-1 w-full pr-1">
                <h3 className="text-sm">{nama}</h3>
                <p className="text-lg font-semibold">{formatter.format(harga)}</p>
            </div>
            {/* action */}
            <div className="flex items-center h-auto w-auto">
                <button className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md" onClick={() => dispatch(removeQuantity(id))}>
                    -
                </button>
                <input type="number" className="w-10 h-full text-center outline-none" inputMode="numeric" value={quantity} />
                <button className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md" onClick={() => dispatch(addQuantity(id))}>
                    +
                </button>
            </div>
        </div>
    );
};

export default CartCard;
