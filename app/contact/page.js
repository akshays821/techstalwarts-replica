"use client";

import ContactCTA from "@/components/ContactCTA";

/* ── ICONS ─────────────────────────────────────────────── */
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneLineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8192C">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
  </svg>
);

/* ── DATA ─────────────────────────────────────────────── */
const OFFICES = [
  {
    city: "Mumbai",
    address:
      "7th floor Dheeraj Kawal, Vikhroli (Mumbai) Commercial Real Estate, Mumbai, Maharashtra - 400070",
    phone: "+91 9930602530",
    mapSrc: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400&h=200&q=80",
  },
  {
    city: "Bhopal",
    address:
      "1st Floor, 96 Gargi Rani Complex, Zone II, MP Nagar, Bhopal, Madhya Pradesh - 462011",
    phone: "+91 9630534817",
    mapSrc: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&h=200&q=80",
  },
  {
    city: "Dubai",
    address:
      "Bay Square, Building no. 2, 8th floor, 805, Business Bay, Dubai, United Arab Emirates",
    phone: "+971 547792530",
    mapSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&h=200&q=80",
  },
];

/* ── PAGE ─────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── 1. BANNER ─────────────────────────────────────── */}
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="TechStalwarts Office Team"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            {/* You could add a text overlay here if the original has one, but the user requested the banner image */}
        </div>
      </div>

      {/* ── 2. HEADING CARD (overlaps banner) ─────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-20 md:-mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT: label + heading + description + office image */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <PhoneIcon />
                <span className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider">Contact Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
                Let&apos;s level up your brand,{" "}
                <span className="text-[#E8192C]">together</span>
              </h1>

              <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-8">
                Together, we can create a brand that inspires, empowers and makes
                an impact. Let&apos;s make it happen! Our team is ready to transform your vision into reality.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="TechStalwarts Team Collaboration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* RIGHT: office photo */}
            <div className="hidden lg:block relative min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Office Meeting"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── 3. DIRECT INQUIRY INFO ────────────────────────── */}
      <section className="bg-[#F9FAFB] py-20 px-4 md:px-8 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1A1A1A]">Business Inquiries</h3>
            <p className="text-[#4A4A4A] text-sm">For new projects and partnerships, reach out to our business team.</p>
            <a
              href="mailto:business@techstalwarts.com"
              className="inline-block text-[#E8192C] font-bold text-lg hover:underline transition-all"
            >
              business@techstalwarts.com
            </a>
            <div className="flex items-center gap-2 mt-2">
              <PhoneLineIcon />
              <a href="tel:+919930602530" className="text-[#1A1A1A] font-bold hover:text-[#E8192C] transition-colors">
                +91 9930602530
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1A1A1A]">Careers</h3>
            <p className="text-[#4A4A4A] text-sm">Looking to join our team of stalwarts? Check out our latest openings.</p>
            <a
              href="mailto:hr@techstalwarts.com"
              className="inline-block text-[#E8192C] font-bold text-lg hover:underline transition-all"
            >
              hr@techstalwarts.com
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1A1A1A]">General Inquiry</h3>
            <p className="text-[#4A4A4A] text-sm">For anything else, feel free to drop us a message and we'll get back to you.</p>
            <a
              href="mailto:info@techstalwarts.com"
              className="inline-block text-[#E8192C] font-bold text-lg hover:underline transition-all"
            >
              info@techstalwarts.com
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. OUR BRANCHES ──────────────────────────────── */}
      <section className="py-24 px-4 md:px-8 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-8 h-[2px] bg-[#E8192C]"></div>
            <span className="text-sm font-bold text-[#6B7280] uppercase tracking-widest text-[12px]">Our Presence</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-12 px-2">Our Branches</h2>

          {/* Unified Big Card */}
          <div className="bg-white rounded-[32px] shadow-sm p-8 md:p-12 border border-gray-50 flex flex-col lg:flex-row gap-12">
            
            {/* Left: Compact Office Cards */}
            <div className="w-full lg:w-1/2 space-y-6">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="flex bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 gap-4 sm:gap-6"
                >
                  {/* Text on left */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{office.city}</h3>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 shrink-0 scale-90"><LocationIcon /></span>
                      <p className="text-[13px] text-[#4A4A4A] leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <PhoneLineIcon />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-[13px] font-bold text-[#1A1A1A] hover:text-[#E8192C]"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  {/* Thumbnail + Button on right */}
                  <div className="w-24 sm:w-32 flex flex-col gap-3">
                    <div className="aspect-square rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={office.mapSrc}
                        alt={`${office.city} map`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="w-full py-1.5 border border-[#E8192C] text-[#E8192C] text-[11px] font-bold rounded-full hover:bg-red-50 transition-colors">
                      Maps
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: world map */}
            <div className="lg:sticky lg:top-32">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                        alt="TechStalwarts Global Network Map"
                        className="w-full h-auto object-cover aspect-[4/3] brightness-90 hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                        <p className="text-white font-bold text-xl">Connecting businesses worldwide</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CONTACT CTA (same as homepage — service grid + #contactForm modal) */}
      <div className="pb-20">
        <ContactCTA />
      </div>

    </main>
  );
}
