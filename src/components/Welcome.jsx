import { Link } from "react-router-dom";
const WelcomePage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-end bg-gray-100">
            <div className="w-full px-5 py-10 flex flex-col items-center text-left">
                {/* Welcome Section */}
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome to PopX</h1>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 w-full mt-5">
                    <Link to="signup" className="bg-violet-600 hover:bg-violet-700 text-white text-center font-semibold py-2 px-6 rounded-lg transition-all">
                        Create Account
                    </Link>
                    <Link to="signin" className="bg-violet-300 hover:bg-violet-400 text-black text-center font-semibold py-2 px-6 rounded-lg transition-all">
                        Already Registered? Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
