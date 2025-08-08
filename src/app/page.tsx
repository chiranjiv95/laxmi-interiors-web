import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80"
            alt="Interior Design"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div> */}

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Transforming Spaces with Elegance
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl mb-6">
            Laxmi Interiors – Your trusted partner in creating beautiful,
            functional spaces tailored to your lifestyle.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
