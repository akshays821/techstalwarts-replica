export default function StatsBar() {
  const stats = [
    { 
      number: "200+", 
      label: "Clients\nServed", 
      icon: (
        <svg className="w-5 h-5 text-[#E8192C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      number: "200+", 
      label: "Talented\nTeam", 
      icon: (
        <svg className="w-5 h-5 text-[#E8192C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: "25+", 
      label: "Start-ups\nsupported", 
      icon: (
        <svg className="w-5 h-5 text-[#E8192C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      number: "75mn+", 
      label: "Value creation established\nwith start-ups", 
      icon: (
        <svg className="w-5 h-5 text-[#E8192C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 4h5m4-8H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full flex justify-center px-4 relative z-20">
      <div className="w-full max-w-[1100px] bg-white rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.1)] -mt-[75px] mb-12 px-6 py-6 md:p-8 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100 border border-gray-50">
        {stats.map((stat, idx) => (
          <div key={idx} className={`flex-1 flex items-start px-2 lg:px-6 w-full md:w-auto py-5 md:py-0 ${idx === 0 ? 'md:pl-0' : ''} ${idx === stats.length - 1 ? 'md:pr-0' : ''}`}>
            {/* Icon Box */}
            <div className="w-10 h-10 rounded bg-[#F5F5F5] flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              {stat.icon}
            </div>
            {/* Text Block */}
            <div className="flex flex-col">
              <h3 className="text-[20px] lg:text-[24px] font-extrabold text-[#1A1A1A] leading-tight mb-1">{stat.number}</h3>
              <p className="text-[13px] lg:text-[14px] text-[#6B7280] leading-snug whitespace-pre-line font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
