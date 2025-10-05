import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
   useEffect(() => {
          document.title = "Login";
        }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo user
    const demoUser = { name: "Sumyta", email };
    localStorage.setItem("demoUser", JSON.stringify(demoUser));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2433] text-white">
      <div className="bg-[#2A3142] p-8 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back ✨</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Sign In
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-300">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#A35CF8] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
