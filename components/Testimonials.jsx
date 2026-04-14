"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-[#F5F5F5] font-sans">
      <div className="max-w-[1340px] mx-auto px-4 md:px-10">
        
        {/* Header Block */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-[#6B7280] font-medium text-sm">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-[38px] font-extrabold text-[#1A1A1A] tracking-tight max-w-xl leading-tight">
            Our Client loves us because of our Quality work.
          </h2>
        </div>

        {/* Custom Container for Card + Pagination */}
        <div className="max-w-5xl">
          {/* Main Card */}
          <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-14 mb-6">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
              
              {/* Left Content */}
              <div className="md:w-2/3 flex flex-col justify-between">
                
                {/* Red Quote Icon */}
                <div className="text-[#E8192C] mb-6">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote Text */}
                <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.8] mb-12 font-medium">
                  {`"${activeTestimonial.quote}"`}
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-[#1A1A1A] font-bold text-[18px] mb-1">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-[#9CA3AF] text-[14px]">
                    {activeTestimonial.company}
                  </p>
                </div>

              </div>

              {/* Right Image */}
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden relative grayscale">
                  <Image 
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Pagination Avatars */}
          <div className="flex justify-between items-center px-4">
             {/* Left side dash (visual flourish from reference) */}
             <div className="w-[30px] h-[4px] bg-gray-300 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 mt-4 hidden md:block"></div>

             <div className="flex gap-4 items-center ml-auto">
               {testimonials.map((test, idx) => {
                 const isActive = activeIndex === idx;
                 return (
                   <button 
                     key={test.id}
                     onClick={() => setActiveIndex(idx)}
                     className={`relative rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 cursor-pointer
                       ${isActive 
                         ? 'w-[56px] h-[56px] border-2 border-white ring-2 ring-pink-200 grayscale-0 shadow-md' 
                         : 'w-[44px] h-[44px] opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                       }`}
                   >
                     <Image 
                       src={test.image}
                       alt={test.name}
                       fill
                       className="object-cover"
                       unoptimized
                     />
                   </button>
                 )
               })}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
