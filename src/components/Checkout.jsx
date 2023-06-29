import { useDispatch, useSelector } from "react-redux";
import CheckoutTableItem from "./CheckoutTableItem";
import ModalCheckout from "./ModalCheckout";
import { setCheckoutModalStatus } from "../features/ModalSlice";
import { formatter } from "../features/helper";

const Checkout = () => {
    const order = useSelector(({ order }) => order.order);
    const total = useSelector(({ order }) => order.orderSubTotal);
    const modal = useSelector(({ modal }) => modal.checkoutStatus);
    const dispatch = useDispatch();

    return (
        <div className="w-full max-w-4xl h-full mx-auto flex flex-col overflow-hidden rounded-md shadow-md">
            {/* main content */}
            <div className=" flex-1 w-full bg-white px-3 py-2">
                <h1 className="font-bold text-2xl">My Order</h1>
                <div className="w-full h-full overflow-y-auto scrollbar-thin py-2 mt-2">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-zinc-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Menu
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.map((item, index) => (
                                    <CheckoutTableItem id={item.id} name={item.name} price={item.price} quantities={item.quantities} date={item.date} key={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* <CheckoutListItem /> */}
                </div>
            </div>
            {/* footer */}
            <div className="w-full bg-white p-3 border-t border-zinc-400">
                <div className="flex items-center justify-between">
                    <p className="font-bold">Total</p>
                    <p className="text-lg font-bold">{formatter.format(total)}</p>
                </div>
                <div className="flex justify-end mt-2">
                    <button className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" onClick={() => dispatch(setCheckoutModalStatus(true))}>
                        Checkout
                    </button>
                </div>
            </div>
            {modal && <ModalCheckout />}
        </div>
    );
};

export default Checkout;
