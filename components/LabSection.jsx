import Image from "next/image";

export default function LabSection() {
  const stats = [
    {
      value: "15mn+",
      label: "In funding raised",
      icon: (
        <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: "20+",
      label: "Businesses incubated",
      icon: (
        <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073A2.25 2.25 0 0118 20.5H6a2.25 2.25 0 01-2.25-2.277V14.15M12 15V3.75m0 0L8.25 7.5M12 3.75L15.75 7.5" />
        </svg>
      )
    },
    {
      value: "35+",
      label: "Jobs fostered in our",
      icon: (
        <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073A2.25 2.25 0 0118 20.5H6a2.25 2.25 0 01-2.25-2.277V14.15M3.75 9.75h16.5v4.4H3.75V9.75z" />
        </svg>
      )
    }
  ];

  const stages = [
    {
      title: "Start & Validate",
      desc: "Aspiring entrepreneurs who want to build a business and need support getting started.",
      icon: (
        <svg className="w-6 h-6 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Building a Product",
      desc: "For teams building out products and taking them to market.",
      icon: (
        <svg className="w-6 h-6 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      title: "Launch and scale",
      desc: "For scaleups growing to meet the needs of new customers and markets.",
      icon: (
        <svg className="w-6 h-6 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-[1340px] mx-auto px-4 md:px-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              <span className="text-[#6B7280] text-[13px] font-semibold tracking-wide uppercase">LAB</span>
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
              TechStalwarts LAB
            </h2>

            {/* Quote line */}
            <p className="text-[17px] font-semibold text-[#1A1A1A] mb-3">
              &ldquo;Helping startups at every stage&rdquo;
            </p>

            {/* Body text */}
            <p className="text-[14px] text-[#6B7280] leading-relaxed mb-8 max-w-lg">
              We are digital natives with experience in SaaS, e-commerce, insurance and high-tech industries! Whether a startup or a big company we&apos;ve got you covered.
            </p>

            {/* Team Photo */}
            <div className="relative w-full h-[280px] md:h-[340px] rounded-xl overflow-hidden mb-0 flex-grow">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&h=600&q=80"
                alt="TechStalwarts team working together"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Stats Bar — floats at bottom partially */}
            <div className="bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-xl px-6 py-5 grid grid-cols-3 divide-x divide-gray-100 -mt-0 z-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-3 px-3 first:pl-0 last:pr-0">
                  <div className="mt-0.5 shrink-0">{stat.icon}</div>
                  <div>
                    <p className="text-[18px] font-bold text-[#1A1A1A] leading-none mb-1">{stat.value}</p>
                    <p className="text-[12px] text-[#3B82F6] leading-tight">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — 3 stacked cards */}
          <div className="flex flex-col gap-5 justify-center">
            {stages.map((stage, idx) => (
              <div key={idx} className="bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] rounded-xl px-7 py-7 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  {stage.icon}
                  <h3 className="text-[17px] font-bold text-[#1A1A1A]">{stage.title}</h3>
                </div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed pl-10">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
