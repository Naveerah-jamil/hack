'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 py-4 sm:px-8 md:px-16 lg:px-24 w-[1920px]">
        {/* Left side: Navigation Links */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <ul className="flex space-x-8">
            <li>
              <Link href="/HomePage">Home</Link>
            </li>
            <li>
              <Link href="/Carts">Shop</Link>
            </li>
            <li>
              <Link href="/Products">Product</Link>
            </li>
            <li>
              <Link href="/SingleProduct">Pages</Link>
            </li>
            <li>
              <Link href="/AboutUs">About</Link>
            </li>
          </ul>
        </div>

        {/* Right side: Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="text-[#636270] font-Inter font-[500] text-[14px] leading-[15.4px] hidden sm:block">
            Contact:
          </div>
          <div className="text-black font-Inter font-[500] text-[14px] leading-[15.4px]">
            (808) 555-0111
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu (hidden on larger screens) */}
      <div className="sm:hidden flex justify-between items-center px-4 py-4">
        {/* Contact Info for mobile */}
        <div className="text-black font-Inter font-[500] text-[16px]">
          Contact: (808) 555-0111
        </div>

        {/* Hamburger icon */}
        <div className="space-y-2" onClick={toggleMenu}>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#FFFFFF]">
          <ul className="space-y-4 p-4">
            <li>
              <Link href="/HomePage">Home</Link>
            </li>
            <li>
              <Link href="/Carts">Shop</Link>
            </li>
            <li>
              <Link href="/Products">Product</Link>
            </li>
            <li>
              <Link href="/SingleProduct">Pages</Link>
            </li>
            <li>
              <Link href="/AboutUs">About</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
