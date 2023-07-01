import { PropTypes } from "prop-types";
import { QRCodeSVG } from "qrcode.react";
import { formatter, randNum } from "../features/helper";
import { HiChevronDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { setCheckoutModalStatus } from "../features/ModalSlice";
import { clearOrder } from "../features/OrderSlice";
import { useNavigate } from "react-router-dom";

const PaymentDetail = ({ label, handleChange }) => {
    const [menuDetail, setMenuDetail] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const orders = useSelector(({ order }) => order.order);
    const total = useSelector(({ order }) => order.orderSubTotal);

    const toggleMenuDetail = useCallback(() => {
        setMenuDetail(!menuDetail);
    }, [menuDetail]);

    const randData = useMemo(
        () => ({
            idPembayaran: `SA-${randNum(10)}A`,
            kodePembayaran: `00000-${randNum(10)}`,
        }),
        []
    );

    const handleDone = () => {
        dispatch(clearOrder());
        dispatch(setCheckoutModalStatus(false));
        navigate("/");
    };

    return (
        <>
            <h1 className="text-xl font-medium">Payment Detail</h1>
            <div className="flex flex-col items-center mt-5">
                <p>Complete payment before</p>
                <h2 className="text-2xl">
                    {new Date(Date.now() + 3600000).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        hour: "numeric",
                        minute: "numeric",
                    })}
                </h2>
            </div>
            <div className="my-3">
                {/* id pembayaran */}
                <div className="flex items-center justify-between">
                    <h3>Payment ID</h3>
                    <p className="font-bold">{randData.idPembayaran}</p>
                </div>

                {/* metode pembayaran */}
                <div className="flex items-center justify-between">
                    <h3>Payment Method</h3>
                    <p className="font-bold">{label}</p>
                </div>

                {/* kode pembayaran */}
                <div className="flex items-center justify-between">
                    <h3>Payment Code</h3>
                    <p className="font-bold">{randData.kodePembayaran}</p>
                </div>

                {/* jumlah pembayaran */}
                <div className="relative my-3">
                    <div className="flex items-center gap-3 px-3 py-2 border border-zinc-200 rounded shadow  cursor-pointer hover:bg-zinc-100" onClick={toggleMenuDetail}>
                        <h3 className="flex-1">Total</h3>
                        <p className="font-bold">{formatter.format(total)}</p>
                        <HiChevronDown className={`w-5 h-5 transition-all ${!menuDetail && "-rotate-90"}`} />
                    </div>
                    {/* order list */}
                    {menuDetail && orders.length > 0 && (
                        <motion.div initial={{ height: "0px" }} animate={{ height: "auto" }} exit={{ height: "0px" }} className="w-full px-3 py-2 bg-zinc-100 overflow-clip">
                            {orders.map((item, i) => (
                                <div className="grid grid-cols-4 w-full" key={i}>
                                    <p className="col-span-2">{item.name}</p>
                                    <p className="text-end">{item.quantities}x</p>
                                    <p className="text-end">{formatter.format(item.quantities * item.price)}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* code qr */}
                <div className="w-full flex justify-center py-3">
                    <QRCodeSVG value={randData.kodePembayaran} />
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-3">
                <button className="px-3 py-2 rounded bg-rose-600 text-white" onClick={() => handleChange()}>
                    Change payment
                </button>
                <button className="px-3 py-2 rounded bg-blue-600 text-white" onClick={handleDone}>
                    Done
                </button>
            </div>
        </>
    );
};

PaymentDetail.propTypes = {
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default PaymentDetail;
