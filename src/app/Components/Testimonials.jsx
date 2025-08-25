"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Stat from "./Stat";
const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner, New York",
    image: "https://i.ibb.co/GfmR2b8B/lawyer-2.jpg",
    rating: 5,
    text: "Roofix did an amazing job on my roof replacement. Professional, fast, and affordable. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    role: "Business Owner, Chicago",
    image: "https://i.ibb.co/5hNYC4H3/lawyer-1.jpg",
    rating: 5,
    text: "The team repaired storm damage on my commercial property. Excellent service and very responsive!",
  },
  {
    name: "David Wilson",
    role: "Property Manager, Dallas",
    image: "https://i.ibb.co/XfG2jH0S/lawyer-3.jpg",
    rating: 4,
    text: "Great experience with Roofix. The gutter installation was smooth and the crew was very friendly.",
  },
  {
    name: "Emma Brown",
    role: "Landlord, Houston",
    image: "https://i.ibb.co/pvKTFxd7/lawyer-4.jpg",
    rating: 5,
    text: "Fast response during emergency! They fixed my leaking roof the same day.",
  },
  {
    name: "Michael Lee",
    role: "Homeowner, Miami",
    image: "https://i.ibb.co/s9LQGw6B/lawyer-5.jpg",
    rating: 5,
    text: "Great service and fair pricing. The roof looks brand new now!",
  },
  {
    name: "Sophia Miller",
    role: "Homeowner, Seattle",
    image: "https://i.ibb.co/b0DyNgX/lawyer-6.jpg",
    rating: 4,
    text: "Happy with their service. The crew was professional and cleaned up well.",
  },
  {
    name: "James Anderson",
    role: "Contractor, Boston",
    image: "https://i.ibb.co/yc5Jkv8V/lawyer-7.jpg",
    rating: 5,
    text: "Reliable partner for roofing projects. Always on time and on budget.",
  },
  {
    name: "Olivia White",
    role: "Designer, LA",
    image: "https://i.ibb.co/Kx97tK3m/lawyer-8.jpg",
    rating: 5,
    text: "Loved the eco-friendly roofing solutions they offered.",
  },
  {
    name: "Robert Green",
    role: "Business Owner, Denver",
    image: "https://i.ibb.co/3ynyx1fg/lawyer-9.jpg",
    rating: 5,
    text: "Excellent craftsmanship. Highly recommend Roofix for any roofing job.",
  },
  {
    name: "Isabella Taylor",
    role: "Homeowner, Atlanta",
    image: "https://i.ibb.co/gLfb1GZF/lawyer-10.jpg",
    rating: 4,
    text: "They explained everything clearly and delivered on time. Very satisfied.",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto p-10 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-blue-500 bg-clip-text  bg-gradient-to-r from-blue-600 to-blue-500">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Real feedback from satisfied customers across the country.
        </p>
      </div>
      <Stat />
      <div className="mt-10 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-white text-white h-[210px] dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-md p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                {/* Top: Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64} // slightly smaller than container
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold  dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm dark:text-gray-400 italic">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Stars + Text */}
                <div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-gray-300" />
                    ))}
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    “{testimonial.text}”
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
