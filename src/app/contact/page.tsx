import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className=" text-gray-600">
          We would love to hear from you! Visit our store or reach out via phone
          or Whatsapp.
        </p>
      </section>
      {/* Address + Whatspp */}
      <section className="bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-xl font-medium mb-2">Store Address</h2>
        <p className="mb-2">
          <a
            href="https://share.google/jnaEWzBuMfSLLet5s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Laxmi Modular Kitchen & Interior - View on Google Maps
          </a>
        </p>
        <p>
          Infront of Ganesh sweets, Rajkishor Nagar chowk, Bilaspur,
          Chhattisgarh 495001
        </p>
        <p className="mb-2">📞 093407 05227</p>
        <a
          href="https://wa.me/919340705227"
          rel="noopener noreferrer"
          target="_blank"
          className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
        >
          Chat on Whatsapp
        </a>
        <p></p>
      </section>

      {/* Google Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.0295964522975!2d82.1803821750273!3d22.08668665060479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b34721098fd%3A0x6680ac4a2dd71b68!2sLaxmi%20Modular%20kitchen%20%26%20interior!5e0!3m2!1sen!2sin!4v1754217163525!5m2!1sen!2sin"
          width={"100%"}
          height={"350"}
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
