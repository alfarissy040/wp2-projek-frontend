import { HiArrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setCheckoutModalStatus } from "../features/ModalSlice";
import PaymentItem from "./PaymentItem";
import { PropTypes } from "prop-types";
import { Fragment } from "react";

const va = [
    {
        label: "BCA Virtual Acount",
        img: "/bca.png",
    },
    {
        label: "BRIVA",
        img: "/bri.png",
    },
    {
        label: "BNI Virtual Acount",
        img: "/bni.png",
    },
    {
        label: "Mandiri Virtual Acount",
        img: "/mandiri.png",
    },
];

const PaymentMethod = ({ handleClick }) => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className="flex items-center">
                <HiArrowLeft className="w-5 h-5 cursor-pointer" onClick={() => dispatch(setCheckoutModalStatus(false))} />
                <h1 className="text-2xl text-center flex-1">Pembayaran</h1>
            </div>
            <div className="mt-5">
                <h2 className="text-lg font-medium mb-3">Transfer Virtual Acount</h2>
                <div className="flex flex-col gap-2">
                    {va.map((item) => (
                        <PaymentItem label={item.label} img={item.img} key={item.label} handleSelect={(data) => handleClick(data)} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

PaymentMethod.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default PaymentMethod;
