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

export default function StoreChairsChart({
  stores,
}: Props) {
  const data = stores.map((store) => ({
    name: store.name.split(" ")[0],
    chairs: store.total_chairs,
  }));

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-2">
        Chairs per Store
      </h2>

      <p className="text-gray-500 mb-6">
        Installed chairs across partner stores
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
              dataKey="chairs"
              fill="#10B981"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}