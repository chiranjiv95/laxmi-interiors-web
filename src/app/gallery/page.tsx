import Image from "next/image";
import React from "react";

const images = [
  "/image1.webp",
  "/image2.webp",
  "/image3.webp",
  "/image4.webp",
  "/image5.webp",
  "/image6.webp",
  "/image7.webp",
  "/image8.webp",
];

const GalleryPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Heading */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Work Gallery
        </h1>
        <p className="text-gray-600 text-lg">
          A glimpse into our modular kitchne and interior design projects. More
          coming soon!
        </p>
      </section>

      {/* images */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:shadow-lg transition relative w-full h-60"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width:768px) 100vw, 33vw"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default GalleryPage;
