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

interface MonthlyRevenue {
  month: string;
  company_share: number;
  store_share: number;
}

interface Props {
  data: MonthlyRevenue[];
}

export default function MonthlyBreakdownChart({ data }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow p-8 w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Monthly Revenue Breakdown
        </h2>

        <p className="text-gray-500 mt-2">
          Company vs Store revenue distribution
        </p>
      </div>

      {data.length === 0 ? (
        <div className="h-125 flex items-center justify-center text-gray-500">
          No monthly revenue data available.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="company_share"
              fill="#2563eb"
              radius={[10, 10, 0, 0]}
            />

            <Bar
              dataKey="store_share"
              fill="#10b981"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}