import React, { useState } from "react";
import { Home, FileText, Bookmark, Info, Headphones } from "lucide-react";

const MobileNav = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "services", icon: FileText, label: "Services" },
    { id: "whitelabel", icon: Bookmark, label: "Whitelabel" },
    { id: "about", icon: Info, label: "About" },
    { id: "contact", icon: Headphones, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md">
      <div className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
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
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
