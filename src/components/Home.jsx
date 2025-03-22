import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

const Home = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate("/signin");
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem("isAuthenticated");
        navigate("/signin");
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 border border-gray-300">

            <div
                className="w-full bg-white flex flex-col cursor-pointer"
                onMouseEnter={() => setShowLogout(true)}
                onMouseLeave={() => setShowLogout(false)}
            >
                {/* Account Settings Button */}
                <div className="p-4">Account Settings</div>

                {/* Logout Button */}
                {showLogout && (
                    <button
                        onClick={handleLogout}
                        className="self-end mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md"
                    >
                        Logout
                    </button>
                )}
            </div>


            <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg">
                {user ? (
                    <div>
                        <div className="flex items-center">
                            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                {user.email.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-4">
                                <p className="">{user.name}</p>
                                <h2 className="text-xl font-semibold text-gray-900">{user.email}</h2>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-700 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere animi doloremque libero ut voluptatem maiores iusto aperiam, nobis rerum nihil.
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="text-red-500 text-center">No User Found. Please register first.</p>
                )}
            </div>
        </div >
    );
};

export default Home;
