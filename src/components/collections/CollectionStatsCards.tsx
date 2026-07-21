"use client";

import {
  IndianRupee,
  Wallet,
  AlertCircle,
} from "lucide-react";

export default function CollectionStatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">

      {/* Total */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between">

          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Total Collected
            </p>

            <h2 className="text-4xl font-bold mt-5">
              ₹43.2K
            </h2>

            <div className="text-green-600 mt-8">
              ↑ 9% vs last week
            </div>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
            <IndianRupee
              className="text-blue-600"
              size={30}
            />
          </div>

        </div>
      </div>

      {/* Company */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between">

          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Company Share
            </p>

            <h2 className="text-4xl font-bold mt-5">
              ₹32.4K
            </h2>

            <div className="text-green-600 mt-8">
              ↑ 9% vs last week
            </div>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
            <Wallet
              className="text-green-600"
              size={28}
            />
          </div>

        </div>
      </div>

      {/* Store */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between">

          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Store Share
            </p>

            <h2 className="text-4xl font-bold mt-5">
              ₹10.8K
            </h2>

            <div className="text-green-600 mt-8">
              ↑ 9% vs last week
            </div>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
            <Wallet
              className="text-green-600"
              size={28}
            />
          </div>

        </div>
      </div>

      {/* Pending */}
      <div className="bg-white rounded-3xl p-7 shadow">
        <div className="flex justify-between">

          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Pending
            </p>

            <h2 className="text-4xl font-bold mt-5">
              ₹15.2K
            </h2>

            <div className="text-red-500 mt-8">
              ↓ 4% vs last week
            </div>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
            <AlertCircle
              className="text-yellow-600"
              size={28}
            />
          </div>

        </div>
      </div>

    </div>
  );
}