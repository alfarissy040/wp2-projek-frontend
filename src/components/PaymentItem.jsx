import { PropTypes } from "prop-types";
import { memo } from "react";
import { HiChevronRight } from "react-icons/hi";

const Payment = ({ label, img, handleSelect }) => {
    return (
        <div className="flex items-center px-3 py-2 rounded shadow-md border border-zinc-200 gap-x-3 cursor-pointer" onClick={() => handleSelect(label)}>
            <div className="w-10 h-10 aspect-square ">
                <img src={img} alt="logo" className="w-full h-full object-contain" />
            </div>
            <p className="flex-1">{label}</p>
            <span>
                <HiChevronRight className="w-5 h-5" />
            </span>
        </div>
    );
};

Payment.propTypes = {
    label: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
};

const PaymentItem = memo(Payment);

export default PaymentItem;
