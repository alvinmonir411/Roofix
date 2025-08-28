"use client";

import dynamic from "next/dynamic";
import ContactForm from "../models/ContactForm";

const Map = dynamic(() => import("../models/Map"), { ssr: false });

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="md:flex justify-center gap-5">
        <div className="flex-1 w-full max-w-lg">
          <ContactForm />
        </div>
        <div className="flex-1 w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <Map />
        </div>
      </div>
    </div>
  );
}
