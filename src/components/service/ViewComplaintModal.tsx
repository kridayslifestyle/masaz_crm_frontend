"use client";

import { Complaint } from "@/types/service";

interface Props {
  data: Complaint;
  onClose: () => void;
}

export default function ViewComplaintModal({ data, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[800px] max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Complaint Details
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          <div><b>ID:</b> {data.id}</div>
          <div><b>Status:</b> {data.status}</div>

          <div><b>Store:</b> {data.store_name}</div>
          <div><b>Chair:</b> {data.chair_machine_number}</div>

          <div><b>Customer:</b> {data.customer_name}</div>
          <div><b>Phone:</b> {data.customer_phone}</div>

          <div><b>Reported By:</b> {data.reported_by}</div>
          <div><b>Date:</b> {data.complaint_date}</div>

          <div className="col-span-2">
            <b>Problem:</b> {data.problem_description}
          </div>

          <div><b>Priority:</b> {data.priority}</div>
          <div><b>Category:</b> {data.problem_category}</div>

          <div className="col-span-2 border-t pt-4 mt-2 font-semibold">
            Service Info
          </div>

          <div><b>Technician:</b> {data.technician_name || "-"}</div>
          <div><b>Visit Date:</b> {data.visit_date || "-"}</div>

          <div className="col-span-2">
            <b>Actual Problem:</b> {data.actual_problem || "-"}
          </div>

          <div className="col-span-2">
            <b>Resolution:</b> {data.resolution_details || "-"}
          </div>

          <div><b>Parts:</b> {data.parts_replaced || "-"}</div>
          <div><b>Cost:</b> ₹{data.service_cost || 0}</div>

          <div><b>Resolved On:</b> {data.resolution_date || "-"}</div>

          <div className="col-span-2">
            <b>Notes:</b> {data.notes || "-"}
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded-xl"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}