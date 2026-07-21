"use client";

import ChairStatusBadge from "./ChairStatusBadge";
import ChairPerformanceBar from "./ChairPerformanceBar";
import { Chair } from "@/types/chair";
import { moveChairToMaintenance } from "@/services/chairs";

interface Props {
  chairs: Chair[];

  setSelectedChair: React.Dispatch<React.SetStateAction<Chair | null>>;

  setShowViewModal: React.Dispatch<React.SetStateAction<boolean>>;

  setEditingChair: React.Dispatch<React.SetStateAction<Chair | null>>;

  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChairTable({
  chairs,
  setSelectedChair,
  setShowViewModal,
  setEditingChair,
  setShowEditModal,
}: Props) {
  const handleMaintenance = async (chairId: number) => {
    try {
      const confirmed = window.confirm("Move this chair to maintenance?");

      if (!confirmed) return;

      await moveChairToMaintenance(chairId);

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Failed to move chair to maintenance");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow overflow-x-auto">
      <table className="min-w-[1500px] w-full">
        <thead className="border-b text-gray-500 text-sm">
          <tr>
            <th className="p-5 text-left">SERIAL</th>
            <th className="p-5 text-left">DEVICE ID</th>
            <th className="p-5 text-left">MODEL</th>
            <th className="p-5 text-left">STORE</th>
            <th className="p-5 text-left">LOCATION</th>
            <th className="p-5 text-left">OWNER</th>
            <th className="p-5 text-left">INSTALLED</th>
            <th className="p-5 text-left">DAILY</th>
            <th className="p-5 text-left">MONTHLY</th>
            <th className="p-5 text-left">STATUS</th>
            <th className="p-5 text-left min-w-[200px]">PERFORMANCE</th>
            <th className="p-5 text-left">ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {chairs.map((chair) => (
            <tr key={chair.id} className="border-b hover:bg-slate-50">
              <td className="p-5 font-semibold">{chair.serial_number}</td>

              <td className="p-5 text-gray-500">{chair.device_id}</td>

              <td className="p-5">{chair.model_name}</td>

              <td className="p-5">{chair.store_name}</td>

              <td className="p-5 text-gray-500">{chair.city}</td>

              <td className="p-5">{chair.owner_name}</td>

              <td className="p-5 text-gray-500">{chair.installed_days}d</td>

              <td className="p-5 font-semibold">
                ₹{chair.daily_revenue?.toLocaleString()}
              </td>

              <td className="p-5 font-semibold">
                ₹{chair.monthly_revenue?.toLocaleString()}
              </td>

              <td className="p-5">
                <ChairStatusBadge status={chair.status} />
              </td>

              <td className="p-5 min-w-[200px]">
                <ChairPerformanceBar value={chair.performance_score} />
              </td>

              <td className="p-5">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedChair(chair);
                      setShowViewModal(true);
                    }}
                    className="
    bg-slate-100
    hover:bg-slate-200
    px-4
    py-2
    rounded-xl
  "
                  >
                    View
                  </button>

                  <button
                    onClick={() => {
                      setEditingChair(chair);
                      setShowEditModal(true);
                    }}
                    className="
    bg-blue-600
    text-white
    hover:bg-blue-700
    px-4
    py-2
    rounded-xl
  "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleMaintenance(chair.id)}
                    className="
    bg-yellow-500
    text-white
    hover:bg-yellow-600
    px-4
    py-2
    rounded-xl
  "
                  >
                    Maintenance
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
