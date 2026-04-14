"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-[1340px] mx-auto px-4 md:px-10">
        
        {/* Header Area */}
        <div className="mb-10 lg:w-[35%]">
          <div className="flex items-center gap-2 mb-3">
            {/* Small red icon from screenshot */}
            <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              <path d="M12 5 9.04 9.2a2 2 0 0 0-.2.4v0c-.15.42-.08.82.2 1.1A2.2 2.2 0 0 0 11 11h2.2a2 2 0 0 1 1.7 3v0a2 2 0 0 1-2 2h-1"/>
            </svg>
            <span className="text-[#6B7280] font-medium text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-[#1A1A1A] tracking-tight">
            We are here for you
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
          
          {/* Left Sidebar Layout - Scrollable without visible scrollbar */}
          <div className="lg:w-[35%] flex flex-col gap-3.5 max-h-[540px] overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {services.map((service) => {
              const isActive = activeTab === service.id;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left rounded-xl p-4 md:px-5 md:py-4 transition-all duration-300 flex items-start gap-4 shadow-sm flex-shrink-0
                    ${isActive 
                      ? 'bg-[#151B2B] !shadow-md scale-[1.01]' 
                      : 'bg-[#FCFCFD] hover:bg-gray-50 border border-t-0 border-l-0 border-r-0 border-b-gray-100/50'
                    }`}
                >
                  {/* Icon */}
                  <div className={`mt-0.5 ${isActive ? 'text-[#E8192C]' : 'text-[#E8192C]'}`}>
                     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                     </svg>
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className={`text-[16px] font-bold mb-1 tracking-tight ${isActive ? 'text-white' : 'text-[#1A1A1A]'}`}>
                      {service.name}
                    </h3>
                    <p className={`text-[12px] leading-relaxed ${isActive ? 'text-gray-300 font-normal opacity-90' : 'text-[#8c94a3]'}`}>
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Panel Layout */}
          <div className="lg:w-[65%] sticky top-24 self-start flex flex-col h-[540px] justify-between">
            <div>
              {/* Image Container */}
              <div className="relative w-full h-[260px] md:h-[300px] rounded-xl overflow-hidden mb-5 flex-shrink-0">
                 <Image 
                   src={activeService.image}
                   alt={activeService.name}
                   fill
                   className="object-cover"
                   unoptimized
                 />
              </div>

              {/* Text Area */}
              <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-3">
                {activeService.name}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#6B7280] mb-5 font-medium max-w-3xl">
                {activeService.longDesc}
              </p>

              {/* Technologies Section */}
              {activeService.techIcons && activeService.techIcons.length > 0 && (
                <div>
                  <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-3">Technologies</h4>
                  <div className="flex gap-3 items-center">
                    {activeService.techIcons.map((tech, idx) => (
                      <div 
                        key={idx} 
                        className="w-[36px] h-[36px] rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm"
                        style={{ backgroundColor: tech.color }}
                        title={tech.name}
                      >
                        {tech.letter}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Read More Link correctly bottom-aligned */}
            <div className="mt-auto pb-4">
              <button className="flex items-center gap-2 text-[14px] font-medium text-gray-800 hover:text-[#E8192C] transition-colors group">
                <span className="italic">Read more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <div className="w-[28px] h-[2.5px] bg-gray-400 mt-1.5 rounded-full"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
