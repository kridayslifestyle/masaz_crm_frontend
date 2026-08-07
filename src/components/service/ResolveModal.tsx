"use client";

import { useState } from "react";
import { resolveService } from "@/services/service";

interface Props {
  complaintId: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ResolveModal({
  complaintId,
  onClose,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    technician_name: "",
    visit_date: "",
    actual_problem: "",
    resolution_details: "",
    parts_replaced: "",
    service_cost: 0,
    resolution_date: "",
    notes: "",
  });

  const handleSubmit = async () => {
    try {
      await resolveService(complaintId, form);

      alert("Service resolved successfully");

      onSuccess(); // refresh table
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to resolve service");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[700px] max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Resolve Service
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Technician Name"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                technician_name: e.target.value,
              })
            }
          />

          <input
            type="date"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                visit_date: e.target.value,
              })
            }
          />

          <input
            placeholder="Actual Problem"
            className="border p-3 rounded-xl col-span-2"
            onChange={(e) =>
              setForm({
                ...form,
                actual_problem: e.target.value,
              })
            }
          />

          <input
            placeholder="Resolution Details"
            className="border p-3 rounded-xl col-span-2"
            onChange={(e) =>
              setForm({
                ...form,
                resolution_details: e.target.value,
              })
            }
          />

          <input
            placeholder="Parts Replaced"
            className="border p-3 rounded-xl col-span-2"
            onChange={(e) =>
              setForm({
                ...form,
                parts_replaced: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Service Cost"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                service_cost: Number(e.target.value),
              })
            }
          />

          <input
            type="date"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                resolution_date: e.target.value,
              })
            }
          />

          <input
            placeholder="Notes"
            className="border p-3 rounded-xl col-span-2"
            onChange={(e) =>
              setForm({
                ...form,
                notes: e.target.value,
              })
            }
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            Submit
          </button>

        </div>

      </div>

    </div>
  );
}