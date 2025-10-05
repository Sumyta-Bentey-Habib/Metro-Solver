"use client";
import React, { useEffect, useState } from "react";
import { Layers, Globe, Rocket, Palette, Settings, Headphones } from "lucide-react";
import textgif from "../assets/gifs/Frame 1229.gif";

const Whitelabel = () => {
   useEffect(() => {
          document.title = "Whitelabel Solutions";
        }, []);
  const [activeTab, setActiveTab] = useState("features");

  const tabs = [
    { id: "features", label: "Features" },
    { id: "benefits", label: "Benefits" },
    { id: "faq", label: "FAQ" },
  ];

  const features = [
    {
      icon: Layers,
      title: "Website Templates",
      desc: "Fully rebrandable templates tailored for your clients’ businesses.",
    },
    {
      icon: Globe,
      title: "E-Commerce Platforms",
      desc: "Custom online store systems — ready to launch under your brand.",
    },
    {
      icon: Rocket,
      title: "SaaS Dashboards",
      desc: "Offer dashboard or SaaS tools as your own in days — not months.",
    },
    {
      icon: Palette,
      title: "Creative Assets",
      desc: "Logos, design packs, and visual kits you can personalize for clients.",
    },
    {
      icon: Settings,
      title: "Marketing Automation",
      desc: "End-to-end automated campaign systems rebranded with your logo.",
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      desc: "We provide ongoing tech support and updates under your name.",
    },
  ];

  return (
    <section className="bg-[#1E2433] text-white py-16 px-6 lg:px-20">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span>Our</span>
            <img
              src={textgif}
              alt="Animated Text"
              className="h-15 w-auto inline-block"
            />
            <span>Whitelabel Solutions</span>
          </div>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Empower your business with customizable, ready-to-brand platforms — designed to let you focus on growth while we handle the technology behind the scenes.
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
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-[#2A3142] rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-[#6C3EF8] hover:bg-gradient-to-r hover:from-[#2A3142] hover:to-[#3C2358] transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] rounded-xl">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-white font-medium border border-[#ffffff30] hover:opacity-90 transition-all">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default Whitelabel;
