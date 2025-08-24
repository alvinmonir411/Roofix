import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">
            Reliable solutions for every roofing need.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <img
                src="/icons/roof.svg"
                alt="Roofing Repair"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Roofing Repair</h3>
              <p className="text-gray-600">
                Fix leaks, damages, and maintain your roof with our expert team.
              </p>
              <Link
                href="/services/roofing-repair"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read More
              </Link>
            </div>
            {/* Repeat for other services */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
