import { Fragment, useState } from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { setCheckoutModalStatus } from "../features/ModalSlice";

const ModalCheckoutInvoice = ({ handleNext }) => {
    const [identificationData] = useState({
        name: null,
        email: null,
        phone: null,
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNext(identificationData);
    };
    return (
        <Fragment>
            {/* title */}
            <h1 className="text-xl">Invoice details</h1>
            {/* input form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Fullname
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Fullname"
                        onChange={(e) => (identificationData.name = e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="email@example.com"
                        onChange={(e) => (identificationData.email = e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                        Phone number
                    </label>
                    <input
                        type="number"
                        inputMode="numeric"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Phone number"
                        onChange={(e) => (identificationData.phone = e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-end mt-2 gap-x-3">
                    <button className="px-3 py-2 rounded text-white bg-rose-500" onClick={() => dispatch(setCheckoutModalStatus(false))}>
                        Cancel
                    </button>
                    <button type="submit" className="px-3 py-2 rounded text-white bg-blue-500">
                        Next
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

ModalCheckoutInvoice.propTypes = {
    handleNext: PropTypes.func.isRequired,
};

export default ModalCheckoutInvoice;