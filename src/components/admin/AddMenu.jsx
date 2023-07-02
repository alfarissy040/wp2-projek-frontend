import { motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setadminMenuStatus } from "../../features/ModalSlice";
import axios from "axios";
import { showDialog } from "../../features/DialogSlice";
import { getMenus } from "../../features/AdminSlice";

const AddMenu = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const dataForm = useState({
        name: null,
        price: null,
        description: null,
    });
    const [dataFormImage, setDataFormImage] = useState(null);
    const imageRef = useRef();

    const dispatch = useDispatch();

    const handleAddImage = (e) => {
        e.preventDefault();
        imageRef.current.click();
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setDataFormImage(null);
        dispatch(setadminMenuStatus(false));
    };

    const handleSuccess = () => {
        dispatch(getMenus());
        dispatch(showDialog({ status: "success", label: `Berhasil Menambahkan ${dataForm.name} ke menu` }));
        dispatch(setadminMenuStatus(false));
    };

    const handleAddMenu = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", dataFormImage);
        formData.append("name", dataForm.name);
        formData.append("price", dataForm.price);
        formData.append("description", dataForm.description);

        const send = await axios.post(baseUrl + "menus/store", formData);
        return send.status === 200 ? handleSuccess() : dispatch(showDialog({ status: "failed", label: `Gagal Menambahkan menu` }));
    };
    return (
        <motion.div className="w-full h-screen absolute inset-0 bg-zinc-950 bg-opacity-60 pt-12 z-50 flex items-center justify-center overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white w-full h-full px-6 py-3 rounded-lg overflow-y-auto overflow-x-hidden" initial={{ y: 500 }} animate={{ y: 0 }} exit={{ y: 500 }} transition={{ duration: 0.3 }}>
                <header>
                    <h1 className="font-bold text-2xl border-b-4 border-emerald-500 w-fit">Add Menu</h1>
                </header>
                <form onSubmit={handleAddMenu}>
                    <div className="w-full flex-1 mt-3 flex flex-col gap-3">
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
                                Produk image
                            </label>
                            <input type="file" name="name" id="image" ref={imageRef} className="hidden" onChange={(e) => setDataFormImage(e.target.files[0])} accept="image/png, image/gif, image/jpeg" required />
                            <div className="flex items-center gap-x-3">
                                <button className="rounded border-dashed border-2" onClick={handleAddImage}>
                                    {dataFormImage ? (
                                        <div className="w-52 aspect-[4/3] relative group">
                                            <div className="absolute w-full h-full bg-zinc-950 bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">Change image</div>
                                            <img src={URL.createObjectURL(dataFormImage)} alt="" className="w-full h-full object-contain" />
                                        </div>
                                    ) : (
                                        <p className="px-3 py-2">Add image</p>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                Produk name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Produk name"
                                onChange={(e) => (dataForm.name = e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                                Price
                            </label>
                            <input
                                type="number"
                                inputMode="numeric"
                                name="price"
                                id="price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Price"
                                onChange={(e) => (dataForm.price = e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                                Description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                className="w-full flex-1 resize-y px-3 py-2 border rounded-md"
                                placeholder="Description"
                                onChange={(e) => (dataForm.description = e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="w-full flex justify-end gap-x-3">
                            <button type="reset" className="px-3 py-2 rounded text-white bg-red-500 hover:bg-red-600" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button type="submit" className="px-3 py-2 rounded text-white bg-emerald-500 hover:bg-emerald-600">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default AddMenu;
