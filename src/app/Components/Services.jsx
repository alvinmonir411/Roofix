"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // optional for smooth animations
import services from "../data/services";

export default function Services() {
  return (
    <section className="relative container mx-auto ">
      <div className=" sticky top-20 p-6">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-blue-500 bg-clip-text  bg-gradient-to-r from-blue-600 to-blue-500">
          Our Premium Services
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
          We provide top-quality roofing and gutter solutions trusted by
          homeowners and businesses alike.
        </p>
      </div>
      <div className="w-full mx-auto">
        {services.map((service, index) => (
          <div key={index} className="h-screen sticky top-20 z-10">
            {/* Image with fade-in animation */}
            <div className="w-full h-full relative overflow-hidden rounded-4xl">
              <Image
                src={service.img}
                alt={`services ${index + 1}`}
                fill
                priority
                className="object-cover rounded-4xl transition-transform duration-700 ease-in-out hover:scale-105"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-gray-900/70"></div>{" "}
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-6 md:px-20 text-white">
                <h2 className="text-sm md:text-lg font-medium tracking-widest uppercase mb-2 opacity-80">
                  {service.desc}
                </h2>
                <h1 className="text-4xl md:text-7xl font-extrabold mb-5 drop-shadow-lg">
                  {service.title}
                </h1>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-xl hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
