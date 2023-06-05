import { useEffect, useState } from "react";

const Header = () => {
    const [dateState, useDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => useDateState(new Date()), 20000);
    }, []);
    return (
        <header className="header">
            <div className="nav">
                <h1 className="text-2xl font-bold">Dashboard</h1>
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
        </header>
    );
};

export default Header;
