"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 lg:py-3">
        <Link
          href="/"
          className="text-3xl font-extrabold text-white tracking-tight"
        >
          Roofix<span className="text-yellow-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 font-medium relative">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                  className="flex items-center gap-1 py-2 text-white font-semibold hover:text-yellow-300 transition-all duration-300"
                >
                  {item.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.name && (
                  <div className="absolute left-0 mt-3 w-52 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl rounded-lg overflow-hidden border border-transparent">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block px-4 py-3 text-white hover:text-yellow-300 transition-all duration-200"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="py-2 text-white font-semibold hover:text-yellow-300 transition-all duration-300 relative"
              >
                {item.name}
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-white hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl px-6 py-6 space-y-5 border-t border-transparent">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                  className="flex justify-between w-full py-2 text-lg font-medium text-white hover:text-yellow-300 transition-all duration-200"
                >
                  {item.name}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-2 pl-4 py-2 border-l-2 border-white">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block text-white hover:text-yellow-300 transition-all duration-200 text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="block py-2 text-lg font-medium text-white hover:text-yellow-300 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block bg-blue-600 text-white text-center px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
