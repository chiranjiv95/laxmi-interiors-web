import React from "react";

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Modular Kitchen",
    description:
      "Custom-designed modular kitchens with high-quality fittings, optimized storage, and modern aesthetics.",
  },
  {
    title: "Wardrobe & Storage",
    description:
      "Tailored wardrobes, lofts, and cabinets designed for smart storage and style.",
  },
  {
    title: "TV Units",
    description:
      "Contemporary TV and entertainment units that complement your living space.",
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Heading */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h1>
        <p className="text-gray-600 text-lg">
          We offer end-to-end modular and interior design services to transform
          your space with style and functionality.
        </p>
      </section>

      {/* Service Cards */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
