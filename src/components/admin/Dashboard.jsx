import { Fragment, useEffect } from "react";
import { FaHandHoldingUsd, FaUtensils } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import Header from "./Header";
import DashboardCard from "./DashboardCard";
import { Link } from "react-router-dom";
import LoadingDashboardCard from "./loading/LoadingDashboardCard";
import { getDashboard, getPopularMenu } from "../../features/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatter } from "../../features/helper";

const Dashboard = () => {
    const dashboardData = useSelector(({ admin }) => admin.dashboard.data);
    const dashboardLoading = useSelector(({ admin }) => admin.dashboard.loading);
    const popularMenu = useSelector(({ admin }) => admin.popularMenus.data);
    const popularMenuLoading = useSelector(({ admin }) => admin.popularMenus.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDashboard());
        dispatch(getPopularMenu());

        setInterval(() => {
            dispatch(getDashboard());
            dispatch(getPopularMenu());
        }, 30000);
    }, []);
    return (
        <Fragment>
            <Header label="Dashboard" />
            <div className="flex items-center px-3 py-2 gap-x-3">
                {dashboardLoading ? (
                    <Fragment>
                        <LoadingDashboardCard />
                        <LoadingDashboardCard />
                        <LoadingDashboardCard />
                    </Fragment>
                ) : (
                    <Fragment>
                        <DashboardCard label={"Sold"} icon={<BsArrowLeftRight />} count={dashboardData.sold} />
                        <DashboardCard label={"Menus"} icon={<FaUtensils />} count={dashboardData.menus} />
                        <DashboardCard label={"Amount"} icon={<FaHandHoldingUsd />} count={formatter.format(parseInt(dashboardData.amount))} />
                    </Fragment>
                )}
            </div>
            <div className="relative px-3 py-2">
                <div className="py-3 flex items-center justify-between">
                    <h2 className="font-semibold text-lg">Popular Menus</h2>
                    <Link to={"/admin/menu"} className="px-3 py-2 text-white bg-emerald-500 hover:bg-emerald-600 rounded">
                        Show all
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
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {popularMenuLoading ? (
                            <tr className="bg-zinc-100 border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">loading</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    loading
                                </th>
                                <td className="px-6 py-4">loading</td>
                                <td className="px-6 py-4">loading</td>
                            </tr>
                        ) : (
                            popularMenu.map((item, index) => (
                                <tr className="bg-zinc-100 border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">{formatter.format(parseInt(item.price))}</td>
                                    <td className="px-6 py-4">{item.sold > 0 ? item.sold : 0}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default Dashboard;
