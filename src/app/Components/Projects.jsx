"use client";
import projects from "../data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-12 text-blue-600">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj) => (
          <Link
            key={proj.id}
            href={`/projects/${proj.id}`}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group transform transition-transform duration-500 hover:scale-105"
          >
            <Image
              src={proj.heroImage}
              alt={proj.title}
              width={500}
              height={350}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-bold">{proj.title}</h3>
                <p className="text-gray-200 text-sm mt-1">{proj.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
