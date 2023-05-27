import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const CurrentOrder = () => {
    const items = useSelector(({ cart }) => cart.cart);
    return (
        <div className="w-full h-screen max-w-sm sticky top-0 p-2">
            <div className="w-full h-full rounded-md shadow border border-zinc-300 px-3 py-2">
                {/* title */}
                <h2 className="text-2xl font-bold">Current Order</h2>
                {/* cart section */}
                <div className="flex flex-col py-3 pr-2 overflow-y-auto flex-1 h-full scrollbar-thin">
                    {/* card */}
                    {items.map((item) => (
                        <CartCard key={item.id} id={item.id} nama={item.nama} harga={item.harga} quantity={item.quantity} />
                    ))}
                </div>
                {/* total */}
            </div>
        </div>
    );
};

export default CurrentOrder;
