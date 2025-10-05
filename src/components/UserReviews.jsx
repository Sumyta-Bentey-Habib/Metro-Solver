"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import image from "../assets/images/image.jpg";

const UserReviews = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Reviews" },
    { id: "positive", label: "Positive" },
    { id: "critical", label: "Critical" },
  ];

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      rating: 5,
      review:
        "Metro Solver completely transformed our workflow! The system is fast, reliable, and very intuitive.",
      img: image,
      date: "Mar 10, 2025",
    },
    {
      id: 2,
      name: "Sophia Lee",
      role: "Product Manager",
      rating: 4,
      review:
        "Great experience overall! Support team was super helpful. Would love to see more customization options.",
      img: image,
      date: "Feb 22, 2025",
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Business Analyst",
      rating: 5,
      review:
        "Amazing tool. Boosted our efficiency by 40%! Highly recommended for enterprises managing metro projects.",
      img: image,
      date: "Jan 15, 2025",
    },
  ];

  return (
    <section className="bg-[#0A0A1F] text-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Hear from professionals and companies who trust Metro Solver to power
          their projects.
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

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#2A3142] rounded-2xl p-6 shadow-lg border border-transparent hover:border-[#6C3EF8] hover:bg-gradient-to-r hover:from-[#2A3142] hover:to-[#3C2358] transition-all duration-300"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-500"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-300 text-sm mb-4">"{review.review}"</p>

            {/* Date */}
            <p className="text-xs text-gray-500">Reviewed on {review.date}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] text-white font-medium border border-[#ffffff30] hover:opacity-90 transition-all">
          Read More Reviews
        </button>
      </div>
    </section>
  );
};

export default UserReviews;
