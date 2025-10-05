import React from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import logoGif from "../../assets/gifs/Frame.gif";

const NavBar = () => {
  return (
    <nav className="w-full bg-[#1E2433] text-white flex justify-between items-center px-6 lg:px-12 py-3">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img src={logoGif} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </NavLink>
      </div>

      {/* Center - Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6 bg-[#2A3142] rounded-full px-6 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-medium border ${
              isActive ? "border-[#ffffff40] bg-[#3B4254]" : "border-transparent text-gray-300 hover:text-white hover:border-[#ffffff40]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-medium border ${
              isActive ? "border-[#ffffff40] bg-[#3B4254]" : "border-transparent text-gray-300 hover:text-white hover:border-[#ffffff40]"
            }`
          }
        >
          About us
        </NavLink>

        {/* Services Dropdown */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-medium border ${
              isActive ? "border-[#ffffff40] bg-[#3B4254]" : "border-transparent text-gray-300 hover:text-white hover:border-[#ffffff40]"
            }`
          }
        >
         Services
        </NavLink>
       

        <NavLink
          to="/white-label"
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-medium border ${
              isActive ? "border-[#ffffff40] bg-[#3B4254]" : "border-transparent text-gray-300 hover:text-white hover:border-[#ffffff40]"
            }`
          }
        >
          White label
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-medium border ${
              isActive ? "border-[#ffffff40] bg-[#3B4254]" : "border-transparent text-gray-300 hover:text-white hover:border-[#ffffff40]"
            }`
          }
        >
          Contact us
        </NavLink>
      </div>

      {/* Right - Cart + Sign In */}
      <div className="flex items-center gap-4">
        <button className="p-3 rounded-full bg-[#2A3142] hover:bg-[#3A4052] transition">
          <ShoppingCart className="w-5 h-5 text-white" />
        </button>
        <button className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-white px-5 py-2 rounded-full border border-[#ffffff40] hover:opacity-90 transition">
          <span>✨ Sign In</span>
        </button>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
