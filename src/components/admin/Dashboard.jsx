import { Fragment } from "react";
import { FaHandHoldingUsd, FaUtensils } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import Header from "./Header";
import DashboardCard from "./DashboardCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <Fragment>
            <Header label="Dashboard" />
            <div className="flex items-center px-3 py-2 gap-x-3">
                <DashboardCard label={"Total Order"} icon={<BsArrowLeftRight />} count={123} />
                <DashboardCard label={"Total Order"} icon={<FaUtensils />} count={123} />
                <DashboardCard label={"Total Order"} icon={<FaHandHoldingUsd />} count={123} />
            </div>
            <div className="relative px-3 py-2">
                <div className="py-3 flex items-center justify-between">
                    <h2 className="font-semibold text-lg">Popular Menu</h2>
                    <Link to={"/admin/menu"} className="px-3 py-2 text-white bg-emerald-500 hover:bg-emerald-600 rounded">
                        Semua Menu
                    </Link>
                </div>
                <table className="w-full text-sm text-left text-gray-500 rounded-md overflow-clip">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-white">
                        <tr>
                            <th scope="col" className="p-3">
                                Rank
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Beli
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-zinc-100 border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">1</td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">222</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default Dashboard;
