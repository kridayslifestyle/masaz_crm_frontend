"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jun",
    company_share: 800000,
    store_share: 250000,
  },
  {
    month: "Jul",
    company_share: 950000,
    store_share: 300000,
  },
  {
    month: "Aug",
    company_share: 1150000,
    store_share: 350000,
  },
  {
    month: "Sep",
    company_share: 1000000,
    store_share: 320000,
  },
  {
    month: "Oct",
    company_share: 1200000,
    store_share: 400000,
  },
  {
    month: "Nov",
    company_share: 1400000,
    store_share: 450000,
  },
];

export default function MonthlyBreakdownChart() {
  return (
    <div
      className="
    bg-white
    rounded-3xl
    shadow
    p-8
    w-full
  "
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Monthly Revenue Breakdown</h2>

        <p className="text-gray-500 mt-2">Company vs Store revenue split</p>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey="company_share" fill="#2563eb" radius={[10, 10, 0, 0]} />

          <Bar dataKey="store_share" fill="#10b981" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
