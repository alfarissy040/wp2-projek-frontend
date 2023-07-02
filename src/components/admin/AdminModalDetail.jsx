import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import { setAdminModalStatus, showadminModalEdit } from "../../features/ModalSlice";
import { useEffect } from "react";
import LoadingModalDetail from "../loading/LoadingModalDetail";
import { getMenus } from "../../features/AdminSlice";
import { baseUrl, formatter } from "../../features/helper";
import { motion } from "framer-motion";
import axios from "axios";
import { showDialog } from "../../features/DialogSlice";

const AdminModalDetail = () => {
    const dataId = useSelector(({ modal }) => modal.dataId);
    const loading = useSelector(({ admin }) => admin.menus.loading);
    const menus = useSelector(({ admin }) => admin.menus.data.filter(({ id }) => id === dataId))[0];
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(setAdminModalStatus(false));
        dispatch(showadminModalEdit(menus));
    };

    const handleSuccess = () => {
        dispatch(showDialog({ status: "success", label: `Success delete menu` }));
        dispatch(setAdminModalStatus(false));
    };

    const handleDelete = () => {
        var confirmasi = confirm("are you sure delete this menu");
        if (!confirmasi) return null;

        const formData = new FormData();
        formData.append("id", dataId);

        const deleteMenu = async () => {
            const send = await axios.post(baseUrl + "menus/" + dataId + "/delete");
            return send.status;
        };
        return deleteMenu() === 200 ? handleSuccess() : dispatch(showDialog({ status: "failed", label: `Failed delete menu` }));
    };

    useEffect(() => {
        if (menus === null) {
            return dispatch(getMenus());
        }
    }, []);
    return loading ? (
        <LoadingModalDetail />
    ) : (
        <motion.div className="w-full h-screen absolute inset-0 bg-zinc-950 bg-opacity-60 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="max-w-5xl w-full max-h-[500px] h-auto flex gap-x-3 bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* Close Button */}
                <div className="absolute top-3 right-2">
                    <HiXMark className="w-7 h-7 text-zinc-700 cursor-pointer" title="Close" onClick={() => dispatch(setAdminModalStatus(false))} />
                </div>
                {/* gambar */}
                <div className="h-[500px] aspect-[4/3] flex items-center justify-center">
                    <img src={`${baseUrl}${menus.image}`} alt="" className="w-full h-full object-contain" />
                </div>
                {/* content */}
                <div className="pr-3 py-2 overflow-y-auto scrollbar-thin flex flex-col justify-between flex-1 w-full">
                    <div className="flex-1 w-full">
                        {/* title */}
                        <h2 className="text-3xl font-medium pr-5">{menus.name}</h2>
                        {/* price */}
                        <p className="font-bold text-xl">{formatter.format(menus.price)}</p>
                        {/* deskripsi */}
                        <p className="flex-1 w-full h-auto mt-2">{menus.description}</p>
                    </div>
                    {/* action btn */}
                    <div className="flex items-center gap-x-3">
                        <button className={`px-3 py-2 mb-3 w-full rounded text-sm  border border-emerald-500 transition-colors bg-white text-emerald-500 hover:bg-emerald-500 hover:text-white`} onClick={handleEdit}>
                            Edit
                        </button>
                        <button className={`px-3 py-2 mb-3 w-full rounded text-sm  border border-rose-500 transition-colors bg-white text-rose-500 hover:bg-rose-500 hover:text-white`} onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
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
