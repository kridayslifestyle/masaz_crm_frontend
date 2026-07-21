"use client";

import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function StoreSearch({
  search,
  setSearch,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-5 mb-8">

      <div className="relative">

        <Search
          size={22}
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search store, owner, city..."
          className="
            w-full
            border
            border-gray-200
            rounded-full
            py-4
            pl-14
            pr-6
            text-lg
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

      </div>

    </div>
  );
}