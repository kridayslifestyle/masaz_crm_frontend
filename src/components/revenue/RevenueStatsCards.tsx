"use client";

import { IndianRupee, Building2, PiggyBank, Receipt } from "lucide-react";

export default function RevenueStatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {/* Gross Revenue */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between mb-6">
          <div>
            <p className="text-gray-500 uppercase tracking-wide">
              Gross Revenue
            </p>

            <h2 className="text-5xl font-bold mt-4">₹8.22L</h2>
          </div>

          <div
            className="
    w-16
    h-16
    rounded-2xl
    bg-blue-100
    flex
    items-center
    justify-center
  "
          >
            <IndianRupee size={32} className="text-blue-600" />
          </div>
        </div>

        <div className="text-green-600 font-medium">↗ 18% vs last week</div>
      </div>

      {/* Company Share */}
      {/* Company Share */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Company Share
            </p>

            <h2 className="text-4xl font-semibold mt-4">₹6.16L</h2>

            <p className="text-gray-400 mt-2">75% of gross</p>
          </div>

          <div
            className="
        w-16
        h-16
        rounded-2xl
        bg-green-100
        flex
        items-center
        justify-center
      "
          >
            <Building2 className="text-green-600" size={30} />
          </div>
        </div>

        <div className="text-green-600 font-medium">↗ 18% vs last week</div>
      </div>

      {/* Store Share */}
      {/* Store Share */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Store Share
            </p>

            <h2 className="text-4xl font-semibold mt-4">₹2.05L</h2>

            <p className="text-gray-400 mt-2">25% of gross</p>
          </div>

          <div
            className="
        w-16
        h-16
        rounded-2xl
        bg-emerald-100
        flex
        items-center
        justify-center
      "
          >
            <PiggyBank className="text-emerald-600" size={30} />
          </div>
        </div>

        <div className="text-green-600 font-medium">↗ 18% vs last week</div>
      </div>

      {/* Tax */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Tax Estimate (18%)
            </p>

            <h2 className="text-4xl font-semibold mt-4">₹1.11L</h2>

            <p className="text-gray-400 mt-2">Net: ₹5.06L</p>
          </div>

          <div
            className="
        w-16
        h-16
        rounded-2xl
        bg-yellow-100
        flex
        items-center
        justify-center
      "
          >
            <Receipt className="text-yellow-600" size={30} />
          </div>
        </div>

        <div className="text-green-600 font-medium">↗ 2% vs last week</div>
      </div>
    </div>
  );
}
