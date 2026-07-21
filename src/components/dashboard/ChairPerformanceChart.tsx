"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = [
  "#2563eb", // active
  "#f59e0b", // low performing
  "#8b5cf6", // maintenance
  "#ef4444", // offline
];

export default function ChairPerformanceChart({
  data,
}: {
  data: {
    active: number;
    low_performing: number;
    maintenance: number;
    offline: number;
  };
}) {

  const chartData = [
    {
      name: "Active",
      value: data.active,
    },
    {
      name: "Low Performing",
      value: data.low_performing,
    },
    {
      name: "Maintenance",
      value: data.maintenance,
    },
    {
      name: "Offline",
      value: data.offline,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow h-full">

      <h2 className="text-xl font-semibold mb-2">
        Chair Performance
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        By Status
      </p>

      <ResponsiveContainer
        width="100%"
        height={380}
      >
        <PieChart>

          <Pie
            data={chartData}
            cx="50%"
            cy="55%"
            innerRadius={55}
            outerRadius={95}
            dataKey="value"
            paddingAngle={3}
          >
            {chartData.map(
              (_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              )
            )}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}