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
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl mb-4 font-semibold">Our Services</h1>
        <p className="text-gray-600">
          We offer end-to-end modular and interior design services to transform
          your space with style and functionality.
        </p>
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 border rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-medium mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
