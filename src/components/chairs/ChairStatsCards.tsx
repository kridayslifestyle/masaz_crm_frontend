"use client";

interface Props {
  total: number;
  active: number;
  low: number;
  maintenance: number;
  offline: number;
}

export default function ChairStatsCards({
  total,
  active,
  low,
  maintenance,
  offline,
}: Props) {
  const cards = [
    {
      title: "Total Chairs",
      value: total,
      color: "text-blue-600",
    },
    {
      title: "Active",
      value: active,
      color: "text-green-600",
    },
    {
      title: "Low Income",
      value: low,
      color: "text-yellow-600",
    },
    {
      title: "Maintenance",
      value: maintenance,
      color: "text-purple-600",
    },
    {
      title: "Offline",
      value: offline,
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            bg-white
            rounded-3xl
            shadow
            p-6
          "
        >
          <p className="text-gray-500 text-sm">
            {card.title}
          </p>

          <h2
            className={`
              text-4xl
              font-bold
              mt-3
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