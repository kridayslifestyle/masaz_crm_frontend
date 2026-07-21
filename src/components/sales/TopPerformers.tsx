"use client";

import { Trophy } from "lucide-react";

interface Props {
  performance: any[];
}

export default function TopPerformers({
  performance,
}: Props) {
  const topThree = performance.slice(0, 3);

  return (
    <div className="grid lg:grid-cols-3 gap-6">

      {topThree.map((employee, index) => (
        <div
          key={employee.id}
          className={`
            rounded-3xl
            shadow
            p-7
            ${
              index === 0
                ? "bg-linear-to-r from-emerald-500 to-cyan-500 text-white"
                : "bg-white"
            }
          `}
        >

          {/* Rank */}
          <div className="flex justify-between items-start">

            <div>
              <div className="flex items-center gap-2 mb-5">
                <Trophy size={18} />

                <span className="uppercase text-sm tracking-wider">
                  Rank #{index + 1}
                </span>
              </div>

              <h2 className="text-4xl font-bold">
                {employee.name}
              </h2>

              <p
                className={
                  index === 0
                    ? "mt-2 text-white/80"
                    : "mt-2 text-gray-500"
                }
              >
                {employee.region}
              </p>
            </div>

            <div className="text-right">

              <h1 className="text-5xl font-bold">
                {employee.performance_percentage}%
              </h1>

              <p
                className={
                  index === 0
                    ? "text-white/80"
                    : "text-gray-500"
                }
              >
                target
              </p>

            </div>

          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div
              className={`
                rounded-2xl
                p-5
                ${
                  index === 0
                    ? "bg-white/20"
                    : "bg-slate-100"
                }
              `}
            >
              <p
                className={
                  index === 0
                    ? "text-white/80"
                    : "text-gray-500"
                }
              >
                Incentive
              </p>

              <h3 className="text-3xl font-bold mt-2">
                ₹{employee.incentive_amount?.toLocaleString()}
              </h3>
            </div>

            <div
              className={`
                rounded-2xl
                p-5
                ${
                  index === 0
                    ? "bg-white/20"
                    : "bg-slate-100"
                }
              `}
            >
              <p
                className={
                  index === 0
                    ? "text-white/80"
                    : "text-gray-500"
                }
              >
                Chairs
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {employee.assigned_chairs}
              </h3>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}