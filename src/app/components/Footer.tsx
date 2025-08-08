import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src="/logocopy.jpeg" alt="Logo" width={40} height={40} />
            <h2 className="text-lg font-bold text-white">
              Laxmi Modular Kitchen
            </h2>
          </div>
          <p className="mt-4 text-sm">
            Premium modular kitchens & interiors designed to match your style
            and space. Quality craftsmanship since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            📍 Infront of Ganesh Sweets, Rajkishore Nagar Chowk, Bilaspur,
            Chhattisgarh 495001
          </p>
          <p className="text-sm">📞 093407 05227</p>
          <p className="text-sm">✉️ laxmimodular1@gmail.com</p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a
              href="https://www.facebook.com/people/Laxmi-Modular-Kitchen-Interiors/61563486386124/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/pihuinterior15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@pihuinterior15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Laxmi Modular Kitchen. All rights reserved.
      </div>
    </footer>
  );
}
