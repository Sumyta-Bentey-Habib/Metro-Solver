import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, FileText, Bookmark, Info, Headphones } from "lucide-react";

const MobileNav = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", path: "/", icon: Home, label: "Home" },
    { id: "services", path: "/services", icon: FileText, label: "Services" },
    { id: "whitelabel", path: "/white-label", icon: Bookmark, label: "Whitelabel" },
    { id: "about", path: "/about", icon: Info, label: "About" },
    { id: "contact", path: "/contact", icon: Headphones, label: "Contact" },
  ];

  // Automatically set active state based on current route
  useEffect(() => {
    const current = menuItems.find((item) => location.pathname === item.path);
    if (current) setActive(current.id);
  }, [location.pathname]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
      <div className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center w-full"
            >
              {/* Floating icon */}
              <div
                className={`transition-all duration-300 ${
                  isActive
                    ? "-translate-y-6 bg-purple-600 p-3 rounded-full shadow-lg text-white"
                    : "translate-y-0"
                }`}
              >
                <Icon size={22} className={isActive ? "text-white" : "text-gray-400"} />
              </div>

              {/* Label (only visible when active) */}
              {isActive && (
                <span className="mt-2 text-sm font-medium text-purple-500 transition-opacity duration-300">
                  {item.label}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
