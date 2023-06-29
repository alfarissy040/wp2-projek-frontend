import { Fragment, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../features/AdminSlice";
import { formatter } from "../../features/helper";

const Transaksi = () => {
    const dispatch = useDispatch();
    const loading = useSelector(({ admin }) => admin.transaction.loading);
    const transaction = useSelector(({ admin }) => admin.transaction.data);

    useEffect(() => {
        dispatch(getTransaction());
    }, []);
    return loading ? (
        "Loading"
    ) : (
        <Fragment>
            <Header label="Transaction" />
            <main className="px-3 py-2 w-full">
                <table className="w-full flex-1 text-sm text-left text-gray-500 rounded-md overflow-clip">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-white">
                        <tr>
                            <th scope="col" className="p-3">
                                Transaction id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...transaction].map((item) => (
                            <tr className="bg-zinc-100 border-b dark:bg-gray-800 dark:border-gray-700" key={item.code_transaction}>
                                <td className="px-6 py-4">{item.code_transaction}</td>
                                <td className="px-6 py-4">{formatter.format(parseInt(item.total_price))}</td>
                                <td className="px-6 py-4 ">
                                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}{" "}
                                    WIB
                                </td>
                                <td className={`px-6 py-4 ${item.status ? "text-emerald-500" : "text-amber-500"}`}>{item.status ? "Success" : "Pending"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </Fragment>
    );
};

export default Transaksi;
