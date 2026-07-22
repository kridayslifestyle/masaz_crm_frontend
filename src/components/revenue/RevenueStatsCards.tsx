"use client";

import {
  IndianRupee,
  Building2,
  PiggyBank,
  Receipt,
} from "lucide-react";

interface RevenueStats {
  gross_revenue: number;
  company_share: number;
  store_share: number;
  tax_estimate: number;
}

interface Props {
  stats: RevenueStats | null;
}

export default function RevenueStatsCards({ stats }: Props) {
  const cards = [
    {
      title: "Gross Revenue",
      value: stats?.gross_revenue,
      icon: <IndianRupee size={30} className="text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Company Share",
      value: stats?.company_share,
      icon: <Building2 size={30} className="text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Store Share",
      value: stats?.store_share,
      icon: <PiggyBank size={30} className="text-emerald-600" />,
      bg: "bg-emerald-100",
    },
    {
      title: "Tax Estimate",
      value: stats?.tax_estimate,
      icon: <Receipt size={30} className="text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-3xl p-7 shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 uppercase tracking-wide text-sm">
                {card.title}
              </p>

              <h2 className="text-4xl font-semibold mt-4">
                {card.value != null
                  ? `₹${card.value.toLocaleString("en-IN")}`
                  : "--"}
              </h2>
            </div>

            <div
              className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}