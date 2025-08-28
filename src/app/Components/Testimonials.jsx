"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Stat from "./Stat";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="container mx-auto dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 px-4">
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
          className=" p-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="w-[300px] h-[280px] mx-auto bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl  p-6 flex flex-col justify-between items-start transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400 shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-gray-300 dark:text-gray-600"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  “{testimonial.text}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
