"use client";

import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
  const whatsappNumber = "919340705227";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hi!%20I'm%20interested%20in%20modular%20kitchen%20or%20interior%20work.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};
