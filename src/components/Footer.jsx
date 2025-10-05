import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import {
  FaMeta,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaTiktok,
} from "react-icons/fa6";
import { SiAmazonwebservices } from "react-icons/si";

import Newsletter from "./Newsletter";

const currencies = [
  { code: "USD", name: "US Dollar", flag: "/flags/us.webp" },
  { code: "GBP", name: "British Pound", flag: "/flags/uk.webp" },
  { code: "CAD", name: "Canadian Dollar", flag: "/flags/cn.webp" },
  { code: "AUD", name: "Australian Dollar", flag: "/flags/au.webp" },
  { code: "NZD", name: "New Zealand Dollar", flag: "/flags/nz.webp" },
  { code: "EUR", name: " (Ireland) Euro", flag: "/flags/ie.webp" },
  { code: "SGD", name: "Singapore Dollar", flag: "/flags/sg.webp" },
  { code: "BDT", name: "Bangladeshi Taka", flag: "/flags/bd.webp" },
  { code: "EUR", name: " (Germany)Euro", flag: "/flags/ge.webp" },
  { code: "EUR", name: " (Italy)Euro", flag: "/flags/it.webp" },
  { code: "EUR", name: " (France)Euro", flag: "/flags/fr.webp" },
  { code: "INR", name: "Indian Rupee", flag: "/flags/in.webp" },
];

const Footer = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[1]); // default GBP
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-[#1E2433] to-[#2B1E4E] text-white pt-16 pb-8 px-6 lg:px-20">
      <Newsletter />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Got Questions? Call us!</h3>
          <p className="text-gray-400 text-sm mb-4">
            Head office: Metro Solver Limited
            <br />
            Grantham Road, London E12 5LX, United Kingdom
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm mb-2">
            <Phone size={15} /> +447936 455446
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm mb-4">
            <Mail size={15} /> official@metrosolver.com
          </p>

          {/* Currency Dropdown */}
          <div className="relative w-60">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full bg-[#2A3142] text-gray-300 px-4 py-2 rounded-lg text-sm flex justify-between items-center focus:outline-none"
            >
              <span className="flex items-center gap-2">
                <img src={selectedCurrency.flag} className="w-4 h-4" alt="flag" />
                {selectedCurrency.code} - {selectedCurrency.name}
              </span>
              <span>▼</span>
            </button>

            {openDropdown && (
              <ul className="absolute mt-1 w-full bg-[#2A3142] text-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
                {currencies.map((currency, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-[#3a4152] flex items-center gap-2"
                    onClick={() => {
                      setSelectedCurrency(currency);
                      setOpenDropdown(false);
                    }}
                  >
                    <img src={currency.flag} className="w-4 h-4" alt="flag" />
                    {currency.code} - {currency.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-md mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Our Team</li>
            <li>User Profile</li>
            <li>White Labelling</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold text-md mb-3">About Us</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Our Stories</li>
            <li>Career</li>
            <li>Send Message</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-md mb-3">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Start Earning</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-md mb-3">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Digital Marketing</li>
            <li>Creative Writing</li>
            <li>Web & Software Development</li>
            <li>E-Commerce Solution</li>
            <li>Graphic Design</li>
            <li>Video Editing</li>
            <li>Merchandise</li>
            <li>Premium Website</li>
            <li>Premium Domains</li>
            <li>Special Combo</li>
          </ul>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 border-t border-[#ffffff20] pt-6 mt-8">
        <FaMeta size={26} className="text-gray-300 hover:text-white transition" />
        <FaGoogle size={26} className="text-gray-300 hover:text-white transition" />
        <FaMicrosoft size={26} className="text-gray-300 hover:text-white transition" />
        <SiAmazonwebservices size={26} className="text-gray-300 hover:text-white transition" />
        <FaAmazon size={26} className="text-gray-300 hover:text-white transition" />
        <FaTiktok size={26} className="text-gray-300 hover:text-white transition" />
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-xs mt-6 border-t border-[#ffffff10] pt-4">
        © {new Date().getFullYear()} Metro Solver. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
