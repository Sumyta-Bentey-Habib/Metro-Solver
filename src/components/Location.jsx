import React from "react";
import worldmap from "../assets/images/worldmap.jpg";

const Location = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${worldmap})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Box on the right side */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-[#1E2433] p-6 rounded-2xl shadow-lg max-w-sm text-white">
        <h2 className="text-xl font-bold mb-2">Our Location</h2>
        <p className="mb-2 text-white">
          Metro Solver Limited Grantham Road, London E12 5LX, United Kingdom
        </p>
        <p className=" text-white">Phone: +447936 455446</p>
        <p className=" text-white">Email: official@metrosolver.com</p>
      </div>
    </div>
  );
};

export default Location;
