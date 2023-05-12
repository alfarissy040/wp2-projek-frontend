import { MdClose } from "react-icons/md";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const CartModal = ({ handleCartToggle }) => {
    const cartData = useSelector((state) => state.cart.cart);
    const subTotal = useSelector((state) => state.cart.subTotal);
    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
    });

    return (
        <div className="h-screen absolute top-0 right-0 p-3 z-10">
            <div className="rounded-lg shadow-md bg-white h-full w-80 py-3 flex flex-col">
                {/* header */}
                <div className="flex items-center px-5">
                    <h2 className="flex-1 w-full text-left font-bold text-xl">Cart</h2>
                    {/* close btn */}
                    <button className="p-2 rounded-md bg-red-200 hover:bg-red-300 text-red-600" onClick={() => handleCartToggle()}>
                        <MdClose />
                    </button>
                </div>
                {/* items */}
                <div className="flex-1 w-full h-full overflow-y-auto divide-y-2 my-3 px-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-300 ">
                    {/* card */}
                    {cartData.map((item) => (
                        <CartCard key={item.id} id={item.id} nama={item.nama} harga={item.harga} quantity={item.quantity} />
                    ))}
                </div>
                {/* total */}
                <div className="w-full inline-block px-5">
                    <div className="flex items-center mb-3">
                        <h4 className="flex-1 w-full">Sub Total</h4>
                        <p className="text-lg font-semibold">{formatter.format(subTotal)}</p>
                    </div>
                    <button className="flex-1 w-full px-3 py-2 bg-blue-500 text-white rounded-md uppercase font-semibold">Pesan</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
