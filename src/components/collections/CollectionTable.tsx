"use client";

import { Collection } from "@/types/collection";
import PaymentStatusBadge from "./PaymentStatusBadge";

interface Props {
  collections: Collection[];
}

export default function CollectionTable({ collections }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="border-b text-gray-500">
          <tr>
            <th className="p-6 text-left">DATE</th>
            <th className="p-6 text-left">CHAIR</th>
            <th className="p-6 text-left">STORE</th>
            <th className="p-6 text-left">DAILY INCOME</th>
            <th className="p-6 text-left">COMPANY (75%)</th>
            <th className="p-6 text-left">STORE (25%)</th>
            <th className="p-6 text-left">PAYMENT</th>
          </tr>
        </thead>

        <tbody>
          {collections.map((row) => (
            <tr
              key={row.id}
              className="
        border-b
        hover:bg-slate-50
      "
            >
              <td className="p-6 text-gray-500">{row.date}</td>

              <td className="p-6 font-semibold">{row.chair_code}</td>

              <td className="p-6">{row.store_name}</td>

              <td className="p-6 font-semibold">
                ₹{(row.total_amount ?? 0).toLocaleString()}
              </td>

              <td className="p-6 text-blue-600 font-semibold">
                ₹{Math.round((row.total_amount ?? 0) * 0.75).toLocaleString()}
              </td>

              <td className="p-6 text-green-600 font-semibold">
                ₹{Math.round((row.total_amount ?? 0) * 0.25).toLocaleString()}
              </td>

              <td className="p-6">
                <PaymentStatusBadge status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
