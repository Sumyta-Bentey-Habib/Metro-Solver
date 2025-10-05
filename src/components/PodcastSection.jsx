import React from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';
import image1 from "../assets/poadcast/one.webp";
import image2 from "../assets/poadcast/two.webp";
const PodcastCard = ({ title, duration, date, imageUrl }) => (
  <div className="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover brightness-75"
    />
    <div className="absolute inset-0 bg-black/30"></div>

    <div className="absolute top-4 left-4 text-white text-sm font-medium">
      <span className="flex items-center bg-black/50 px-3 py-1 rounded-full">
        <Clock size={16} className="mr-1" /> {duration}
      </span>
    </div>

    <div className="absolute top-4 right-4 text-white text-sm font-medium">
      <span className="flex items-center bg-black/50 px-3 py-1 rounded-full">
        <Calendar size={16} className="mr-1" /> {date}
      </span>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition">
        <svg className="ml-1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

const PodcastSection = () => {
  const podcastData = [
    {
      id: 1,
      title: 'How Brands Can Prepare for Black Friday & Christmas',
      duration: '30 Minute',
      date: 'Mar 11, 2025',
      imageUrl: image1,
    },
    {
      id: 2,
      title: 'Scaling Your Business with Metro Solver',
      duration: '25 Minute',
      date: 'Apr 02, 2025',
      imageUrl: image2,
    },
  ];

  return (
    <section className="min-h-screen bg-[#14062A] py-20 px-6 sm:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 lg:mb-0 max-w-lg">
          Did You Hear about <br /> Our Podcast?
        </h1>
        <p className="text-lg text-gray-300 max-w-md">
          Here’s how Metro Solver shares insights through engaging podcasts to help you grow your business.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {podcastData.map((podcast) => (
            <PodcastCard key={podcast.id} {...podcast} />
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition">
            <ChevronLeft size={24} />
          </button>
          <button className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
