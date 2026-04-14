import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";

// Simple tech icon helper to approximate the look from the screenshot
const TechIcon = ({ name }) => {
  const getIconContent = () => {
    switch (name.toLowerCase()) {
      case "react": return <div className="text-[#61DAFB]"><svg width="14" height="14" viewBox="0 0 118 103" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59.1 12.2C46.8 12.2 36.3 22 36.3 34.3C36.3 46.6 46.8 56.4 59.1 56.4C71.4 56.4 81.9 46.6 81.9 34.3C81.9 22 71.4 12.2 59.1 12.2Z" fill="currentColor"/><path d="M59.1 0C85.5 0 108.3 12.1 117.9 28.5C118.4 29.3 118.4 30.2 117.9 31.1C108.3 47.5 85.5 59.6 59.1 59.6C32.7 59.6 9.9 47.5 0.3 31.1C-0.1 30.2 -0.1 29.3 0.3 28.5C9.9 12.1 32.7 0 59.1 0ZM59.1 53.6C82.1 53.6 102.3 43.1 110.8 28.5C102.3 13.9 82.1 3.4 59.1 3.4C36.1 3.4 15.9 13.9 7.4 28.5C15.9 43.1 36.1 53.6 59.1 53.6Z" fill="currentColor"/></svg></div>;
      case "node js": return <div className="text-[#339933]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.87 0l-9.92 5.75v11.53l9.92 5.75L21.78 17.28V5.75L11.87 0zm-7.9 16.14V8.1L11.87 3.5l7.9 4.6v8.04l-7.9 4.6-7.89-4.6z"/></svg></div>;
      case "swift": return <div className="text-[#F05138]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg></div>;
      case "kotlin": return <div className="text-[#7F52FF]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 24H0V0h24L12 12Z"/></svg></div>;
      case "laravel": return <div className="text-[#FF2D20]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4 6.8l-7.4-4-7.4 4v10.4l7.4 4 7.4-4V6.8z"/></svg></div>;
      case "python": return <div className="text-[#3776AB]"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.628 0 12-5.372 12-12C24 5.373 18.628 0 12 0zm0 4.114a4.114 4.114 0 110 8.228 4.114 4.114 0 010-8.228zm0 13.772a1.69 1.69 0 110-3.38 1.69 1.69 0 010 3.38z"/></svg></div>;
      default: return <div className="w-[10px] h-[10px] rounded-sm bg-gray-400"></div>;
    }
  };
  return <div className="flex items-center justify-center shrink-0">{getIconContent()}</div>;
};

export default function CaseStudies() {
  return (
    <section className="py-20 bg-[#F9F9F9] font-sans">
      <div className="max-w-[1340px] mx-auto px-4 md:px-10">
        
        {/* Header Block */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#6B7280] font-semibold text-[13px] tracking-wide uppercase">Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-[36px] font-extrabold text-[#1A1A1A] tracking-tight">
              Work we&apos;ve done recently
            </h2>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border border-gray-200 rounded-full text-[14px] font-medium text-[#1A1A1A] hover:border-[#E8192C] hover:text-[#E8192C] transition-colors bg-transparent">
            View All Projects
          </button>
        </div>

        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-[16px] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              
              {/* Image & Stats Container */}
              <div className="relative mb-12 rounded-t-[16px]">
                <div className="w-full h-[220px] relative rounded-t-[16px] overflow-hidden">
                  <Image 
                    src={study.image}
                    alt={study.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Subtle top-left gradient overlay mimicking the cards in the screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                </div>
                
                {/* Floating Stats Block directly mimicking screenshot */}
                <div className="absolute -bottom-8 left-0 w-full px-5 flex justify-center z-10">
                  <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.08)] rounded-[12px] w-full py-3.5 px-2 flex justify-around items-center">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col items-center justify-center text-center px-1">
                        <span className="text-[#D32F2F] font-bold text-[15px] leading-none mb-1">{stat.value}</span>
                        <span className="text-[#888888] text-[11px] leading-[1.3] font-medium whitespace-pre-wrap max-w-[80px]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Block */}
              <div className="px-6 pb-6 flex-grow flex flex-col pt-1">
                <span className="text-[#4A4A4A] text-[11px] font-semibold mb-1 tracking-wide">Case Study</span>
                <h3 className="text-[#1A1A1A] text-[17px] font-bold mb-3 tracking-tight">{study.name}</h3>
                
                <p className="text-[#757575] text-[13px] leading-relaxed mb-6 flex-grow">
                  {study.desc}
                </p>

                {/* Tech Tags matching layout */}
                <div className="flex flex-wrap gap-x-5 gap-y-3 mb-6">
                  {study.tech.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <TechIcon name={tag} />
                       <span className="text-[#333333] text-[12px] font-medium">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link inside card matching layout */}
                <button className="flex items-center gap-1.5 text-[13px] font-medium text-[#4A4A4A] hover:text-[#E8192C] transition-colors mt-auto w-fit group">
                  <span>Read more</span>
                  <svg className="w-[14px] h-[14px] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
