import React, { useEffect } from "react";
import { Building2, Users, Globe2, Rocket } from "lucide-react";

const About = () => {
   useEffect(() => {
          document.title = "About Us";
        }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E2433] to-[#2B1E4E] text-white px-6 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Metro Solver</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Metro Solver Limited is a global digital service provider based in London, United Kingdom.  
          We specialize in transforming ideas into impactful digital experiences through innovative solutions in
          <span className="text-[#A35CF8] font-semibold"> web development</span>,{" "}
          <span className="text-[#A35CF8] font-semibold">digital marketing</span>,{" "}
          <span className="text-[#A35CF8] font-semibold">creative design</span>, and{" "}
          <span className="text-[#A35CF8] font-semibold">software solutions</span>.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
        <div className="bg-[#2A3142] p-8 rounded-2xl shadow-lg hover:bg-[#3A4052] transition">
          <Building2 className="w-10 h-10 text-[#A35CF8] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            To empower businesses worldwide by providing smart, scalable, and secure digital solutions — helping brands thrive in the ever-evolving online marketplace.
          </p>
        </div>

        <div className="bg-[#2A3142] p-8 rounded-2xl shadow-lg hover:bg-[#3A4052] transition">
          <Rocket className="w-10 h-10 text-[#A35CF8] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            To be recognized as a leading digital powerhouse that inspires innovation, creativity, and growth across global industries.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2A3142] p-6 rounded-2xl hover:bg-[#3A4052] transition">
            <Users className="w-8 h-8 text-[#A35CF8] mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Teamwork</h4>
            <p className="text-gray-400 text-sm">
              Collaboration is at the heart of everything we do, ensuring shared success.
            </p>
          </div>
          <div className="bg-[#2A3142] p-6 rounded-2xl hover:bg-[#3A4052] transition">
            <Globe2 className="w-8 h-8 text-[#A35CF8] mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Global Reach</h4>
            <p className="text-gray-400 text-sm">
              We work with clients worldwide, adapting to local cultures and global trends.
            </p>
          </div>
          <div className="bg-[#2A3142] p-6 rounded-2xl hover:bg-[#3A4052] transition">
            <Rocket className="w-8 h-8 text-[#A35CF8] mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Innovation</h4>
            <p className="text-gray-400 text-sm">
              We embrace creativity and emerging technologies to stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
