import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { setModalStatus } from "../features/ModalSlice";
import { PropTypes } from "prop-types";

const Modal = () => {
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
                <div className="absolute top-3 right-3">
                    <HiXMark className="w-7 h-7 text-zinc-700 cursor-pointer" title="Close" onClick={() => dispatch(setModalStatus(false))} />
                </div>
                {/* gambar */}
                <div className="h-[500px] aspect-[4/3] flex items-center justify-center">
                    <img src={`https://source.unsplash.com/random/480x360/?${props.nama}`} alt="" className="w-full h-full object-contain" />
                </div>
                {/* content */}
                <div className="px-3 py-2 overflow-y-auto scrollbar-thin">
                    {/* title */}
                    <h2 className="text-lg font-medium">{props.nama}</h2>
                    <p className="font-bold text-xl">{formatter.format(props.harga)}</p>
                    {/* deskripsi */}
                    <p className="flex-1 w-full mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iure fugiat accusantium, eum tenetur laborum dolore rerum nemo dicta praesentium accusamus odit voluptates optio consectetur deleniti. Quia, assumenda
                        quas sint quis consequuntur culpa aliquam odio architecto expedita dicta maxime cumque porro neque error blanditiis? Facere natus alias explicabo sed ab?
                    </p>
                </div>
            </div>
        </div>
    );
};
Modal.propTypes = {
    nama: PropTypes.string,
    harga: PropTypes.number,
};

export default Modal;
