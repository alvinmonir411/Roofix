"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, FileText } from "lucide-react"; // lucide-react থেকে আইকন ইম্পোর্ট করুন

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HeroImage.jpg"
        alt="Roofing Background"
        fill
        className="object-cover object-center scale-110 animate-fade-in-slow" // স্কেল ও অ্যানিমেশন যোগ করা হয়েছে
        priority
      />
      {/* Darker Overlay for Contrast & Depth */}
      <div className="absolute inset-0 bg-gray-900/70"></div>{" "}
      {/* overlay-কে আরও গাঢ় করা হয়েছে */}
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {" "}
        {/* কন্টেন্টকে কেন্দ্রে রাখতে এবং লাইন লেন্থ নিয়ন্ত্রণ করতে max-w-4xl */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight animate-fade-in-up delay-100">
          {" "}
          {/* আরও বড়, বোল্ড, tight tracking */}
          Premium Roofing & Gutter Services
        </h1>
        <p className="text-xl md:text-3xl font-light mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
          {" "}
          {/* বড় ফন্ট, হালকা ফন্ট ওয়েট, লাইন হাইট */}
          Reliable, Affordable & Fast Roofing Solutions for Your Home
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
          {" "}
          {/* বাটনগুলোর মধ্যে গ্যাপ বাড়ানো হয়েছে */}
          <Link
            href="tel:+8801979915165"
            className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-xl hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg" 
          >
            <PhoneCall size={20} /> Call Now
          </Link>
          <Link
            href="#quote"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 hover:border-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg" 
          >
            <FileText size={20} /> Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
