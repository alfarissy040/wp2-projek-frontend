import { useState } from "react";
import bg from "../../assets/img/login-bg-1.png";
import logo from "../../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login as SliceLogin } from "../../features/AuthSlice";

const Login = () => {
    const [formUsername, setFormUsername] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formError, setFormError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (formUsername != "admin" && formPassword != "admin") {
            return setFormError("Username dan Password salah");
        }

        dispatch(SliceLogin(formUsername));
        navigate("/admin");
    };
    return (
        <div className="w-full h-screen flex items-center justify-center bg-zinc-300">
            <div className="flex bg-white w-full max-w-4xl h-[550px]">
                <div className="flex-1 h-full flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center mb-10 gap-3">
                        {/* logo */}
                        <div className="w-12 aspect-square">
                            <img src={logo} alt="" className="w-full h-full object-contain" />
                        </div>
                        {/* title */}
                        <h1 className="text-2xl">Restaurant</h1>
                    </div>
                    <h3 className="text-2xl font-medium mx-auto">Welcome admin</h3>
                    <form onSubmit={handleLogin}>
                        <div className="mt-6 flex flex-col justify-center items-center gap-3">
                            {formError && <div className="px-3 py-2 rounded border border-rose-600 bg-rose-200 w-64 flex-1">{formError}</div>}
                            <input
                                type="text"
                                name="username"
                                className="px-3 py-2 w-64 rounded border border-zinc-300 outline-none focus:ring focus:ring-emerald-500"
                                placeholder="Username"
                                onChange={(e) => setFormUsername(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                className="px-3 py-2 w-64 rounded border border-zinc-300 outline-none focus:ring focus:ring-emerald-500"
                                placeholder="Password"
                                onChange={(e) => setFormPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className="px-3 py-2 rounded bg-emerald-500 text-white w-64">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1">
                    <img src={bg} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Login;
