"use client";

import {
  ShieldCheck,
  Clock,
  DollarSign,
  Users,
  Wrench,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "Fully certified & insured for your complete peace of mind.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      desc: "Always available for urgent roofing needs, day or night.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "No hidden costs. Get free quotes before every project.",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Highly skilled and experienced professionals at your service.",
    },
    {
      icon: Wrench,
      title: "Premium Materials",
      desc: "Only the best quality materials for long-lasting durability.",
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Work",
      desc: "All projects come with satisfaction & quality guarantee.",
    },
  ];

  return (
    <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fadeIn">
          <h2 className="text-4xl md:text-5xl pb-2 font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Why Choose Roofix?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Discover why thousands of customers trust us for their roofing
            needs. We combine expertise, quality materials, and fast service to
            deliver results you can rely on.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 text-white shadow-lg group-hover:scale-110 transition">
                  <feature.icon size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[540px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/WhyUS.jpg"
            alt="Premium Roofing Service"
            fill
            className="object-cover scale-105 hover:scale-110 transition duration-500"
          />
          {/* Badge Overlay */}
          <div className="absolute top-6 left-6   dark:bg-gray-900/80 px-6 py-3 rounded-full shadow-lg bg-yellow-500 font-semibold text-lg">
            20+ Years Experience
          </div>
        </div>
      </div>
    </section>
  );
}
