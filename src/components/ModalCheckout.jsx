import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import PaymentDetail from "./PaymentDetail";

const ModalCheckout = () => {
    const [payment, setPayment] = useState("");

    return (
        <div className="w-full h-screen bg-zinc-950 bg-opacity-60 absolute inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-full max-w-lg min-h-[10rem] px-3 py-5">
                {payment ? (
                    // payment detail
                    <motion.div initial={{ x: 5, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 5, opacity: 0 }}>
                        <PaymentDetail label={payment} handleChange={() => setPayment("")} />
                    </motion.div>
                ) : (
                    // payment selection
                    <AnimatePresence>
                        <motion.div initial={{ x: -5, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -5, opacity: 0 }}>
                            <PaymentMethod handleClick={(data) => setPayment(data)} />
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
};

export default ModalCheckout;
