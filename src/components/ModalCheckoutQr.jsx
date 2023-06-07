import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setCheckoutModalStatus } from "../features/ModalSlice";
import { QRCodeSVG } from "qrcode.react";

const ModalCheckoutQr = () => {
    const dispatch = useDispatch();
    return (
        <Fragment>
            {/* title */}
            <h1 className="text-xl">QR Code</h1>
            {/* input form */}
            <div className="flex items-center justify-center p-3">
                {/* qrcode */}
                <QRCodeSVG value="https://www.youtube.com/watch?v=E4WlUXrJgy4" size={200} />
            </div>
            <div className="flex items-center justify-end">
                <button className="px-3 py-2 rounded text-white bg-blue-500" onClick={() => dispatch(setCheckoutModalStatus(false))}>
                    Complete
                </button>
            </div>
        </Fragment>
    );
};

export default ModalCheckoutQr;
