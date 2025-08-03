import React from "react";

const AboutPage = () => {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-600">
          At <strong>Laxmi Modular Kitchen & Interior</strong>, we believe that
          every home deserves a space that's functional, elegant, and uniquely
          yours.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium mb-2">Our Journey</h2>
        <p className="">
          Founded with a passion for craftmanship and creativity, Laxmi Modular
          Kitchen & Interior has been transforming homes across Bilaspur and
          nearby areas. We specialize in modular kitchens, wardrobes, TV units,
          and complete interior solutions tailored to your lifestyle
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Why Choose Us</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Customized designs to suit your space and taste</li>
          <li>Premium quality materials and finishes</li>
          <li>Transparent pricing and timely delivery</li>
          <li>Personalized service and expert craftmanship</li>
        </ul>
      </section>

      <section className="text-center">
        <p className="mt-4 text-gray-600">
          Whether you're renovating your kitchen or building your dream home,
          we're here to bring your vision to life.{" "}
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
