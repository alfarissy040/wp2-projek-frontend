import { Fragment, useEffect, useState } from "react";
import { FaHandHoldingUsd, FaUtensils } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import Header from "./Header";
import DashboardCard from "./DashboardCard";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingDashboardCard from "./loading/LoadingDashboardCard";

const Dashboard = () => {
    const [popularMenu, setPopularMenu] = useState([]);
    const [dashboardMenu, setDashboardMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });

    useEffect(() => {
        setLoading(true);
        axios.get(baseUrl + "dashboard").then((res) => {
            setDashboardMenu(res.data);
        });
        axios.get(baseUrl + "menus/popular").then((res) => {
            setPopularMenu(res.data);
            setLoading(false);
        });
    }, [baseUrl]);
    return (
        <Fragment>
            <Header label="Dashboard" />
            <div className="flex items-center px-3 py-2 gap-x-3">
                {loading ? (
                    <Fragment>
                        <LoadingDashboardCard />
                        <LoadingDashboardCard />
                        <LoadingDashboardCard />
                    </Fragment>
                ) : (
                    <Fragment>
                        <DashboardCard label={"Sold"} icon={<BsArrowLeftRight />} count={dashboardMenu.sold} />
                        <DashboardCard label={"Menus"} icon={<FaUtensils />} count={dashboardMenu.total_menu} />
                        <DashboardCard label={"Amount"} icon={<FaHandHoldingUsd />} count={formatter.format(parseInt(dashboardMenu.amount))} />
                    </Fragment>
                )}
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
                        {popularMenu.map((item, index) => (
                            <tr className="bg-zinc-100 border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                <td className="px-6 py-4">{index + 1}</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">{formatter.format(parseInt(item.price))}</td>
                                <td className="px-6 py-4">{item.sold > 0 ? item.sold : 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default Dashboard;
