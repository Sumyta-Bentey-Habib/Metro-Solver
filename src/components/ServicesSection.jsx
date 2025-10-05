import React, { useEffect } from "react";
import {
  Megaphone,
  PenTool,
  Code,
  ShoppingBag,
  Palette,
  Scissors,
  Shirt,
  Globe,
  Diamond,
  Gift,
} from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    icon: <Megaphone className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Creative Writing",
    icon: <PenTool className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Web & Software Development",
    icon: <Code className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "E-Commerce Solution",
    icon: <ShoppingBag className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Graphic Design",
    icon: <Palette className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Video Editing",
    icon: <Scissors className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Merchandise",
    icon: <Shirt className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Premium Website",
    icon: <Globe className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Premium Domains",
    icon: <Diamond className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Special Combo",
    icon: <Gift className="w-10 h-10 text-yellow-400" />,
  },
];

const ServicesSection = () => {
   useEffect(() => {
          document.title = "Our Services";
        }, []);
  return (
    <section className="bg-[#0A0A1F] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400">
          We are constantly growing, learning, and improving — your creative
          digital partner.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] hover:bg-gradient-to-br hover:from-[#3b0764] hover:to-[#4c1d95] transition-all duration-500 ease-in-out rounded-2xl p-6 text-left shadow-md border border-transparent hover:border-purple-500"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gray-800 rounded-xl p-3">{service.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm text-center">
              We are constantly growing and improving. Enter your creative
              digital sanctuary.
            </p>
            <div className="text-center mt-4">
              <a
                href="#"
                className="text-purple-400 text-sm font-medium hover:text-purple-300 transition"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
