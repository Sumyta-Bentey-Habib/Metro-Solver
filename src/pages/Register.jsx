import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
   useEffect(() => {
          document.title = "Register";
        }, []);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, email };
    localStorage.setItem("demoUser", JSON.stringify(newUser));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2433] text-white">
      <div className="bg-[#2A3142] p-8 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account 🚀</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg bg-[#3A4052] focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-[#3A4052] focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-[#3A4052] focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] py-2 rounded-lg hover:opacity-90 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-[#A35CF8] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
