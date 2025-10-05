import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react'; // Icon for the checkmark
import agent from "../../assets/images/agent.webp";

const AgentCard = ({ name, role, imageUrl, isSelected }) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden p-2 transition-all duration-300 group 
        ${isSelected 
            ? 'bg-gradient-to-br from-[#6C22E1] to-[#3A0F7E] shadow-xl' 
            : 'bg-transparent hover:bg-white/5 hover:shadow-lg'
        }`
      }
    >
      {/* Image Container with Gradient Effect on Selected */}
      <div className="relative rounded-lg overflow-hidden">
        {/* Placeholder image for the agent */}
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto object-cover"
        />
        
        {/* Subtle dark overlay for the card background color */}
        <div className="absolute inset-0 bg-gray-900/10"></div>
      </div>

      {/* Name and Role Overlay */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-4 pt-10 
          bg-gradient-to-t from-black/70 to-transparent 
          rounded-b-lg transition-all duration-300
          ${isSelected ? 'bg-gradient-to-t from-[#3A0F7E]/90 to-transparent' : ''}
        `}
      >
        <div className={`text-xl font-semibold mb-1 ${isSelected ? 'text-white' : 'text-white'}`}>{name}</div>
        <div className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{role}</div>
      </div>

      {/* Checkmark Icon for Selected/Hover state */}
      <div 
        className={`absolute bottom-4 right-4 
          w-6 h-6 rounded-full flex items-center justify-center transition-opacity duration-300
          ${isSelected ? 'opacity-100 text-[#9D71FF]' : 'opacity-0 group-hover:opacity-100 text-white'}
        `}
      >
        <CheckCircle size={24} fill="currentColor" className="bg-black/50 rounded-full" />
      </div>
    </div>
  );
};

// --- Main Agents Section Component ---
const MeetOurAgentsSection = () => {
  // Mock data for the categories and agents
  const categories = ['All', 'Agency', 'Creative', 'Leadership', 'Grow Marketing', 'Technology'];
  const [activeTab, setActiveTab] = useState('All');

  const mockAgents = [
    { id: 1, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'All', imageUrl: agent },
    { id: 2, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Creative', imageUrl: agent },
    { id: 3, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Leadership', imageUrl: agent },
    { id: 4, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Grow Marketing', imageUrl: agent },
    { id: 5, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Technology', imageUrl: agent },
    { id: 6, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Creative', imageUrl: agent },
    { id: 7, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Leadership', imageUrl: agent },
    { id: 8, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Agency', imageUrl: agent },
    { id: 9, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Agency', imageUrl: agent },
    { id: 10, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'All', imageUrl: agent },
    { id: 11, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Technology', imageUrl: agent },
    { id: 12, name: 'Ayesha Siddiqah', role: 'Co-founder Leader', category: 'Grow Marketing', imageUrl: agent },
    
  ];


  const filteredAgents = mockAgents.filter(agent => 
    activeTab === 'All' || agent.category === activeTab
  );

  return (
    <section className="bg-[#14062A] py-20 px-6 sm:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Meet Our Agents
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 p-2 mb-12 rounded-full border border-gray-700/50 bg-white/5 max-w-4xl mx-auto">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-[#6C22E1] text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-white/10'
                }`
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* We use 12 agents to match the 4x3 grid layout in the image */}
          {filteredAgents.slice(0, 12).map((agent, index) => (
            <AgentCard
              key={agent.id}
              {...agent}
              // The selected state is just for demonstration, mapping the first card
              isSelected={activeTab === 'All' && index === 0} 
              imageUrl={agent.imageUrl.replace('Agent+1', `Agent+${index + 1}`)} // Ensure unique placeholders
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <button className="px-10 py-3 border border-white/50 text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
            View More
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default MeetOurAgentsSection;