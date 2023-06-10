import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDialogStatus } from "../../features/DialogSlice";

const Dialog = () => {
    const props = useSelector(({ dialog }) => dialog.data);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setDialogStatus(false));
        }, 5000);
    }, [dispatch]);
    return (
        <motion.div
            className={`absolute bottom-3 right-3 px-3 py-2 rounded border text-white z-50 ${props.status === "success" ? "bg-emerald-500 border-emerald-700" : "bg-rose-500 border-rose-700"}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
        >
            {props.label}
        </motion.div>
    );
};
Dialog.propTypes = {
    status: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Dialog;
