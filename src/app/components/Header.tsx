import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logocopy.jpeg" alt="Logo" width={40} height={40} />
            <h2 className="text-lg font-bold text-gray-800">
              Laxmi Modular Kitchen
            </h2>
          </div>
        </Link>

        <nav className="space-x-4 text-sm text-gray-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
