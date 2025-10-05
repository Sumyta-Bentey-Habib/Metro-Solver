import React from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; 
import MobileNav from "./MobileNav";
import logoGif from "../../assets/gifs/Frame.gif";

const NavBar = () => {
  return (
    <nav className="w-full bg-[#1E2433] text-white flex justify-between items-center px-6 lg:px-12 py-3">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src={logoGif}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Center - Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6 bg-[#2A3142] rounded-full px-6 py-2">
        <Link
          to="/"
          className="px-4 py-1.5 rounded-full border border-[#ffffff40] bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-sm font-medium"
        >
          Home
        </Link>
        <Link to="/about" className="text-sm text-gray-300 hover:text-white">
          About us
        </Link>
        <div className="relative group">
          <button className="flex items-center text-sm text-gray-300 hover:text-white">
            Services <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <div className="absolute hidden group-hover:block bg-[#2A3142] rounded-md shadow-md mt-2 w-40 py-2">
            <Link
              to="/services/web"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3B4254]"
            >
              Web Development
            </Link>
            <Link
              to="/services/app"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3B4254]"
            >
              App Development
            </Link>
          </div>
        </div>
        <Link to="/white-label" className="text-sm text-gray-300 hover:text-white">
          White label
        </Link>
        <Link to="/contact" className="text-sm text-gray-300 hover:text-white">
          Contact us
        </Link>
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
