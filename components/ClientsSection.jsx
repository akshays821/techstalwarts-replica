import { User } from "lucide-react";
import Image from "next/image";

export default function ClientsSection() {
  const brandNames = [
    "Maple", "Jarvis", "Aditya", "Helpie", "Nexus", 
    "Quant", "Vertex", "Pulse", "Titan", "Solaris"
  ];
  const logos = brandNames.map(
    (name) => `https://placehold.co/160x80/ffffff/333333?text=${name}`
  );

  return (
    <section className="bg-[#f8f9fa] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm mb-4">
          <div className="bg-blue-600 p-1 rounded-sm">
            <User size={16} strokeWidth={2} className="text-white" />
          </div>
          <span className="text-gray-500 font-semibold text-xs tracking-wider uppercase">
            Our Clients
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-2xl">
          Happy clients <br />
          with <span className="text-[#E8192C]">760+</span> successful Projects
        </h2>
      </div>

      <div className="relative w-full overflow-hidden pb-8 mt-12 flex">
        <div className="flex animate-marquee gap-6 whitespace-nowrap min-w-max">
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-6 w-[220px] h-[100px] hover:shadow-md transition-shadow shrink-0"
            >
              <Image 
                src={src} 
                alt="Client Logo" 
                width={160} 
                height={80} 
                unoptimized
                className="opacity-80 hover:opacity-100 transition-opacity object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
