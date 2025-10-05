import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';

const CATEGORIES = [
  'Digital Marketing',
  'Web & Software Development',
  'Graphic Design & Logo',
  'Multimedia & Video Editing',
  'Creative Writing Solutions',
  'E-Commerce Solutions',
  'Refund, Earn & Cancel Policies',
  'Getting Started & General Info',
  'General Policies & Customer Support',
];


const DIGITAL_MARKETING_FAQS = [
  {
    question: 'What services do you offer in digital marketing?',
    answer: 'We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.',
  },
  {
    question: 'How can digital marketing help my business?',
    answer: 'Digital marketing increases brand visibility, drives targeted traffic to your website, generates leads, and ultimately boosts sales and revenue through measurable campaigns.',
  },
  {
    question: 'How do you measure campaign success?',
    answer: 'We track key performance indicators (KPIs) such as conversion rates, return on ad spend (ROAS), cost per acquisition (CPA), website traffic, and engagement metrics.',
  },
  {
    question: 'Do you offer local SEO?',
    answer: 'Yes, we specialize in local SEO strategies, including Google My Business optimization, local citation building, and geo-targeted content creation to help you dominate your local market.',
  },
];


const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="py-4 border-b border-gray-700/50">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-200 hover:text-white transition duration-200"
        onClick={toggleFAQ}
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <p className="mt-3 text-base text-gray-400 pr-10">
          {faq.answer}
        </p>
      )}
    </div>
  );
};



const FAQSection = () => {
  // State to manage the currently selected category (to highlight it on the left)
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]); 
  // State to manage the currently open FAQ item index (for the accordion on the right)
  const [openFAQIndex, setOpenFAQIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0A0A1F] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and Scroll Buttons */}
        <div className="mb-12 flex justify-between items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Got Questions? <span className="block">We've got Answers</span>
          </h1>
          <div className="flex gap-3">
            <button className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <ChevronLeft className="w-6 h-6 text-gray-400" />
            </button>
            <button className="p-3 rounded-full bg-[#1E1E2E] hover:bg-[#2A3142] transition">
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
        
        {/* Main Content: Categories (Left) and FAQs (Right) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* Left Side: Category Navigation */}
          <div className="lg:w-1/3 space-y-3 p-6 lg:p-0 border-b lg:border-none border-gray-700/50">
            {CATEGORIES.map((category, index) => (
              <button
                key={category}
                className={`w-full text-left py-2 px-4 rounded-xl transition duration-200 
                            ${activeCategory === category
                              ? 'text-white font-semibold bg-gray-800/50 border-l-4 border-purple-500' // Active style
                              : 'text-gray-400 hover:text-white'
                            }`}
                onClick={() => setActiveCategory(category)}
              >
                {/* The 'Digital Marketing' category has a special gradient dot prefix */}
                {category === 'Digital Marketing' ? (
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500"></span>
                    {category}
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full border border-gray-500"></span>
                    {category}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-white">
              {activeCategory}
            </h3>
            
            {DIGITAL_MARKETING_FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQIndex === index}
                toggleFAQ={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;