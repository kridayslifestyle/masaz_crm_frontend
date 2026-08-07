"use client";

import { useState } from "react";
import { startService } from "@/services/service";
import { Complaint } from "@/types/service";
import ResolveModal from "./ResolveModal";
import ViewComplaintModal from "./ViewComplaintModal";
import AssignTechnicianModal from "./AssignTechnicianModal";

interface Props {
  data: Complaint[];
  fetchData: () => void;
}

export default function ServiceTable({ data, fetchData }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showResolve, setShowResolve] = useState(false);
  const [filter, setFilter] = useState("all");
  const [showAssign, setShowAssign] = useState(false);
  const [viewData, setViewData] = useState<Complaint | null>(null);
  const filteredData =
    filter === "all" ? data : data.filter((item) => item.status === filter);

//   const handleStart = async (id: number) => {
//     try {
//       await startService(id,);
//       fetchData();
//     } catch (err) {
//       console.error("Start failed", err);
//     }
//   };

  return (
    <div className="bg-white rounded-3xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Service Complaints</h2>

      {/* Filters */}
      <div className="flex gap-3 mb-4">
        {["all", "open", "in_progress", "resolved"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl ${
              filter === f ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <table className="w-full">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Store</th>
            <th className="p-4 text-left">Chair</th>
            <th className="p-4 text-left">Problem</th>
            <th className="p-4 text-left">Technician</th>
            <th className="p-4 text-left">Priority</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="p-4">{item.id}</td>
              <td className="p-4">{item.store_name}</td>
              <td className="p-4">{item.chair_machine_number}</td>
              <td className="p-4">{item.problem_description}</td>
              <td className="p-4">{item.technician_name || "-"}</td>

              {/* Priority */}
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    item.priority === "high"
                      ? "bg-red-500"
                      : item.priority === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }`}
                >
                  {item.priority}
                </span>
              </td>

              {/* Status */}
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "open"
                      ? "bg-red-100 text-red-600"
                      : item.status === "in_progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              {/* Actions */}
              <td className="p-4 space-x-2">
                {item.status === "open" && (
                  <button
                    onClick={() => {
                      setSelectedId(item.id);
                      setShowAssign(true);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                  >
                    Start
                  </button>
                )}

                {item.status === "in_progress" && (
                  <button
                    onClick={() => {
                      setSelectedId(item.id);
                      setShowResolve(true);
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl"
                  >
                    Resolve
                  </button>
                )}

                {item.status === "resolved" && (
                  <button
                    onClick={() => setViewData(item)}
                    className="bg-gray-300 px-4 py-2 rounded-xl"
                  >
                    View
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Resolve Modal */}
      {showResolve && selectedId && (
        <ResolveModal
          complaintId={selectedId}
          onClose={() => setShowResolve(false)}
          onSuccess={fetchData}
        />
      )}

      {viewData && (
        <ViewComplaintModal data={viewData} onClose={() => setViewData(null)} />
      )}

      {showAssign && selectedId && (
        <AssignTechnicianModal
          complaintId={selectedId}
          onClose={() => setShowAssign(false)}
          onSuccess={fetchData}
        />
      )}
    </div>
  );
}
