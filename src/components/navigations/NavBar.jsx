import React, { useState, useEffect } from "react";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import logoGif from "../../assets/gifs/Frame.gif";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // load demo user from localStorage
    const storedUser = localStorage.getItem("demoUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("demoUser");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#1E2433] text-white flex justify-between items-center px-6 lg:px-12 py-3 shadow-md">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img src={logoGif} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </NavLink>
      </div>

      {/* Center Nav */}
      <div className="hidden lg:flex items-center gap-6 bg-[#2A3142] rounded-full px-6 py-2">
        {["/", "/about", "/services", "/white-label", "/contact"].map((path, i) => {
          const labels = ["Home", "About us", "Services", "White label", "Contact us"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium border ${
                  isActive
                    ? "border-[#ffffff40] bg-[#3B4254]"
                    : "border-transparent text-gray-300 hover:text-white hover:border-[#ffffff40]"
                }`
              }
            >
              {labels[i]}
            </NavLink>
          );
        })}
      </div>

      {/* Right - Cart + Auth */}
      <div className="flex items-center gap-4">
        <button className="p-3 rounded-full bg-[#2A3142] hover:bg-[#3A4052] transition">
          <ShoppingCart className="w-5 h-5 text-white" />
        </button>

        {!user ? (
          <button
            onClick={() => navigate("/login")}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-white px-5 py-2 rounded-full border border-[#ffffff40] hover:opacity-90 transition"
          >
            <span>✨ Sign In</span>
          </button>
        ) : (
          <div className="relative group">
            <button className="flex items-center gap-2 bg-[#2A3142] hover:bg-[#3A4052] px-4 py-2 rounded-full transition">
              <User className="w-5 h-5" />
              <span className="text-sm">{user.name}</span>
            </button>
            {/* Dropdown */}
            <div className="absolute right-0 mt-2 bg-[#2A3142] text-sm rounded-xl shadow-lg py-2 w-40 opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-[#3A4052] flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>
        )}

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
