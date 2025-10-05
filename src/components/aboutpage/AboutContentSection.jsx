import React from 'react';
 import  groupImage from "../../assets/images/group.webp";

const AboutContentSection = () => {
  return (
    <section className="bg-[#14062A] py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* --- Top Row: Mission, Story, and Image --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column: Image */}
          <div className="relative flex justify-center lg:justify-start">
            {/* The image has a distinctive rounded, glowing border effect */}
            <div className="p-1 rounded-[2rem] bg-gradient-to-br from-[#6C22E1] to-[#3A0F7E] shadow-2xl">
              <img
                src={ groupImage}
                alt="Metro Solver Team Meeting"
                className="rounded-[1.9rem] object-cover w-full h-full max-h-[400px] lg:max-h-full"
              />
            </div>
          </div>

          {/* Right Column: Mission and Story */}
          <div className="space-y-10">
            
            {/* Metro Solver Mission Card */}
            <div className="p-8 rounded-2xl border border-[#3A0F7E] bg-white/5 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Metro Solver Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to cover all your digital needs by providing innovative,
                comprehensive, and affordable solutions that meet your specific
                requirements and exceed your expectations. We are dedicated to
                delivering top-quality services that empower businesses to succeed in a
                competitive digital landscape.
              </p>
            </div>
            
            {/* Metro Solver Story Card */}
            <div className="p-8 rounded-2xl border border-[#3A0F7E] bg-white/5 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Metro Solver Story</h2>
              <p className="text-gray-300 leading-relaxed">
                In July 2023, a vision took shape that would redefine the landscape of
                digital services. This vision came from Nayeemul Karim, the founder and
                director of Metro Solver. The story began with Nayeemul and his co-
                founder, Shahriar Mahmud, who were facing a difficult situation while trying
                to launch their first business in the UK. They encountered a digital services
                market that was not only exorbitantly expensive but also lacked a
                comprehensive, all-in-one solution... <a href="#" className="text-[#9D71FF] font-semibold hover:underline">Read More</a>
              </p>
            </div>
            
          </div>
        </div>

        {/* --- Bottom Row: Global Reach, Conclusion, and Image --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Global Reach and Conclusion */}
          <div className="space-y-10">
            
            {/* Global Reach and Vision Card */}
            <div className="p-8 rounded-2xl border border-[#3A0F7E] bg-white/5 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Global Reach and Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                Today, Metro Solver is striving to extend its services worldwide, aiming to
                meet all digital needs from logo creation and branding to comprehensive
                marketing solutions. The firm's dedicated team of over 100 employees
                across various sectors ensures continuous improvement in quality and
                customer satisfaction.
              </p>
            </div>
            
            {/* Conclusion Card */}
            <div className="p-8 rounded-2xl border border-[#3A0F7E] bg-white/5 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed">
                Metro Solver's journey from a simple idea to a thriving digital services firm
                exemplifies resilience, innovation, and a steadfast commitment to solving
                customer problems. The company continues to evolve, driven by a
                talented team and visionary leadership, to provide exceptional digital
                solutions globally.
              </p>
            </div>
            
          </div>

          {/* Right Column: Image */}
          <div className="relative flex justify-center lg:justify-end lg:order-last">
            {/* The image has a distinctive rounded, glowing border effect */}
            <div className="p-1 rounded-[2rem] bg-gradient-to-br from-[#6C22E1] to-[#3A0F7E] shadow-2xl">
              <img
                src={ groupImage}
                alt="Metro Solver Team Collaboration"
                className="rounded-[1.9rem] object-cover w-full h-full max-h-[400px] lg:max-h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutContentSection;