"use client";

import { CalendarDays } from "lucide-react";

export default function CollectionFilters() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow
        p-6
        mb-8
      "
    >
      <div className="flex items-center gap-6">

        {/* Label */}
        <div className="flex items-center gap-3 text-gray-600">
          <CalendarDays size={22} />

          <span className="text-xl">
            Date range
          </span>
        </div>

        {/* From */}
        <input
          type="date"
          className="
            border
            rounded-2xl
            px-5
            py-3
            text-lg
            shadow-sm
          "
        />

        <span className="text-2xl text-gray-500">
          to
        </span>

        {/* To */}
        <input
          type="date"
          className="
            border
            rounded-2xl
            px-5
            py-3
            text-lg
            shadow-sm
          "
        />

        {/* Clear Button */}
        <button
          className="
            bg-slate-100
            hover:bg-slate-200
            px-6
            py-3
            rounded-2xl
            text-lg
            font-medium
          "
        >
          Clear
        </button>

      </div>
    </div>
  );
}