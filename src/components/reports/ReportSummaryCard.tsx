export default function ReportSummaryCard() {
  return (
    <div
      className="
        rounded-[32px]
        overflow-hidden
        shadow
        mb-10
      "
    >
      {/* Top Gradient */}
      <div
        className="
          bg-gradient-to-r
          from-blue-700
          to-cyan-500
          p-8
          text-white
        "
      >
        <div className="flex justify-between">

          <div>

            <p className="uppercase tracking-wider text-white/70">
              Monthly Performance Report
            </p>

            <h2 className="text-5xl font-bold mt-2">
              November 2026
            </h2>

          </div>

          <div className="text-6xl">
            ✨
          </div>

        </div>

        <div className="grid grid-cols-3 gap-10 mt-14">

          <div>

            <p className="text-white/70 text-lg">
              Total Revenue
            </p>

            <h3 className="text-5xl font-bold mt-3">
              ₹8.22L
            </h3>

          </div>

          <div>

            <p className="text-white/70 text-lg">
              Company (75%)
            </p>

            <h3 className="text-5xl font-bold mt-3">
              ₹6.16L
            </h3>

          </div>

          <div>

            <p className="text-white/70 text-lg">
              Store (25%)
            </p>

            <h3 className="text-5xl font-bold mt-3">
              ₹2.05L
            </h3>

          </div>

        </div>
      </div>

      {/* Bottom Cards */}
      <div className="bg-white p-8">

        <div className="grid grid-cols-3 gap-6">

          {/* Best Store */}
          <div
            className="
              border
              rounded-3xl
              p-6
            "
          >
            <p className="uppercase tracking-wider text-gray-500">
              Best Store
            </p>

            <h3 className="text-3xl font-bold mt-4">
              Wellness Hub Bodakdev
            </h3>

            <p className="text-green-500 text-2xl mt-4 font-semibold">
              ₹86,924
            </p>

          </div>

          {/* Best Chair */}
          <div
            className="
              border
              border-green-200
              rounded-3xl
              p-6
            "
          >
            <p className="uppercase tracking-wider text-green-500">
              Best Chair
            </p>

            <h3 className="text-3xl font-bold mt-4">
              MZ-3606
            </h3>

            <p className="text-2xl mt-4 font-semibold">
              ₹67,338
            </p>

          </div>

          {/* Lowest Chair */}
          <div
            className="
              border
              border-red-200
              rounded-3xl
              p-6
            "
          >
            <p className="uppercase tracking-wider text-red-500">
              Lowest Chair
            </p>

            <h3 className="text-3xl font-bold mt-4">
              MZ-8525
            </h3>

            <p className="text-2xl mt-4 font-semibold">
              ₹5,226
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}