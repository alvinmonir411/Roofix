"use client";

import { CheckCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      duration: "/month",
      description: "Perfect for small projects and personal use.",
      features: [
        "1 Project",
        "Basic Support",
        "Standard Materials",
        "Email Updates",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$199",
      duration: "/month",
      description: "Ideal for businesses needing more power and support.",
      features: [
        "5 Projects",
        "Priority Support",
        "Premium Materials",
        "Detailed Reports",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$499",
      duration: "/month",
      description: "Best for large organizations with advanced needs.",
      features: [
        "Unlimited Projects",
        "Dedicated Manager",
        "Top-Quality Materials",
        "24/7 Support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Our <span className="text-blue-500">Pricing Plans</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose a plan that fits your needs. No hidden fees. Cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg border transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? "border-blue-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg text-white"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  Popular
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`mb-6 ${
                    plan.highlighted ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="text-4xl font-extrabold mb-6">
                  {plan.price}
                  <span className="text-lg font-medium">{plan.duration}</span>
                </div>

                {/* Features */}
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
    </section>
  );
}
