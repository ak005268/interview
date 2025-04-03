import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Reset error before validation

        if (loginData.username === "admin" && loginData.password === "admin") {
            localStorage.setItem("authentication", JSON.stringify(true));
            navigate("/dashboard");
        } else {
            setError("Wrong credentials! Please try again.");
        }
    };

    const authentication = localStorage.getItem("authentication");

    useEffect(() => {
        if (authentication) {
            navigate("/dashboard");
        }
    }, [authentication, navigate]);

    return (
        <div className="bg-blue-200 h-screen flex justify-center items-center">
            <div className="shadow-lg px-12 py-10 bg-white w-96 flex flex-col rounded-2xl">
                <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Sign In</h2>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Username</label>
                        <input
                            required
                            type="text"
                            name="username"
                            value={loginData.username}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            required
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
