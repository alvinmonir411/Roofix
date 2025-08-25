"use client";
import React from "react";
import { Heart, Zap, CheckCircle } from "lucide-react";

const Stat = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Likes */}
        <div className="stat shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white">
          <div className="stat-figure text-primary">
            <Heart className="h-12 w-12 text-red-500" />
          </div>
          <div className="text-center sm:text-left">
            <div className="stat-title text-gray-500 font-semibold">
              Total Likes
            </div>
            <div className="stat-value text-primary text-3xl font-bold">
              25.6K
            </div>
            <div className="stat-desc text-gray-400">
              21% more than last month
            </div>
          </div>
        </div>

        {/* Page Views */}
        <div className="stat shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white">
          <div className="stat-figure text-secondary">
            <Zap className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="text-center sm:text-left">
            <div className="stat-title text-gray-500 font-semibold">
              Page Views
            </div>
            <div className="stat-value text-secondary text-3xl font-bold">
              2.6M
            </div>
            <div className="stat-desc text-gray-400">
              21% more than last month
            </div>
          </div>
        </div>

        {/* Tasks Done */}
        <div className="stat shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white">
          <div className="stat-figure text-success">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <div className="text-center sm:text-left">
            <div className="stat-value text-3xl font-bold">86%</div>
            <div className="stat-title text-gray-500 font-semibold">
              Tasks Done
            </div>
            <div className="stat-desc text-secondary text-gray-400">
              31 tasks remaining
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
