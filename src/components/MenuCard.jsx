import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const MenuCard = (props) => {
    const dispatch = useDispatch();
    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
    });
    return (
        <div className="w-full h-auto flex-1 rounded-lg shadow-md overflow-hidden border border-transparent bg-white hover:bg-blue-100 hover:border-blue-600 cursor-pointer" onClick={() => dispatch(addToCart(props.props))}>
            {/* image */}
            <div className="w-full aspect-[4/3] flex items-center justify-center">
                <img src={`https://source.unsplash.com/random/480x360/?${props.props.nama}`} alt="" className="w-full h-full object-contain" loading="lazy" />
            </div>
            {/* content */}
            <div className="px-3 py-2">
                <h3>{props.props.nama}</h3>
                <p className="font-semibold text-lg">{formatter.format(props.props.harga)}</p>
            </div>
        </div>
    );
};

export default MenuCard;
