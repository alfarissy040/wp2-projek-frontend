import { Fragment } from "react";
import Header from "./Header";
import MenuList from "./MenuList";

const Menu = () => {
    return (
        <Fragment>
            <Header label="Menu" />
            <div className="px-3 py-2">
                <table className="w-full text-sm text-left text-gray-500 rounded-md overflow-clip">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-white">
                        <tr>
                            <th scope="col" className="p-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-zinc-100 border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="p-3">1</td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17
                            </td>
                            <td className="px-6 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci iure assumenda! Cupiditate, quibusdam laboriosam labore vero explicabo nobis a!</td>
                            <td className="px-6 py-4">Rp. 1000</td>
                            <td className="px-6 py-4">
                                <button className="px-3 py-2 bg-emerald-500 text-white rounded">View</button>
                            </td>
                            <td className="px-6 py-4 flex items-center gap-x-1">
                                <button className="px-3 py-2 bg-emerald-500 hover:bg-emerald-600 rounded text-white">Edit</button>
                                <button className="px-3 py-2 bg-red-500 hover:bg-red-600 rounded text-white">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <MenuList />
            </div>
        </Fragment>
    );
};

export default Menu;
