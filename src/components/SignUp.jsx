import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [agency, setAgency] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (!name || !phone || !email || !password || !company) {
            setMessage("All fields are required!");
            return;
        }

        // Save user in localStorage
        localStorage.setItem("user", JSON.stringify({ name, phone, email, password, company, agency }));
        setMessage("Registration successful! ✅ Please login.");
        setTimeout(() => navigate("/signin"), 2000); // Redirect to Login
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="w-full max-w-md p-6">
                <h1 className="text-3xl font-bold text-gray-900">Create your PopX account</h1>

                <form className="flex flex-col gap-4 mt-4" onSubmit={handleRegister}>
                    <fieldset className="border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-violet-600 font-semibold px-2">Full Name<span>*</span></legend>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter email"
                            className="w-full outline-none bg-transparent"
                        />
                    </fieldset>

                    <fieldset className="border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-violet-600 font-semibold px-2">Phone number<span>*</span></legend>
                        <input
                            type="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter phone number"
                            className="w-full outline-none bg-transparent"
                        />
                    </fieldset>

                    <fieldset className="border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-violet-600 font-semibold px-2">Email address<span>*</span></legend>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="w-full outline-none bg-transparent"
                        />
                    </fieldset>

                    <fieldset className="border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-violet-600 font-semibold px-2">Password<span>*</span></legend>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full outline-none bg-transparent"
                        />
                    </fieldset>

                    <fieldset className="border border-gray-300 rounded-lg px-4 py-2">
                        <legend className="text-violet-600 font-semibold px-2">Company Name</legend>
                        <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Enter company name"
                            className="w-full outline-none bg-transparent"
                        />
                    </fieldset>

                    <div>
                        <p className="gap-2">Are you an Agency?<span>*</span></p>
                        <input className="me-2" type="radio" name="role"
                            value="Yes"
                            checked={agency === "Yes"}
                            onChange={(e) => setAgency(e.target.value)} />Yes
                        <input className="ms-3 me-2" type="radio" name="role"
                            value="No"
                            checked={agency === "No"}
                            onChange={(e) => setAgency(e.target.value)} />No
                    </div>

                    <p className="text-red-500">{message}</p>

                    <button type="submit" className="w-full bg-gray-300 hover:bg-violet-700 hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-lg">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
