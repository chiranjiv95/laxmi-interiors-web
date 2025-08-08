import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      {/* Heading Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          At{" "}
          <span className="font-semibold text-gray-800">
            Laxmi Modular Kitchen & Interior
          </span>
          , we believe every home deserves a space that is functional, elegant,
          and uniquely yours.
        </p>
      </section>

      {/* Our Journey */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our Journey
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Founded with a passion for craftsmanship and creativity, Laxmi Modular
          Kitchen & Interior has been transforming homes across Bilaspur and
          nearby areas. We specialize in modular kitchens, wardrobes, TV units,
          and complete interior solutions tailored to your lifestyle.
        </p>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Why Choose Us
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Customized designs to suit your space and taste</li>
          <li>Premium quality materials and finishes</li>
          <li>Transparent pricing and timely delivery</li>
          <li>Personalized service and expert craftsmanship</li>
        </ul>
      </section>

      {/* Closing Statement */}
      <section className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 text-lg">
          Whether you are renovating your kitchen or building your dream home,
          we are here to bring your vision to life.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
