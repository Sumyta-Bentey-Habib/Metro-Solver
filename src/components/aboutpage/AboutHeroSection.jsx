import React from 'react';
import { Sparkles } from 'lucide-react'; 
 import  groupImage from "../../assets/images/group.webp";
const AboutHeroSection = () => {
  return (
    <section className="relative bg-[#14062A] py-20 px-6 sm:px-12 lg:px-20 min-h-[80vh] flex items-center overflow-hidden">
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-7xl mx-auto">
        
        {/* Left Content Area (Text) */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 pr-0 lg:pr-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Unveiling the Essence <br />
            Of Our Metro Solver
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
            Welcome to Metro Solver, where creativity meets strategy, and brands come 
            to life. We are not just a branding agency; we are architects of identity, 
            storytellers of success, and partners in your business journey. Metro Solver is a 
            hub of innovative minds, passionate about transforming concepts into captivating 
            brand experiences.
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            At Path our overarching goal is to redefine industry standards by providing a 
            dynamic and adaptive HR and CRM SaaS platform. We aim to empower 
            businesses of all sizes to optimise their operations, faster employee growth, 
            and cultivate enduring customer relationships.
          </p>
          
          {/* Book Now Button */}
          <button className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0 px-8 py-3 bg-[#6C22E1] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#5a1dc2] transition-colors duration-300">
            <Sparkles size={20} className="mr-2" /> Book Now
          </button>
        </div>

        {/* Right Image Area */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          {/* This is the main image with the rounded corner and border effect */}
          <div className="relative rounded-[2rem] p-2 bg-gradient-to-br from-[#6C22E1] to-[#3A0F7E] shadow-2xl">
            <img
              src={groupImage} 
              alt="Metro Solver Team Working"
              className="rounded-[1.7rem] object-cover w-[550px] h-[550px] md:w-[600px] md:h-[600px]"
            />
            {/* The small circular image/icon floating over the text on the left */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center p-1">
                <img 
                     src={ groupImage} // Placeholder for the floating logo/icon
                    alt="Floating Icon"
                    className="rounded-full w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;