import { AnimatePresence, motion } from "framer-motion";
import ModalCheckoutInvoice from "./ModalCheckoutInvoice";
import { useState } from "react";
import { HiOutlineQrcode, HiIdentification } from "react-icons/hi";
import ModalCheckoutQr from "./ModalCheckoutQr";

const ModalCheckout = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = async () => {
        setStep(2);
    };

    const handleComplete = () => {};
    return (
        <div className="w-full h-screen bg-zinc-950 bg-opacity-60 absolute inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-full max-w-lg min-h-[10rem] p-3">
                {/* step */}
                <ol className="flex items-center w-full mb-4 sm:mb-5 max-w-xs mx-auto">
                    <li className="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-500 after:border-4 after:inline-block">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full lg:h-12 lg:w-12 shrink-0">
                            <HiIdentification className={`w-6 h-6 text-white`} />
                        </div>
                    </li>
                    <li className="flex items-center w-auto">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 ${step === 2 ? "bg-blue-500" : "bg-zinc-200"}`}>
                            <HiOutlineQrcode className={`w-6 h-6 ${step === 2 ? "text-white" : null}`} />
                        </div>
                    </li>
                </ol>
                {/* debug */}
                {/* <button className="p-3 rounded-full text-white bg-blue-500" onClick={() => setStep(1)}>
                    1
                </button>
                <button className="p-3 rounded-full text-white bg-blue-500" onClick={() => setStep(2)}>
                    2
                </button> */}
                {/* modal content */}
                {step === 1 ? (
                    <AnimatePresence>
                        <motion.div className="pt-3 flex-1 w-full flex flex-col gap-3" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                            <ModalCheckoutInvoice handleNext={() => handleNextStep()} />
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <motion.div className="pt-3 flex-1 w-full flex flex-col gap-3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                        <ModalCheckoutQr handleComplete={() => handleComplete()} />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ModalCheckout;
