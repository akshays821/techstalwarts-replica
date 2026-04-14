"use client";

import Image from "next/image";

export default function AIMLSection() {
  const features = [
    {
      title: "Generative AI for Innovation",
      desc: "Harness the power of generative AI to drive growth and foster creativity with our advanced systems",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Optimizing Data with AI Consulting",
      desc: "Maximize your data and AI strategies with our expert consulting services to achieve your business goals",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="6" rx="8" ry="3"/>
          <path d="M4 6v6a8 3 0 0 0 16 0V6M4 12v6a8 3 0 0 0 16 0v-6"/>
        </svg>
      )
    },
    {
      title: "Web3 Development for the Future",
      desc: "Embrace the decentralized future with our Web3 development services, ensuring security and scalability",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      title: "Tailored Software Solutions",
      desc: "Custom-built AI tools designed specifically around your unique operational bottlenecks",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      )
    },
    {
      title: "From Idea to Reality",
      desc: "End-to-end execution of deep tech and machine learning pipelines from scratch",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    }
  ];

  return (
      <section className="relative bg-[#0D0D1A] py-24 font-sans border-t-[8px] border-[#FCFCFD]">
        {/* Background Mesh */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1620825937374-87fc1a620f8d?auto=format&fit=crop&w=1920&q=80"
            alt="AI Background Mesh"
            fill
            className="object-cover opacity-[0.15]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A] via-[#0D0D1A]/60 to-[#0D0D1A]/20"></div>
        </div>

        <div className="relative z-10 max-w-[1340px] mx-auto px-4 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left Column (Text & Image) */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="11" width="18" height="10" rx="2"/>
                <circle cx="12" cy="5" r="2"/>
                <path d="M12 7v4M8 16h8"/>
              </svg>
              <span className="text-[#E8192C] font-semibold text-sm">AI/ML</span>
            </div>
            
            <h2 className="text-4xl md:text-[46px] font-extrabold text-white mb-6 leading-tight tracking-tight">
              A leading AI/ML Solution provider
            </h2>
            
            <h3 className="text-xl md:text-[22px] font-bold text-white mb-6 leading-snug">
              Crafting Cutting-Edge and Inspiring Solutions for the Dynamic Digital Landscape
            </h3>
            
            <p className="text-[#A0AAB0] text-[15px] leading-relaxed mb-8 max-w-xl">
              Discover a world of possibilities with our innovative AI and ML solutions, designed to streamline your business operations and uncover valuable insights. Experience the power of automation and data-driven decision making, empowering your business to thrive in the digital age
            </p>
            
            <button className="flex items-center gap-2 text-white font-medium hover:text-[#E8192C] transition-colors group mb-12 lg:mb-auto">
              <span>Read more</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Bottom Image Box matching layout */}
            <div className="relative w-full h-[250px] lg:h-[300px] rounded-2xl overflow-hidden mt-8 shadow-2xl">
              <Image 
                src="/ai_image.png"
                alt="AI Artwork"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Stacked Feature Cards */}
          <div className="flex flex-col gap-4">
             {features.map((item, idx) => (
                <div key={idx} className="bg-white/[0.04] backdrop-blur-sm shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-6 lg:p-7 flex gap-5 group">
                   {/* Icon */}
                   <div className="text-[#E8192C] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   {/* Text */}
                   <div>
                     <h4 className="text-white font-bold text-[17px] mb-2">{item.title}</h4>
                     <p className="text-[#9CA3AF] text-[13px] leading-relaxed">{item.desc}</p>
                   </div>
                </div>
             ))}
          </div>

        </div>
      </section>
  )
}
