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

interface RevenueTrend {
  day: string;
  revenue: number;
}

interface Props {
  data: RevenueTrend[];
}

export default function RevenueTrendChart({ data }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow p-8">
      <h2 className="text-3xl font-bold mb-8">Revenue Trend</h2>

      {data.length === 0 ? (
        <div className="h-100 flex items-center justify-center text-gray-500">
          No revenue trend data available.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Revenue",
              ]}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              fill="#bfdbfe"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
