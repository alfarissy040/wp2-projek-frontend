import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { addOrder } from "../features/OrderSlice";

const CurrentOrder = () => {
    const items = useSelector(({ order }) => order.cart);
    const total = useSelector(({ order }) => order.cartSubTotal);
    const dispatch = useDispatch();

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });
    return (
        <div className="w-full h-[calc(100dvh-16px)] max-w-[350px] sticky top-0 bg-white rounded-md shadow overflow-hidden">
            <div className="w-full h-full px-3 py-2 flex flex-col">
                {/* title */}
                <h2 className="text-2xl font-bold">Current Order</h2>
                <div className="flex-1 flex flex-col">
                    {/* cart section */}
                    <div className="flex flex-col pt-3 pr-2 overflow-y-auto flex-1 scrollbar-thin">
                        {/* card */}
                        {items.map((item) => (
                            <CartCard key={item.id} id={item.id} name={item.name} price={item.price} quantities={item.quantities} />
                        ))}
                    </div>
                    {/* total */}
                    <div className="bg-white py-3 border-t border-zinc-400">
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Total</p>
                            <p className="text-lg font-bold">{formatter.format(total)}</p>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" onClick={() => dispatch(addOrder(items))}>
                                Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentOrder;
