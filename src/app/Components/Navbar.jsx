"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      dropdown: [
        { name: "Roofing Repair", href: "/services/roofing-repair" },
        { name: "Gutter Cleaning", href: "/services/gutter-cleaning" },
        { name: "Roof Installation", href: "/services/roof-installation" },
        { name: "Storm Damage", href: "/services/storm-damage" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      {" "}
      {/* Added border-b, slightly stronger shadow */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 lg:py-3">
        {" "}
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-700 tracking-tight"
        >
          {" "}
          {/* Larger, bolder, darker blue, tracking-tight for modern feel */}
          Roofix<span className="text-yellow-600">.</span>{" "}
          {/* Slightly darker yellow for contrast */}
        </Link>
        {/* Desktop Menu (lg and up) */}
        <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium relative">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                {" "}
                {/* Added group for better dropdown hover */}
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex items-center gap-1 py-2 text-gray-800 hover:text-blue-700 font-semibold transition-all duration-300 relative group-hover:text-blue-700" // Stronger text, better hover
                >
                  {item.name}{" "}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />{" "}
                  {/* Rotates icon */}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-blue-700 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>{" "}
                  {/* Underline effect */}
                </button>
                {serviceOpen && (
                  <div className="absolute left-0 mt-3 w-52 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 animate-fade-in-down">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200" // Increased padding, better hover color
                        onClick={() => setServiceOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 text-gray-800 font-semibold hover:text-blue-700 transition-all duration-300 relative group" // Stronger text, better hover
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 bg-blue-700 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>{" "}
                {/* Underline effect */}
              </Link>
            )
          )}
        </nav>
        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold"
          >
            <PhoneCall size={18} />
            Free Quote
          </Link>
        </div>
        {/* Mobile Hamburger (below lg) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl px-6 py-6 space-y-5 border-t border-gray-100 animate-slide-down">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex justify-between w-full py-2 text-lg font-medium text-gray-800 hover:text-blue-700 transition-all duration-200"
                >
                  {item.name}{" "}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {serviceOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4 py-2">
                    {" "}
                    {/* Indented, border for visual separation */}
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block text-gray-700 hover:text-blue-700 transition-all duration-200 text-base"
                        onClick={() => {
                          setIsOpen(false);
                          setServiceOpen(false);
                        }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-lg font-medium text-gray-800 hover:text-blue-700 transition-all duration-200" // Larger text, bolder
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block bg-blue-600 text-white text-center px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold mt-4" // More padding, stronger shadow, scale effect, top margin
            onClick={() => setIsOpen(false)}
          >
            Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
