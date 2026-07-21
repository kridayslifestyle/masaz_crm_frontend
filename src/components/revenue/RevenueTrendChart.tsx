"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "11/5", revenue: 48000 },
  { day: "13/5", revenue: 46000 },
  { day: "15/5", revenue: 52000 },
  { day: "17/5", revenue: 42000 },
  { day: "19/5", revenue: 55000 },
  { day: "21/5", revenue: 47000 },
  { day: "23/5", revenue: 56000 },
  { day: "25/5", revenue: 60000 },
  { day: "27/5", revenue: 44000 },
  { day: "29/5", revenue: 57000 },
  { day: "31/5", revenue: 31000 },
  { day: "2/6", revenue: 47000 },
  { day: "4/6", revenue: 60000 },
  { day: "6/6", revenue: 29000 },
  { day: "8/6", revenue: 61000 },
];

export default function RevenueTrendChart() {
  return (
    <div className="bg-white rounded-3xl shadow p-8">
      <h2 className="text-3xl font-bold mb-8">
        Revenue Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={400}
      >
        <AreaChart data={data}>
          <CartesianGrid
            strokeDasharray="4 4"
          />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            fill="#bfdbfe"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}