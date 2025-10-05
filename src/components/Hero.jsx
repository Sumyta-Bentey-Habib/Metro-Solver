import React, { useState } from "react";
import heroVideo from "../assets/video/v.mp4"; 
import textgif from "../assets/gifs/Frame 1229.gif";
import bot from "../assets/gifs/Frame 3.gif";

import ChatbotModal from "../components/ChatbotModal"; 
const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="hero bg-black min-h-screen text-white relative">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between py-20 px-6 sm:px-12 lg:px-20">
        
        <video
          src={heroVideo}
          className="w-full lg:w-1/2 max-w-lg rounded-lg shadow-2xl"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Expert to digitalise{" "}
            <img
              src={textgif}
              alt="Animated Text"
              className="h-10 md:h-16 w-auto inline-block align-bottom"
            />
          </h1>
          <p className="py-6 text-lg md:text-xl max-w-xl">
            We are constantly growing or learning and improving. Enter your
            personal real estate sanctuary, where finding the ideal home is.
          </p>
          <button
            className="text-lg font-semibold px-8 py-3 rounded-xl
              bg-gradient-to-r from-purple-500 to-indigo-600
              hover:from-purple-600 hover:to-indigo-700
              shadow-xl shadow-purple-900/50 transition duration-300"
          >
            ✨ Explore Now
          </button>
        </div>
        
      </div>
      
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
  <button 
    onClick={() => setIsChatOpen(true)} 
    className="p-2 rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
  >
      <img
          src={bot}
          alt="Chatbot Icon"
          className="w-16 h-16 cursor-pointer"
      />
  </button>
</div>

      <ChatbotModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
};

export default Hero;