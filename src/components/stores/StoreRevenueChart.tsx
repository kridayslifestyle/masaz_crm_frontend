"use client";

import { Store } from "@/types/store";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  stores: Store[];
}

export default function StoreRevenueChart({
  stores,
}: Props) {
  const data = stores.map((store) => ({
    name: store.name.split(" ")[0],
    revenue: store.monthly_revenue,
  }));

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-2">
        Revenue History
      </h2>

      <p className="text-gray-500 mb-6">
        Current month collections
      </p>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="revenue"
              fill="#2563EB"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}