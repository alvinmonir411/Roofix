"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden">
      {/* Left: Images */}
      <div className="relative flex-1 flex justify-center">
        {/* Main Image */}
        <div className="relative w-[280px] h-[260px] sm:w-[360px] sm:h-[320px] md:w-[420px] md:h-[380px] lg:w-[500px] lg:h-[440px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
          <Image
            src="/projects/project1.jpeg"
            alt="Main Project"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Overlapping Image */}
        <div className="absolute bottom-[-50px] left-20 sm:left-14 md:left-20 lg:left-90 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
          <Image
            src="/projects/project2.jpeg"
            alt="Second Project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 text-center lg:text-left max-w-xl">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          Our Story
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 dark:text-white mb-6">
          Building Dreams, One Roof at a Time
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          From humble beginnings to a nationwide trusted brand, our journey
          started with a single mission – delivering quality and trust in every
          project we take on.
        </p>
        <button className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full flex items-center gap-3 hover:bg-yellow-600 transition mx-auto lg:mx-0 shadow-lg">
          Learn More <ArrowRight size={18} />
        </button>

        {/* Stats */}
        <div className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-12 flex-wrap">
          {[
            { number: "21", label: "Countries" },
            { number: "700+", label: "Projects" },
            { number: "250+", label: "Clients" },
          ].map((item, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="text-4xl font-extrabold text-yellow-500">
                {item.number}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
