import { useSelector } from "react-redux";

const Checkout = () => {
    const order = useSelector(({ order }) => order.order);
    const total = useSelector(({ order }) => order.orderSubTotal);

    console.log(order);

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });
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
                                {order.map((item) => (
                                    <tr className="bg-white border-b" key={item.id}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            {item.name}
                                        </th>
                                        <td className={`px-6 py-4 ${item.status ? "text-blue-500" : "text-rose-500"}`}>{item.status ? "Complete" : "On Process"}</td>
                                        <td className="px-6 py-4">{item.quantities}</td>
                                        <td className="px-6 py-4">{formatter.format(item.price)}</td>
                                    </tr>
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
                    <button className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
