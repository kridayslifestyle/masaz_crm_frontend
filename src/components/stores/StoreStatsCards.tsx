"use client";

import { Store } from "@/types/store";

interface Props {
  stores: Store[];
}

export default function StoreStatsCards({
  stores,
}: Props) {
  const totalStores = stores.length;

  const activeStores = stores.filter(
    (s) => s.is_active
  ).length;

  const totalChairs = stores.reduce(
    (sum, store) =>
      sum + (store.total_chairs || 0),
    0
  );

  const totalRevenue = stores.reduce(
    (sum, store) =>
      sum + (store.monthly_revenue || 0),
    0
  );

  const cards = [
    {
      title: "Total Stores",
      value: totalStores,
      color: "text-blue-600",
    },
    {
      title: "Active Stores",
      value: activeStores,
      color: "text-green-600",
    },
    {
      title: "Installed Chairs",
      value: totalChairs,
      color: "text-purple-600",
    },
    {
      title: "Monthly Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      color: "text-orange-600",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-8
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            bg-white
            rounded-3xl
            shadow-sm
            p-6
            hover:shadow-lg
            transition
          "
        >
          <p
            className="
              text-gray-500
              text-sm
              mb-3
            "
          >
            {card.title}
          </p>

          <h2
            className={`
              text-4xl
              font-bold
              ${card.color}
            `}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}