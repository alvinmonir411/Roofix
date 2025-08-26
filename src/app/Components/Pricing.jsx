"use client";

import { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import plans from "../data/Plans";
import axios from "axios";
import { toast } from "react-toastify";
export default function Pricing() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const openModal = (planName) => {
    setSelectedPlan(planName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPlan("");
  };

  const onsubmite = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const form = e.target;
    const Order = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.number.value,
      address: e.target.adress.value,
      plan: selectedPlan,
      createdAt: new Date(),
    };
    console.log(Order);

    try {
      const res = await axios.post(`/api/Order`, Order);
      console.log(res.data);
      toast.success("Order submitted successfully!");
      closeModal();
    } catch (error) {
      toast.error("Order submitted falide!");
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Our <span className="text-blue-500">Pricing Plans</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose a plan that fits your needs. No hidden fees. Cancel anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg border transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? "border-blue-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`mb-6 ${
                    plan.highlighted ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="text-4xl font-extrabold mb-6">
                  {plan.price}
                  <span className="text-lg font-medium">{plan.duration}</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle
                        className={`${
                          plan.highlighted ? "text-yellow-300" : "text-blue-500"
                        }`}
                        size={20}
                      />
                      <span
                        className={`${
                          plan.highlighted
                            ? "text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(plan.name)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-lg p-8 relative text-white">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
            >
              <X size={28} />
            </button>

            {/* Modal Title */}
            <h3 className="text-3xl font-extrabold mb-3 text-center">
              Book <span className="text-yellow-400">{selectedPlan}</span> Plan
            </h3>
            <p className="text-gray-200 text-center mb-8">
              Fill out the form and we’ll contact you shortly.
            </p>
            {/* Form */}
            <form onSubmit={onsubmite} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Your Phone"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>
              {/* adress */}
              <div>
                <input
                  type="text"
                  name="adress"
                  placeholder="Your Adress"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>
              {/* Submit Button */}

              <button
                disabled={loading}
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:scale-105 hover:shadow-lg transition-transform"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
