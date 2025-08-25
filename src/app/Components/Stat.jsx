"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="text-black  py-16 px-6 md:px-12 lg:px-24  flex-col  sm:flex md:hidden lg:flex sm:space-y-5 md:flex-row items-center justify-between gap-16 relative overflow-hidden">
      {/* Left Side - Images */}
      <div className="relative flex-1 flex justify-center">
        {/* Main Image */}
        <div
          className="relative w-[320px] h-[280px] sm:w-[400px] sm:h-[340px] md:w-[480px] md:h-[400px] lg:w-[580px] lg:h-[450px] rounded-xl overflow-hidden shadow-2xl 
        -left-4 sm:-left-8 md:-left-12 lg:-left-24"
        >
          <Image
            src="/projects/project1.jpeg"
            alt="Worker 1"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
        {/* Overlapping Image */}
        <div
          className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[320px] md:w-[380px] md:h-[360px] lg:w-[500px] lg:h-[480px] rounded-xl overflow-hidden shadow-2xl 
        bottom-[-40px] sm:bottom-[0px] sm:top-10 md:bottom-[-60px] lg:-bottom-46 
        left-6 sm:left-10 md:left-20 lg:left-54"
        >
          <Image
            src="/projects/project2.jpeg"
            alt="Worker 2"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 text-center md:text-left max-w-lg">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Story
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-6">
          Our Story Started From Our Own House
        </h2>
        <button className="mt-4 px-8 py-3 bg-white text-black font-medium rounded-full flex items-center gap-3 hover:bg-gray-200 transition mx-auto md:mx-0">
          Learn More <ArrowRight size={18} />
        </button>

        {/* Stats Section */}
        <div className="flex justify-center md:justify-start gap-6 sm:gap-10 mt-12 flex-wrap">
          <div className="text-center md:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">
              21
            </p>
            <p className="text-gray-400 text-sm">Countries</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">
              700+
            </p>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">
              250+
            </p>
            <p className="text-gray-400 text-sm">Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
