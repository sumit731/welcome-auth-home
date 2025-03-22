import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa"; // Import camera icon

const Home = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);
    const [user, setUser] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate("/signin");
        }

        // Fetch user data
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setProfileImage(localStorage.getItem("profileImage")); // Load saved profile image
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem("isAuthenticated");
        navigate("/signin");
    };

    // Handle Profile Picture Upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                localStorage.setItem("profileImage", reader.result); // Save in LocalStorage
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 border border-gray-300">

            {/* Account Settings Section */}
            <div
                className="w-full bg-white flex flex-col cursor-pointer relative"
                onMouseEnter={() => setShowLogout(true)}
                onMouseLeave={() => setShowLogout(false)}
            >
                <div className="p-4">Account Settings</div>
                {showLogout && (
                    <button
                        onClick={handleLogout}
                        className="self-end mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md"
                    >
                        Logout
                    </button>
                )}
            </div>

            {/* Profile Card */}
            <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg">
                {user ? (
                    <div>
                        <div className="flex items-center relative">
                            {/* Profile Image Container */}
                            <div className="relative w-24 h-24">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full border border-gray-400"
                                    />
                                ) : (
                                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                        {user.email.charAt(0).toUpperCase()}
                                    </div>
                                )}

                                {/* Image Upload Button */}
                                <label className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full cursor-pointer">
                                    <FaCamera className="text-gray-600" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                            </div>

                            <div className="ml-4">
                                <p className="">{user.name}</p>
                                <h2 className="text-xl font-semibold text-gray-900">{user.email}</h2>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-700 text-sm">
                                Welcome to your profile! You can upload a profile picture by clicking the camera icon.
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
