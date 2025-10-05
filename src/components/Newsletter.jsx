"use client";
import React from "react";
import logogif from "../assets/gifs/Frame_1.gif";

const Newsletter = () => {
  return (
    <section className="text-center mb-14 bg-[#313f62] rounded-3xl p-5">
      {/* Logo + Tagline */}
      <div className="flex justify-center items-center gap-3 mb-6">
        <img src={logogif} alt="Metro Solver Logo" className="h-10 w-auto" />
        <div className="text-left">
          <h3 className="font-semibold text-xl">METRO SOLVER</h3>
          <p className="text-xs text-gray-300">your IT partner</p>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-2">Subscribe to Our Newsletter</h2>
      <p className="text-gray-400 mb-6">
        Join the 25000+ clients in our company
      </p>

      {/* Input field */}
      <div className="flex justify-center items-center gap-2 max-w-md mx-auto bg-[#2A3142] rounded-full p-1">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-transparent outline-none text-sm text-white placeholder-gray-400"
        />
        <button className="px-6 py-2 bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] rounded-full text-sm font-medium hover:opacity-90 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
