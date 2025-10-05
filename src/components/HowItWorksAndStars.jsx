import React from 'react';
import { 
  Phone,  
  ClipboardList, 
  Settings, 
  Wrench, 
  Package, 
  CheckCircle, 
} from 'lucide-react';

const HOW_IT_WORKS_STEPS = [
  { 
    id: '01', 
    title: 'Book a Call', 
    icon: Phone, 
    positionClass: 'top-[10%] right-[15%] lg:top-[12%] lg:right-[15%]' 
  },
  { 
    id: '02', 
    title: 'Requirement Analysis', 
    icon: ClipboardList, 
    positionClass: 'top-[30%] right-[0%] lg:top-[30%] lg:right-[-5%]' 
  },
  { 
    id: '03', 
    title: 'Service Customisation', 
    icon: Settings, 
    positionClass: 'bottom-[10%] right-[15%] lg:bottom-[12%] lg:right-[15%]' 
  },
  { 
    id: '04', 
    title: 'Implement & Develop', 
    icon: Wrench, 
    positionClass: 'bottom-[30%] left-[0%] lg:bottom-[30%] lg:left-[-5%]' 
  },
  { 
    id: '05', 
    title: 'Quality Assurance', 
    icon: CheckCircle, 
    positionClass: 'top-[30%] left-[0%] lg:top-[30%] lg:left-[-5%]' 
  },
  { 
    id: '06', 
    title: 'Delivery and Support', 
    icon: Package, 
    positionClass: 'top-[10%] left-[15%] lg:top-[12%] lg:left-[15%]' 
  },
];

const STATS_DATA = [
  { value: '150+', label: 'Current Clients' },
  { value: '25k+', label: 'Completed Projects' },
  { value: '90+', label: 'Metro Solver Teams' },
];

const HowItWorksAndStats = () => {
  return (
    <section className="bg-[#0A0A1F] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center h-[600px] lg:h-[700px] mb-20">
          <div className="absolute z-10 w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex flex-col items-center justify-center text-center shadow-2xl shadow-purple-900/50">
            <h3 className="text-xl lg:text-2xl font-bold">How it Works?</h3>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-dashed border-gray-700">
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 bottom-[15%] left-[15%] -translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute w-2 h-2 rounded-full bg-gray-500 bottom-[15%] right-[15%] translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>

          {HOW_IT_WORKS_STEPS.map((step) => (
            <div 
              key={step.id}
              className={`absolute w-fit min-w-[200px] lg:min-w-[250px] px-4 py-3 rounded-full bg-[#1E1E2E] flex items-center gap-3 shadow-xl ${step.positionClass}`}
              style={{ zIndex: 10 }}
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {step.id}
                <div className="absolute inset-0.5 rounded-full bg-[#1E1E2E] flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-purple-400"/>
                </div>
              </div>
              <span className="text-lg font-medium">{step.title}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10">
          {STATS_DATA.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#1E1E2E] p-8 rounded-2xl shadow-xl border border-white/5 flex flex-col items-center justify-center"
            >
              <p className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-2">
                {stat.value}
              </p>
              <p className="text-lg lg:text-xl text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksAndStats;
