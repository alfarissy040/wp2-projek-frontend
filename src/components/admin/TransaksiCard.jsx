import { motion } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const TransaksiCard = () => {
    const [isExpand, setIsExpand] = useState(false);

    const expandVariant = {
        visible: { height: "auto" },
        hidden: { height: 0 },
    };

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });
    return (
        <div className="relative w-full flex-1 overflow-hidden rounded-md shadow-md">
            <div className="px-3 py-2 flex items-center gap-3 bg-white ">
                <div className="flex items-center justify-between w-full flex-1">
                    {/* kode transaksi */}
                    <p>123asd123</p>
                    {/* status */}
                    <p className="text-rose-500">On process</p>
                    {/* price */}
                    <p>{formatter.format(parseInt(12000))}</p>
                </div>
                {/* icon */}
                <div className="rounded-full hover:bg-zinc-200 p-2 cursor-pointer" onClick={() => setIsExpand((isExpand) => !isExpand)}>
                    <HiChevronDown className="w-5 h-5 " />
                </div>
            </div>
            <motion.div className={`w-full bg-zinc-100`} variants={expandVariant} animate={isExpand ? "visible" : "hidden"}>
                <div className="flex items-center justify-between px-3 py-2">
                    <p>Sushi</p>
                    <div className="flex items-center gap-x-5">
                        <p>2x</p>
                        <p>{formatter.format(parseInt(12000))}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TransaksiCard;
