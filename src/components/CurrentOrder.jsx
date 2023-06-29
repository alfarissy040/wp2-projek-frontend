import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { addOrder } from "../features/OrderSlice";
import { AnimatePresence, motion } from "framer-motion";
import { formatter } from "../features/helper";

const CurrentOrder = () => {
    const items = useSelector(({ order }) => order.cart);
    const total = useSelector(({ order }) => order.cartSubTotal);
    const dispatch = useDispatch();

    return (
        <motion.div
            className="w-full h-[calc(100dvh-16px)] max-w-[18rem] sticky top-0 bg-white rounded-md shadow overflow-hidden"
            initial={{ x: 4, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 4, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full h-full px-3 py-2 flex flex-col flex-1">
                {/* title */}
                <h2 className="text-2xl font-bold">Current Order</h2>
                {/* cart section */}
                <ul className="flex flex-col pt-3 pr-2 overflow-y-auto flex-1 h-full scrollbar-thin z-10">
                    <AnimatePresence mode={"popLayout"}>
                        {/* card */}
                        {items.map((item) => (
                            <motion.li key={item.id} layout initial={{ x: -4, opacity: 0, scale: 1 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                                <CartCard id={item.id} name={item.name} price={item.price} quantities={item.quantities > 0 ? item.quantities : 1} />
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
                {/* total */}
                <div className="bg-white py-3 border-t border-zinc-400 h-auto z-20">
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
        </motion.div>
    );
};

export default CurrentOrder;
