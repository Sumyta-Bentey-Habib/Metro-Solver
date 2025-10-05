import React from 'react';

const FEATURES = [
  {
    title: 'Cancel Anytime',
   
    desktopPosition: 'top-20 right-20', 
    style: 'bg-[#1E1E2E] text-white py-3 px-8 rounded-full transform -rotate-6 lg:self-start',
  },
  {
    title: '24/7 Customer Service',
    desktopPosition: 'top-52 right-0', 
    style: 'bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-4 px-10 rounded-3xl transform rotate-3 mt-10 lg:mt-0',
  },
  {
    title: '100% Secure Transaction', 
    desktopPosition: 'top-0 right-10', 
    style: 'bg-[#1E1E2E] text-white py-3 px-8 rounded-full transform rotate-3 mt-6 lg:mt-0 lg:self-start',
  },
  {
    title: 'Money Back Guarantee',
    desktopPosition: 'bottom-0 right-16', 
    style: 'bg-[#1E1E2E] text-white py-3 px-8 rounded-full transform -rotate-3 mt-10 lg:mt-0 lg:self-end',
  },
];

const WhyChooseSection = () => {
 
  const FeatureBubble = ({ title, style }) => (
    <div
      className={`text-2xl font-semibold w-fit shadow-2xl shadow-black/50 ${style}`}
    >
      {title}
    </div>
  );
  
  return (
    <div className="bg-[#0A0A1F] text-white py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center">
        
       
        <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Why You Choose <span className="block">Metro Solver?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is
            effortless and comfortable with our assistance.
          </p>
          <button
            className="text-base font-semibold px-8 py-3 rounded-xl 
                       bg-gradient-to-r from-purple-500 to-indigo-600 
                       hover:from-purple-600 hover:to-indigo-700 
                       shadow-xl shadow-purple-900/50 transition duration-300"
          >
            ✨ Book Now
          </button>
        </div>

        <div className="lg:w-1/2 relative h-[550px] flex flex-col justify-around items-center lg:items-start"> 
          
  
          <div className="lg:hidden w-full flex flex-col items-center gap-6">
            {/* The order is changed here to match the image's top-down visual flow */}
            <FeatureBubble {...FEATURES[2]} /> 
            <FeatureBubble {...FEATURES[0]} />
            <FeatureBubble {...FEATURES[1]} />
            <FeatureBubble {...FEATURES[3]} />
          </div>

          <div className="hidden lg:block absolute inset-0">
            
            {/* 1. 100% Secure Transaction (Highest position) */}
            <div className={`absolute ${FEATURES[2].desktopPosition}`}>
              <FeatureBubble {...FEATURES[2]} />
            </div>
            
            {/* 2. Cancel Anytime (Slightly below 100% Secure) */}
            <div className={`absolute ${FEATURES[0].desktopPosition}`}>
              <FeatureBubble {...FEATURES[0]} />
            </div>

            {/* 3. 24/7 Customer Service (Middle section) */}
            <div className={`absolute ${FEATURES[1].desktopPosition}`}>
              <FeatureBubble {...FEATURES[1]} />
            </div>

            {/* 4. Money Back Guarantee (Lowest section) */}
            <div className={`absolute ${FEATURES[3].desktopPosition}`}>
              <FeatureBubble {...FEATURES[3]} />
            </div>

            {/* 5. Description Block (The empty box placeholder) */}
            <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2">
                <div className="bg-[#1E1E2E] w-32 h-16 rounded-xl shadow-xl border border-white/5 opacity-0">
                    {/* Empty box, hidden to just occupy space or for future use */}
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;