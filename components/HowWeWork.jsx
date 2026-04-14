import Image from "next/image";

export default function HowWeWork() {
  const steps = [
    { 
      name: "Planning", 
      desc: "Planning: Set goals, allocate resources, and outline timelines for effective project execution and success.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&h=250&q=80"
    },
    { 
      name: "Research", 
      desc: "Studying user behaviors and needs to inform the creation of intuitive and user-centered digital interfaces and experiences.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&h=250&q=80"
    },
    { 
      name: "Design", 
      desc: "Crafting visually appealing and user-centered interfaces that seamlessly blend form and function to enhance user experiences.",
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&h=250&q=80"
    },
    { 
      name: "Development", 
      desc: "Translating design interactions into code to create the best experience through intuitive flows and clear architectures.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&h=250&q=80"
    },
    { 
      name: "Quality Assurance", 
      desc: "Extensive manual and system testing to ensure flawless functionality before release.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=250&q=80"
    },
    { 
      name: "Usability Testing", 
      desc: "Validating user flows with real audiences to capture necessary refinements and polish.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&h=250&q=80"
    },
    { 
      name: "Client Feedback", 
      desc: "Pivoting and iterating meticulously based on core stakeholder input and active revisions.",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&h=250&q=80"
    },
    { 
      name: "Product Launch", 
      desc: "Final deployment protocols followed by active monitoring for the live production environment.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5] font-sans overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 md:px-10">
        
        {/* Header Block (Left aligned) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            <span className="text-[#6B7280] font-medium text-sm">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-[34px] font-extrabold text-[#1A1A1A] tracking-tight">
            How we work
          </h2>
        </div>

      </div>

      {/* Horizontally Scrollable Container */}
      {/* Placed outside the inner container on purpose to allow full-bleed scrolling edge */}
      <div className="w-full">
        <div className="max-w-[1340px] mx-auto px-4 md:px-10">
            <div className="flex overflow-x-auto gap-8 pb-10 snap-x custom-scrollbar [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
              
              {steps.map((step, idx) => (
                <div key={idx} className="min-w-[280px] md:min-w-[320px] flex flex-col justify-between snap-start">
                  
                  {/* Top Content Box */}
                  <div>
                    {/* Image Box */}
                    <div className="relative w-full h-[180px] md:h-[200px] rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100">
                      <Image 
                        src={step.img}
                        alt={step.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <h4 className="text-[20px] font-bold text-[#1A1A1A] mb-3">{step.name}</h4>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed pr-4 opacity-90">{step.desc}</p>
                  </div>

                  {/* Bottom Timeline Track Element */}
                  <div className="mt-14 relative flex flex-col items-start w-full">
                    {/* Red Pin inside normal flow so it stays above track */}
                    <div className="text-[#E8192C] ml-8 mb-2">
                       <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                       </svg>
                    </div>

                    {/* Continuous Gray Bar Fragment */}
                    <div className="w-[calc(100%+32px)] h-4 bg-[#E0E0E0] relative flex items-center">
                       {/* Dashed line across */}
                       <div className="absolute inset-0 border-t-4 border-dashed border-white top-1/2 -translate-y-1/2 scale-y-50"></div>
                       {/* Green Dot exactly below pin */}
                       <div className="w-[14px] h-[14px] bg-[#22c55e] rounded-full absolute left-[38px]"></div>
                    </div>
                  </div>

                </div>
              ))}

            </div>
        </div>
      </div>

    </section>
  );
}
