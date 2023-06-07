import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const Header = (props) => {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 20000);
    }, []);
    return (
        <header className="header">
            <div className="nav">
                <h1 className="text-2xl font-bold">{props.label}</h1>
                <small>
                    {dateState.toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}{" "}
                    |{" "}
                    {dateState.toLocaleString("id-ID", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                    })}{" "}
                    WIB
                </small>
            </div>
            {props.btn}
        </header>
    );
};
Header.propTypes = {
    label: PropTypes.string.isRequired,
    btn: PropTypes.func,
};

export default Header;
