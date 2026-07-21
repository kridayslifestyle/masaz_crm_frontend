"use client";

import { useState } from "react";
import { createChair } from "@/services/chairs";

interface Props {
  onClose: () => void;
}

export default function AddChairModal({
  onClose,
}: Props) {
  const [form, setForm] = useState({
    device_id: "",
    machine_number: "",
    equipment_type: "",
    store_id: "",
    installed_by_employee_id: "",
    status: "active",
  });

  const handleSave = async () => {
    try {
      await createChair({
        ...form,
        store_id: Number(form.store_id),
        installed_by_employee_id:
          form.installed_by_employee_id
            ? Number(form.installed_by_employee_id)
            : null,
      });

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Failed to create chair");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-[700px]">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Add Chair
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5">

          <div>
            <label className="text-gray-500 text-sm">
              Device ID
            </label>

            <input
              value={form.device_id}
              onChange={(e) =>
                setForm({
                  ...form,
                  device_id: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Machine Number
            </label>

            <input
              value={form.machine_number}
              onChange={(e) =>
                setForm({
                  ...form,
                  machine_number: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Equipment Type
            </label>

            <input
              value={form.equipment_type}
              onChange={(e) =>
                setForm({
                  ...form,
                  equipment_type: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Store ID
            </label>

            <input
              value={form.store_id}
              onChange={(e) =>
                setForm({
                  ...form,
                  store_id: e.target.value,
                })
              }
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Employee ID
            </label>

            <input
              value={form.installed_by_employee_id}
              onChange={(e) =>
                setForm({
                  ...form,
                  installed_by_employee_id:
                    e.target.value,
                })
              }
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="
              px-6
              py-3
              rounded-xl
              bg-slate-200
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
              px-6
              py-3
              rounded-xl
              bg-blue-600
              text-white
            "
          >
            Save Chair
          </button>

        </div>

      </div>
    </div>
  );
}