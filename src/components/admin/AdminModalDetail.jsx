import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import { setAdminModalStatus } from "../../features/ModalSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingModalDetail from "../loading/LoadingModalDetail";

const AdminModalDetail = () => {
    const [props, setProps] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const dataId = useSelector(({ modal }) => modal.dataId);
    const dispatch = useDispatch();

    const formatter = new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });

    useEffect(() => {
        setLoading(true);
        axios.get(baseUrl + "menus").then((res) => {
            setLoading(false);
            setProps(res.data.data.filter(({ id }) => id === dataId)[0]);
        });
    }, [dataId, baseUrl]);
    return loading ? (
        <LoadingModalDetail />
    ) : (
        <div className="w-full h-screen absolute inset-0 bg-zinc-950 bg-opacity-60 flex items-center justify-center z-50">
            <div className="max-w-5xl w-full max-h-[500px] h-auto flex gap-x-3 bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* Close Button */}
                <div className="absolute top-3 right-2">
                    <HiXMark className="w-7 h-7 text-zinc-700 cursor-pointer" title="Close" onClick={() => dispatch(setAdminModalStatus(false))} />
                </div>
                {/* gambar */}
                <div className="h-[500px] aspect-[4/3] flex items-center justify-center">
                    <img src={`http://localhost:8080/${props.image}`} alt="" className="w-full h-full object-contain" />
                </div>
                {/* content */}
                <div className="pr-3 py-2 overflow-y-auto scrollbar-thin flex flex-col justify-between">
                    <div className="flex-1">
                        {/* title */}
                        <h2 className="text-3xl font-medium pr-5">{props.name}</h2>
                        {/* price */}
                        <p className="font-bold text-xl">{formatter.format(props.price)}</p>
                        {/* deskripsi */}
                        <p className="flex-1 w-full h-auto mt-2">{props.description}</p>
                    </div>
                    {/* action btn */}
                    <div className="flex items-center gap-x-3">
                        <button className={`px-3 py-2 mb-3 w-full rounded text-sm  border border-emerald-500 transition-colors bg-white text-emerald-500 hover:bg-emerald-500 hover:text-white`}>Edit</button>
                        <button className={`px-3 py-2 mb-3 w-full rounded text-sm  border border-rose-500 transition-colors bg-white text-rose-500 hover:bg-rose-500 hover:text-white`}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
AdminModalDetail.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
};

export default AdminModalDetail;
