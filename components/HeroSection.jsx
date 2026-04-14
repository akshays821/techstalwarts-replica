"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const words = ["Growth", "Business", "Vision"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true); // Fade back in with next word
      }, 500); // Small delay for the fade out to complete
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center text-center overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 text-white">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          alt="Office Team"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Dark subtle overlay tailored to make the bottom darker for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-16">
        {/* The text is centered, bold, with rotating words highlighted in Red */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
          Empowering your <br className="md:hidden" />
          <span 
            className={`text-[#E8192C] transition-all duration-500 inline-block ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {words[index]}
          </span> <br />
          with custom software solutions.
        </h1>
        
        <p className="text-base md:text-[18px] text-gray-200 font-medium max-w-xl mx-auto opacity-90 transition-opacity duration-700">
          Unlock the Power of Innovative Software Development
        </p>
      </div>
    </section>
  );
}
