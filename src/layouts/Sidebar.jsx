import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Post", path: "/post" },
    ];

    const authentication = localStorage.getItem("authentication");

    useEffect(() => {
        if (!authentication) {
            navigate("/");
        }
    }, [authentication, navigate]);

    const logoutHandler = () => {
        localStorage.removeItem("authentication");
        navigate("/");
    };

    return (
        <div className="w-[220px] h-screen bg-blue-200 fixed top-0 left-0 flex flex-col shadow-lg">
            <div className="p-4 text-xl font-bold text-center bg-blue-300">
                Sidebar
            </div>

            <ul className="flex flex-col flex-grow mt-5">
                {sidebarItems.map((item) => (
                    <li
                        key={item.path}
                        className={`px-6 py-3 cursor-pointer text-center rounded-md mx-4 transition-all duration-200 ${
                            location.pathname === item.path
                                ? "bg-amber-400 text-white font-semibold"
                                : "hover:bg-amber-300"
                        }`}
                        onClick={() => navigate(item.path)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>

            {/* Logout Button at Bottom */}
            <div className="p-4">
                <button
                    className="w-full bg-amber-400 px-4 py-2 rounded-md text-white font-semibold hover:bg-amber-500"
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default SideBar;
