import React from 'react';

// --- Component for a single Stat Card ---
const StatCard = ({ number, unit, label }) => {
  return (
    <div className="flex-1 min-w-[250px] p-8 rounded-xl bg-white/5 border border-white/10 shadow-lg text-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
      <div className="text-6xl md:text-7xl font-bold text-white mb-2">
        {/* Number with the '+' sign and distinctive color for the unit/plus */}
        {number}
        <span className="text-yellow-500 font-extrabold">{unit}</span>
      </div>
      <p className="text-lg text-gray-300 font-medium">
        {label}
      </p>
    </div>
  );
};

// --- Main Stats Section Component ---
const StatsSection = () => {
  // Data for the stats
  const stats = [
    { number: '150', unit: '+', label: 'Current Clients' },
    { number: '25k', unit: '+', label: 'Completed Projects' },
    { number: '90', unit: '+', label: 'Metro Solver Teams' },
  ];

  return (
    <section className="bg-[#14062A] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
        {stats.map((stat, index) => (
          <StatCard 
            key={index} 
            number={stat.number} 
            unit={stat.unit} 
            label={stat.label} 
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;