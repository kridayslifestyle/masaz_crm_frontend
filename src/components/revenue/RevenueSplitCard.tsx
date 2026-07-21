"use client";

export default function RevenueSplitCard() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h2 className="text-2xl font-bold mb-8">
        Revenue Split
      </h2>

      {/* Company */}
      <div className="mb-8">

        <div className="flex justify-between mb-3">
          <span className="font-medium">
            Company Share
          </span>

          <span className="font-bold text-blue-600">
            ₹750
          </span>
        </div>

        <div className="w-full bg-slate-200 h-3 rounded-full">

          <div
            className="
              bg-blue-600
              h-3
              rounded-full
            "
            style={{
              width: "75%",
            }}
          />

        </div>

      </div>

      {/* Store */}
      <div className="mb-10">

        <div className="flex justify-between mb-3">
          <span className="font-medium">
            Store Share
          </span>

          <span className="font-bold text-green-600">
            ₹250
          </span>
        </div>

        <div className="w-full bg-slate-200 h-3 rounded-full">

          <div
            className="
              bg-green-600
              h-3
              rounded-full
            "
            style={{
              width: "25%",
            }}
          />

        </div>

      </div>

      <div className="border-t pt-6 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-500">
            Gross Revenue
          </span>

          <span className="font-bold">
            ₹1,000
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Tax (18%)
          </span>

          <span className="font-bold text-red-500">
            -₹135
          </span>
        </div>

        <div className="flex justify-between text-lg">
          <span className="font-bold">
            Net Company Revenue
          </span>

          <span className="font-bold text-blue-600">
            ₹615
          </span>
        </div>

      </div>

    </div>
  );
}