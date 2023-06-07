import { Fragment } from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import AdminModalDetail from "./AdminModalDetail";
import { dummy } from "../../dumy";

const Menu = () => {
    const modalStatus = useSelector(({ modal }) => modal.adminStatus);
    return (
        <Fragment>
            <Header label="Menu" />
            <div className="px-3 py-2 gap-3 grid grid-cols-2">
                {dummy.map((item) => (
                    <MenuList key={item.id} name={item.name} image={item.image} price={item.price} id={item.id} />
                ))}
            </div>
            {modalStatus && <AdminModalDetail />}
        </Fragment>
    );
};

export default Menu;
