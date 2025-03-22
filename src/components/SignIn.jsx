import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            sessionStorage.setItem("isAuthenticated", "true");
            navigate("/home");
        } else {
            setMessage("Invalid credentials ❌");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="w-full max-w-md p-6">
                <h1 className="text-3xl font-bold text-gray-900">Sign in to your PopX account</h1>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <form className="flex flex-col gap-4 mt-4" onSubmit={handleLogin}>
                    <fieldset className="border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-violet-600 font-semibold px-2">Email Address</legend>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="w-full outline-none bg-transparent"
                        />
                    </fieldset>

                    <fieldset className="border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-violet-600 font-semibold px-2">Password</legend>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full outline-none bg-transparent"
                        />
                    </fieldset>

                    <p className="text-red-500">{message}</p>

                    <button type="submit" className="w-full bg-gray-300 hover:bg-violet-700 hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-lg">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
