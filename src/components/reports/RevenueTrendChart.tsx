"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jun", revenue: 1040000 },
  { month: "Jul", revenue: 1570000 },
  { month: "Aug", revenue: 1620000 },
  { month: "Sep", revenue: 1180000 },
  { month: "Oct", revenue: 1200000 },
  { month: "Nov", revenue: 822000 },
];

export default function RevenueTrendChart() {
  return (
    <div className="bg-white rounded-3xl shadow p-7">

      <h2 className="text-3xl font-bold mb-8">
        6-Month Revenue Trend
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="5 5" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}