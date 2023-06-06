import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
const CheckoutTableItem = (props) => {
    const [status, setStatus] = useState(false);

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });

    useEffect(() => {
        setInterval(() => (Date.now() - props.date > 5000 ? setStatus(true) : setStatus(false)), 1000);
    }, [props.date]);
    return (
        <tr className="bg-white border-b" key={props.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {props.name}
            </th>
            <td className={`px-6 py-4 ${status ? "text-blue-500" : "text-rose-500"}`}>{status ? "Complete" : "On Process"}</td>
            <td className="px-6 py-4">{props.quantities}</td>
            <td className="px-6 py-4">{formatter.format(props.price)}</td>
        </tr>
    );
};

CheckoutTableItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantities: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

export default CheckoutTableItem;
