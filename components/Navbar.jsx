"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <div className={`fixed top-0 left-0 w-full z-[1030] flex justify-center ${isContact ? "" : "px-4 mt-5"}`}>
      <nav className={`w-full bg-white h-[70px] drop-shadow-md border border-gray-100 flex items-center justify-between ${isContact ? "px-10 lg:px-14" : "max-w-[1320px] rounded-2xl px-8 lg:px-10"}`}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 mr-auto">
          <div className="flex gap-[2px]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8192C">
              <path d="M4 3v18l9-9-9-9z"/>
              <path d="M14 8v8l4-4-4-4z"/>
            </svg>
          </div>
          <span className="text-[#1A1A1A] font-extrabold text-[22px] tracking-tight lowercase">
            techstalwarts<span className="text-[#E8192C]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className={`${isContact ? "text-[#4A4A4A] font-semibold hover:text-[#E8192C]" : "text-[#E8192C] font-extrabold"} text-[14.5px] whitespace-nowrap`}>
            Home.
          </Link>
          <Link href="#" className="text-[#4A4A4A] font-semibold text-[14.5px] hover:text-[#E8192C] whitespace-nowrap">
            About us
          </Link>
          <div className="relative flex items-center gap-1 group cursor-pointer">
            <span className="text-[#4A4A4A] font-semibold text-[14.5px] group-hover:text-[#E8192C] whitespace-nowrap">Services</span>
            <svg className="w-3 h-3 text-gray-400 group-hover:text-[#E8192C]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <Link href="#" className="text-[#4A4A4A] font-semibold text-[14.5px] hover:text-[#E8192C] whitespace-nowrap">
            Products
          </Link>
          <Link href="#" className="text-[#4A4A4A] font-semibold text-[14.5px] hover:text-[#E8192C] whitespace-nowrap">
            Case Studies
          </Link>
          <Link href="#" className="text-[#4A4A4A] font-semibold text-[14.5px] hover:text-[#E8192C] whitespace-nowrap">
            Life@techstalwarts
          </Link>
          <Link href="#" className="text-[#4A4A4A] font-semibold text-[14.5px] hover:text-[#E8192C] whitespace-nowrap">
            Career
          </Link>
          
          <div className="w-[1px] h-5 bg-gray-300"></div>
          
          <Link href="/contact" className={`${isContact ? "text-[#E8192C] font-extrabold" : "text-[#1A1A1A] font-semibold hover:text-[#E8192C]"} text-[14.5px] whitespace-nowrap`}>
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </nav>
      
      {/* Mobile Menu Content (Simplified) */}
      {isMobileMenuOpen && (
        <div className="absolute top-[90px] left-4 right-4 bg-white rounded-xl shadow-lg border border-gray-100 p-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" className={isContact ? "text-[#4A4A4A] font-medium" : "text-[#E8192C] font-bold"}>Home.</Link>
            <Link href="#" className="text-[#4A4A4A] font-medium">About us</Link>
            <Link href="#" className="text-[#4A4A4A] font-medium">Services</Link>
            <Link href="#" className="text-[#4A4A4A] font-medium">Products</Link>
            <Link href="/contact" className={isContact ? "text-[#E8192C] font-bold" : "text-[#1A1A1A] font-bold"}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
}
