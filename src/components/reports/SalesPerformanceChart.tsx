"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jun",
    performance: 55,
  },
  {
    month: "Jul",
    performance: 63,
  },
  {
    month: "Aug",
    performance: 82,
  },
  {
    month: "Sep",
    performance: 58,
  },
  {
    month: "Oct",
    performance: 84,
  },
  {
    month: "Nov",
    performance: 123,
  },
];

export default function SalesPerformanceChart() {
  return (
    <div className="bg-white rounded-3xl shadow p-7">

      <h2 className="text-3xl font-bold mb-8">
        Sales Team Performance
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="5 5" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="performance"
            fill="#10b981"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}