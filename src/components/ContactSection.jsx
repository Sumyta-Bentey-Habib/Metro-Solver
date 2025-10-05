import React from 'react';
import {
  Linkedin,
  Facebook,
  Instagram,
  X, 
  Youtube,
  Dribbble, 
  Send, 
} from 'lucide-react';

import logo from "../assets/gifs/Frame.gif";


const ContactSection = () => {
  return (
    <section className="bg-[#0A0A1F] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 bg-[#121229] p-8 lg:p-12 rounded-3xl">
        
        {/* Left Side: Text and Social Icons */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold mt-8 mb-4 leading-tight">
              Still Have <span className="block">A Questions?</span>
                <img src={logo} alt="Logo" className="inline-block ml-2 -mt-4" />
              
            </h2>
          </div>
          
          <div className="flex gap-4 mt-8 lg:mt-0">
            <a href="#" className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <Facebook className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <Instagram className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <X className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <Youtube className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <Dribbble className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 bg-[#1E1E2E] p-8 lg:p-12 rounded-2xl shadow-xl border border-white/5">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name..."
                className="w-full px-4 py-3 rounded-xl bg-[#2A3142] border border-transparent 
                           focus:border-purple-600 focus:outline-none text-white placeholder-gray-500 transition"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-3 rounded-xl bg-[#2A3142] border border-transparent 
                           focus:border-purple-600 focus:outline-none text-white placeholder-gray-500 transition"
              />
            </div>

            {/* WhatsApp/Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                WhatsApp/Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your number..."
                className="w-full px-4 py-3 rounded-xl bg-[#2A3142] border border-transparent 
                           focus:border-purple-600 focus:outline-none text-white placeholder-gray-500 transition"
              />
            </div>

            {/* Which Are You Looking For Support in? */}
            <div>
              <label htmlFor="service" className="block text-gray-300 text-sm font-medium mb-2">
                Which Are You Looking For Support in?
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-xl bg-[#2A3142] border border-transparent 
                           focus:border-purple-600 focus:outline-none text-gray-300 transition
                           appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010L12%2015L17%2010H7Z%22%20fill%3D%22%239CA3AF%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:1em] bg-[position:calc(100%-1em)_center]"
              >
                <option value="">Choose services</option>
                <option value="web-dev">Web Development</option>
                <option value="app-dev">App Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            {/* How Can We Help? */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                How Can We Help?
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Message goes in here..."
                className="w-full px-4 py-3 rounded-xl bg-[#2A3142] border border-transparent 
                           focus:border-purple-600 focus:outline-none text-white placeholder-gray-500 transition resize-y"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 text-base font-semibold px-8 py-3 rounded-xl 
                           bg-gradient-to-r from-purple-500 to-indigo-600 
                           hover:from-purple-600 hover:to-indigo-700 
                           shadow-xl shadow-purple-900/50 transition duration-300"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;