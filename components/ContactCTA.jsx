"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  { id: "aiml", name: "AI/ML", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg> },
  { id: "uiux", name: "UI/UX Design", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { id: "cloud", name: "Cloud Computing", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg> },
  { id: "web", name: "Web Development", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { id: "platform", name: "Platform Development", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { id: "consultancy", name: "Tech Consultancy", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.87a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
  { id: "product", name: "Product Development", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg> },
  { id: "marketing", name: "Digital Marketing", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { id: "opd", name: "Outsourced Produ...", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { id: "qa", name: "Quality Assurance", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
];

const allServiceCheckboxes = [
  "AI/ML", "UI/UX Services", "Cloud Computing", "Web Development",
  "Platform Development", "Tech Consultancy", "Product Development",
  "Digital Marketing", "Outsourced Product Development", "Quality Assurance",
];

export default function ContactCTA() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [checkedServices, setCheckedServices] = useState([]);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", requirement: "" });

  const handleServiceClick = (svc) => {
    setSelectedService(svc.id);
    // pre-check corresponding checkbox
    const match = allServiceCheckboxes.find(s =>
      s.toLowerCase().includes(svc.name.split(" ")[0].toLowerCase())
    );
    setCheckedServices(match ? [match] : []);
    setShowModal(true);
    window.history.pushState(null, "", "#contactForm");
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    window.history.pushState(null, "", window.location.pathname);
  };

  const toggleCheckbox = (name) => {
    setCheckedServices(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ──────────────── SECTION (always visible, never changes) ──────────────── */}
      <section id="contact" className="bg-white font-sans">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[580px]">

            {/* LEFT — Service Selection */}
            <div className="w-full lg:w-[50%] px-6 md:px-12 py-14">

              {/* Label */}
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-4 h-4 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.87a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span className="text-[#6B7280] text-[13px] font-medium">Contact us</span>
              </div>

              <h2 className="text-[26px] md:text-[32px] font-extrabold text-[#1A1A1A] tracking-tight mb-3 leading-tight">
                Let&apos;s level up your brand, together
              </h2>

              <p className="text-[14px] text-[#4B5563] mb-8">
                You can reach us anytime via{" "}
                <a href="mailto:business@techstalwarts.com" className="text-[#3B82F6] hover:underline">
                  business@techstalwarts.com
                </a>
              </p>

              <p className="text-[15px] font-bold text-[#1A1A1A] mb-5">Hi, I am looking for</p>

              {/* 2-col Service Grid */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((svc) => {
                  const isActive = selectedService === svc.id;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => handleServiceClick(svc)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left text-[13px] font-medium transition-all duration-150 bg-white
                        ${isActive
                          ? "border-[#E8192C] text-[#E8192C]"
                          : "border-gray-200 text-[#374151] hover:border-gray-300"
                        }`}
                    >
                      <span className="text-[#E8192C] shrink-0">{svc.icon}</span>
                      <span className={isActive ? "font-semibold text-[#E8192C]" : ""}>{svc.name}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* RIGHT — Always the office photo */}
            <div className="hidden lg:block w-[50%] relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&h=700&q=80"
                alt="TechStalwarts office"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────── MODAL — Contact Form ──────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            id="contactForm"
            className="bg-white w-full max-w-[700px] rounded-xl shadow-2xl p-8 md:p-12 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-1">Contact Us</h3>
            <p className="text-[13px] text-[#6B7280] mb-8">
              Complete the fields below and we will reach out to you !
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">

              {/* Row 1: Name */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#374151]">First name <span className="text-[#E8192C]">*</span></label>
                  <input type="text" placeholder="Jane"
                    value={form.firstName} onChange={e => setForm(f => ({...f, firstName: e.target.value}))}
                    className="border border-gray-200 rounded px-3 py-2.5 text-[13px] outline-none focus:border-gray-400 placeholder-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#374151]">Last name <span className="text-[#E8192C]">*</span></label>
                  <input type="text" placeholder="Doe"
                    value={form.lastName} onChange={e => setForm(f => ({...f, lastName: e.target.value}))}
                    className="border border-gray-200 rounded px-3 py-2.5 text-[13px] outline-none focus:border-gray-400 placeholder-gray-300"
                  />
                </div>
              </div>

              {/* Row 2: Contact + Email */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#374151]">Contact Number <span className="text-[#E8192C]">*</span></label>
                  <input type="tel" placeholder="+91"
                    value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                    className="border border-gray-200 rounded px-3 py-2.5 text-[13px] outline-none focus:border-gray-400 placeholder-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#374151]">Email <span className="text-[#E8192C]">*</span></label>
                  <input type="email" placeholder="abc@gmail.com"
                    value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                    className="border border-gray-200 rounded px-3 py-2.5 text-[13px] outline-none focus:border-gray-400 placeholder-gray-300"
                  />
                </div>
              </div>

              {/* Requirement textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#374151]">My requirement is <span className="text-[#E8192C]">*</span></label>
                <textarea rows={4} placeholder="Write your requirements"
                  value={form.requirement} onChange={e => setForm(f => ({...f, requirement: e.target.value}))}
                  className="border border-gray-200 rounded px-3 py-2.5 text-[13px] outline-none focus:border-gray-400 placeholder-gray-300 resize-y"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {allServiceCheckboxes.map((name) => (
                  <label key={name} className="flex items-center gap-2 text-[12px] text-[#374151] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checkedServices.includes(name)}
                      onChange={() => toggleCheckbox(name)}
                      className="accent-[#E8192C] w-3.5 h-3.5"
                    />
                    {name}
                  </label>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <button type="button" onClick={closeModal}
                  className="px-8 py-2.5 border border-[#E8192C] text-[#E8192C] rounded text-[14px] font-semibold hover:bg-red-50 transition-colors"
                >
                  Cancel
                </button>
                <button type="submit"
                  className="px-12 py-2.5 bg-[#E8192C] text-white rounded text-[14px] font-semibold hover:bg-[#c91425] transition-colors"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
