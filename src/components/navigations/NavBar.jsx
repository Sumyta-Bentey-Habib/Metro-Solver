import React, { useState, useEffect } from "react";
import { ShoppingCart, User, LogOut, Users, Gift } from "lucide-react"; 
import { NavLink, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import logoGif from "../../assets/gifs/Frame.gif";

const AVATAR_URL = "https://i.pravatar.cc/150?img=60"; 

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Albert Flores",
    email: "baker@example.com",
    points: 468,
    avatar: AVATAR_URL, 
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Website'); 

  useEffect(() => {
    const storedUser = localStorage.getItem("demoUser");
    if (storedUser) {
        const loadedUser = JSON.parse(storedUser);
        setUser({
            name: loadedUser.name || "Albert Flores",
            email: loadedUser.email || "baker@example.com",
            points: loadedUser.points || 468,
            avatar: loadedUser.avatar || AVATAR_URL,
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("demoUser");
    setUser(null);
    setIsDropdownOpen(false); 
    navigate("/");
  };
  
  const DropdownLink = ({ icon: Icon, label, path, badge = null, onClick = null }) => (
    <button
      onClick={onClick || (() => { navigate(path); setIsDropdownOpen(false); })}
      className="w-full text-left px-4 py-3 text-white flex items-center justify-between transition duration-150 hover:bg-[#3B4254]"
    >
      <div className="flex items-center gap-4">
        <Icon className="w-5 h-5 opacity-90" />
        <span className="text-base font-medium">{label}</span>
      </div>
      {badge && (
        <span className="text-xs font-semibold bg-[#E94E5E] text-white px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );

  return (
    <nav className="w-full text-white flex justify-center lg:justify-between items-center px-6 lg:px-12 py-3 shadow-md relative">
      {/* Mobile Logo */}
      <div className="flex lg:hidden justify-center w-full mb-2">
        <NavLink to="/">
          <img src={logoGif} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </NavLink>
      </div>

      {/* Desktop Logo */}
      <div className="hidden lg:flex items-center gap-2">
        <NavLink to="/">
          <img src={logoGif} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </NavLink>
      </div>

      {/* Middle Navigation (Desktop only) */}
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

      {/* Right Section */}
      <div className="flex items-center gap-4 justify-center lg:justify-end w-full lg:w-auto">
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
          <div 
            className="relative hidden lg:block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="flex items-center gap-2 bg-[#2A3142] hover:bg-[#3A4052] px-4 py-2 rounded-full transition"
            >
              <User className="w-5 h-5" />
              <span className="text-sm">{user.name}</span>
            </button>
            
            {/* Dropdown */}
            <div 
              className={`absolute right-0 mt-2 bg-[#170E28] rounded-2xl shadow-2xl py-4 w-64 transition-all duration-200 z-50 origin-top-right overflow-hidden 
                ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
            >
              <div className="p-4 text-center">
                <img 
                  src={user.avatar} 
                  alt="User Avatar" 
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover border-4 border-transparent ring-2 ring-purple-600/50"
                />
                <p className="text-lg font-semibold text-white">{user.name}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>

              <div className="flex justify-center gap-2 px-4 py-3">
                <button
                  onClick={() => setActiveTab('Website')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
                    activeTab === 'Website'
                      ? 'bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-white shadow-lg shadow-purple-900/50'
                      : 'bg-[#170E28] text-gray-400 border border-[#ffffff10]'
                  }`}
                >
                  Website
                </button>
                <button
                  onClick={() => setActiveTab('Dashboard')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
                    activeTab === 'Dashboard'
                      ? 'bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-white shadow-lg shadow-purple-900/50'
                      : 'bg-[#170E28] text-gray-400 border border-[#ffffff10]' 
                  }`}
                >
                  Dashboard
                </button>
              </div>

              <div className="flex flex-col mt-2">
                <DropdownLink icon={User} label="User Profile" path="/profile" />
                <DropdownLink icon={Users} label="Referrals" path="/referrals" />
                <DropdownLink icon={Gift} label="Rewards" path="/rewards" badge={`${user.points} Points`} />
              </div>

              <div className="mt-2 pt-2">
                <DropdownLink icon={LogOut} label="Log out" onClick={handleLogout} path="/" />
              </div>
            </div>
          </div>
        )}

        {/* MobileNav centered */}
        <div className="lg:hidden flex justify-center">
          <MobileNav />
        </div>
      </div>

      {/* Mobile Chatbot Button - top right */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button className="p-3 rounded-full bg-[#6C3EF8] shadow-lg hover:bg-[#A35CF8] transition">
          💬
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
