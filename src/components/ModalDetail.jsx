import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { setModalStatus } from "../features/ModalSlice";
import { PropTypes } from "prop-types";
import { addToCart } from "../features/CartSlice";

const ModalDetail = () => {
    const props = useSelector(({ modal }) => modal.data)[0];
    const dispatch = useDispatch();

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
    });
    return (
        <div className="w-full h-screen absolute inset-0 bg-zinc-950 bg-opacity-60 flex items-center justify-center z-50">
            <div className="max-w-5xl w-full max-h-[500px] h-auto flex gap-x-3 bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* Close Button */}
                <div className="absolute top-3 right-2">
                    <HiXMark className="w-7 h-7 text-zinc-700 cursor-pointer" title="Close" onClick={() => dispatch(setModalStatus(false))} />
                </div>
                {/* gambar */}
                <div className="h-[500px] aspect-[4/3] flex items-center justify-center">
                    <img src={`https://source.unsplash.com/random/480x360/?${props.nama}`} alt="" className="w-full h-full object-contain" />
                </div>
                {/* content */}
                <div className="pr-3 py-2 overflow-y-auto scrollbar-thin flex flex-col justify-between">
                    <div className="flex-1">
                        {/* title */}
                        <h2 className="text-3xl font-medium pr-5">{props.nama}</h2>
                        <p className="font-bold text-xl">{formatter.format(props.harga)}</p>
                        {/* deskripsi */}
                        <p className="flex-1 w-full h-auto mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iure fugiat accusantium, eum tenetur laborum dolore rerum nemo dicta praesentium accusamus odit voluptates optio consectetur deleniti. Quia,
                            assumenda quas sint quis consequuntur culpa aliquam odio architecto expedita dicta maxime cumque porro neque error blanditiis? Facere natus alias explicabo sed ab?
                        </p>
                    </div>
                    <button className="px-3 py-2 mb-3 w-full rounded text-blue-500 border border-blue-500 bg-white text-sm hover:bg-blue-500 hover:text-white transition-colors" onClick={() => dispatch(addToCart(props))}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};
ModalDetail.propTypes = {
    nama: PropTypes.string,
    harga: PropTypes.number,
};

export default ModalDetail;
