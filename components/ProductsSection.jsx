"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: "cloud4feed",
    name: "Cloud4Feed",
    tagline: "AI-driven customer and employee feedback management",
    desc: "Cloud4Feed is an innovative AI-driven platform designed to streamline customer and employee feedback management, provides seamless integration across multiple channels, offering businesses a unified solution to gather, analyze, and act on feedback data in real-time to increase retention and loyalty.",
    website: "https://www.cloud4feed.com/",
    mockup: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&h=600&q=80",
    hasAppStore: true,
    hasPlayStore: true,
  },
  {
    id: "jarvis",
    name: "Jarvis",
    tagline: "AI-powered personalized stock investment advisory platform",
    desc: "Jarvis is India's first AI-powered stock market advisory product that personalizes your investment journey. It analyzes your risk profile and financial goals to provide curated, data-driven stock recommendations that have consistently outperformed benchmark indices.",
    website: "https://www.jarvisinvest.com/",
    mockup: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&h=600&q=80",
    hasAppStore: true,
    hasPlayStore: true,
  },
  {
    id: "transbnk",
    name: "TransBnk",
    tagline: "Secure digital escrow and smart contract platform for businesses",
    desc: "TransBnk is a B2B financial technology platform specializing in digital escrow management, smart contract generation, and seamless banking integrations, enabling trusted and transparent financial transactions between businesses and their stakeholders.",
    website: "https://www.transbnk.com/",
    mockup: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=900&h=600&q=80",
    hasAppStore: false,
    hasPlayStore: false,
  }
];

export default function ProductsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const product = products[activeIdx];

  return (
    <section className="py-20 bg-[#F9F9F9] font-sans">
      <div className="max-w-[1340px] mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[#E8192C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <span className="text-[#6B7280] font-semibold text-[13px] tracking-wide">Our Products</span>
          </div>
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#1A1A1A] tracking-tight">
            Check out our products
          </h2>
        </div>

        {/* Main Product Display — 2-col */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT — Large Mockup Image */}
          <div className="w-full lg:w-[55%] relative">
            <div className="relative w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
              <Image
                src={product.mockup}
                alt={product.name}
                fill
                className="object-cover transition-all duration-500"
                unoptimized
              />
            </div>
          </div>

          {/* RIGHT — Product Info */}
          <div className="w-full lg:w-[45%] flex flex-col">

            <h3 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-3 tracking-tight">
              {product.name}
            </h3>

            <p className="text-[14px] font-semibold text-[#1A1A1A] mb-4 leading-snug">
              {product.tagline}
            </p>

            <p className="text-[14px] text-[#6B7280] leading-[1.8] mb-6">
              {product.desc}
            </p>

            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] text-[14px] font-medium mb-8 hover:underline inline-block"
            >
              {product.website}
            </a>

            {/* Store Badges */}
            {(product.hasPlayStore || product.hasAppStore) && (
              <div className="flex items-center gap-4 mb-10">
                {product.hasPlayStore && (
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-[#1A1A1A] text-white rounded-[8px] px-4 py-2.5 hover:bg-black transition-colors"
                  >
                    {/* Google Play Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76c.37.2.8.2 1.2-.04l13.1-7.56-2.95-2.97-11.35 10.57zm-1.13-20.4A1.5 1.5 0 002 4.06v15.89c0 .5.25.95.65 1.22l.1.06L14.5 12 2.75 3.38l-.7-.01v.0zM20.47 10.4L17.8 8.86 14.5 12l3.32 3.14 2.68-1.55c.77-.44.77-1.75-.04-2.2h.01zM4.38.28L17.48 7.84l-2.98 2.98L3.18.28C3.57.04 4 .04 4.38.28z"/>
                    </svg>
                    <div className="text-left leading-none">
                      <p className="text-[9px] opacity-80 uppercase tracking-wide">Android App on</p>
                      <p className="text-[13px] font-semibold">Google play</p>
                    </div>
                  </a>
                )}
                {product.hasAppStore && (
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-[#1A1A1A] text-white rounded-[8px] px-4 py-2.5 hover:bg-black transition-colors"
                  >
                    {/* Apple Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.21 1.29-2.19 3.85.03 3.02 2.65 4.03 2.68 4.04l-.04.23zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left leading-none">
                      <p className="text-[9px] opacity-80 uppercase tracking-wide">Download on the</p>
                      <p className="text-[13px] font-semibold">App Store</p>
                    </div>
                  </a>
                )}
              </div>
            )}

            {/* Product Switcher Tabs */}
            <div className="flex items-center gap-3">
              {products.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all duration-200 ${
                    activeIdx === idx
                      ? "bg-[#E8192C] text-white border-[#E8192C]"
                      : "bg-white text-[#6B7280] border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
