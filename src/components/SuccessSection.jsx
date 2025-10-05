"use client";
import React, { useState } from "react";
import { CalendarDays, Users } from "lucide-react";
import image from "../assets/images/image.jpg";
const SuccessSection = () => {
  const [activeTab, setActiveTab] = useState("case");

  const tabs = [
    { id: "success", label: "Success Stories" },
    { id: "case", label: "Case Studies" },
    { id: "blog", label: "Blog and News" },
  ];

  const cards = [
    {
      id: 1,
      title: "The Future of Metro Systems by Company",
      desc: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
      date: "Mar 14, 2025",
      views: "25k",
      img: image,
    },
    {
      id: 2,
      title: "The Future of Metro Systems by Company",
      desc: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
      date: "Mar 14, 2025",
      views: "25k",
      img: image,
    },
    {
      id: 3,
      title: "The Future of Metro Systems by Company",
      desc: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
      date: "Mar 14, 2025",
      views: "25k",
      img: image,
    },
  ];

  return (
    <section className="bg-[#0A0A1F] text-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            The Success Stories
            <br />
            Case Studies & Blog
          </div>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Based on the description of Metro Solver and the image provided, here
          is a 6-step process that Metro Solver uses to scale a customer's
          business.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] border border-[#ffffff40]"
                  : "bg-[#2A3142] hover:bg-gradient-to-r hover:from-[#6C3EF8] hover:to-[#A35CF8]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#2A3142] rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-[#6C3EF8] hover:bg-gradient-to-r hover:from-[#2A3142] hover:to-[#3C2358] transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{card.desc}</p>

              <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{card.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{card.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-white font-medium border border-[#ffffff30] hover:opacity-90 transition-all">
          View More
        </button>
      </div>
    </section>
  );
};

export default SuccessSection;
