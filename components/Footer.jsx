import Link from "next/link";

export default function Footer() {
  const services = [
    "UI/UX Services", "Web Development", "Platform Development", 
    "Quality Assurance", "Product Development", "AI/ML", 
    "Tech Consultancy", "Cloud Computing", "Outsourced Product Development", 
    "Digital Marketing"
  ];

  const industriesCol1 = [
    "Healthcare", "News", "Entertainment", "Travel", "Events", 
    "Restaurant", "Logistics", "Aviation", "EV", "Agriculture"
  ];

  const industriesCol2 = [
    "SaaS", "Game App", "Finance", "Politics", "Wellness", 
    "Estate", "Education", "E-commerce", "Social Networking"
  ];

  const products = ["JARVIS", "EVJoints", "LenDen Club", "TransBnk"];

  return (
    <footer className="bg-[#212121] text-[#A0A0A0] pt-16 pb-12 font-sans w-full block">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        
        {/* Top: Logo, Contact & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 pb-10 border-b border-[#333333]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#E8192C">
                <path d="M4 3v18l9-9-9-9z"/>
                <path d="M14 8v8l4-4-4-4z"/>
              </svg>
              <span className="text-white font-extrabold text-[22px] tracking-tight lowercase">
                techstalwarts<span className="text-[#E8192C]">.</span>
              </span>
            </Link>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#E8192C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[13.5px] font-medium">+91 9930602530</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#E8192C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[13.5px] font-medium">business@techstalwarts.com</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E8192C]">
                <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E8192C]">
                <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E8192C]">
                <svg className="w-[20px] h-[20px] text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Links Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-20">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-6 text-[15px] tracking-wide">About</h3>
            <ul className="space-y-3.5">
              {["About Company", "Life@Techstalwarts", "Career"].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] hover:text-[#E8192C] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-6 text-[15px] tracking-wide">Services</h3>
            <ul className="space-y-3.5">
              {services.map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] hover:text-[#E8192C] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries (Spans 2 columns on large screens) */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-bold text-white mb-6 text-[15px] tracking-wide">Industries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <ul className="space-y-3.5">
                {industriesCol1.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-[13px] hover:text-[#E8192C] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3.5 mt-3.5 sm:mt-0">
                {industriesCol2.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-[13px] hover:text-[#E8192C] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-6 text-[15px] tracking-wide">Products</h3>
            <ul className="space-y-3.5">
              {products.map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] hover:text-[#E8192C] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
          <div>
            <h4 className="font-bold text-white text-[15px] mb-5 tracking-wide">Mumbai</h4>
            <p className="text-[13px] leading-relaxed mb-5 max-w-[260px]">
              7th floor, Dheeraj Kawal, Vikhroli (Mumbai) Commercial Real Estate
            </p>
            <div className="flex items-center gap-2.5 text-[#E8192C] font-bold text-[13.5px]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9930602530</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-[15px] mb-5 tracking-wide">Bhopal</h4>
            <p className="text-[13px] leading-relaxed mb-5 max-w-[260px]">
              1st Floor, 96 Gargi Rani Complex, Zone II, MP Nagar
            </p>
            <div className="flex items-center gap-2.5 text-[#E8192C] font-bold text-[13.5px]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9630534817</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-[15px] mb-5 tracking-wide">Dubai</h4>
            <p className="text-[13px] leading-relaxed mb-5 max-w-[260px]">
              Bay Square, Building no. 2, 8th floor, 805, Business Bay
            </p>
            <div className="flex items-center gap-2.5 text-[#E8192C] font-bold text-[13.5px]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+971 547792530</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <Link 
        href={`https://wa.me/917909138117?text=${encodeURIComponent("Hi, I just saw your work on the TechStalwarts replica and wanted to reach out regarding a potential collaboration.")}`} 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-white"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </Link>
    </footer>
  );
}
