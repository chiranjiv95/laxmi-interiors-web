"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element;
      if (isOpen && target && !target.closest("header")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <Image
            src="/logocopy.jpeg"
            alt="Laxmi Modular Kitchen Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h2 className="text-base sm:text-lg font-bold text-gray-800 truncate">
            Laxmi Modular Kitchen
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base text-gray-600 font-medium">
          <Link
            href="/"
            className="hover:text-gray-900 transition-colors duration-200 py-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-900 transition-colors duration-200 py-2"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-900 transition-colors duration-200 py-2"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="hover:text-gray-900 transition-colors duration-200 py-2"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-900 transition-colors duration-200 py-2"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md transition-colors duration-200"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white shadow-lg border-t border-gray-100 px-4 py-2 space-y-1">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className="block py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
