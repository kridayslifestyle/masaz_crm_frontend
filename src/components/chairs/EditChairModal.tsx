"use client";

import { Chair } from "@/types/chair";
import { useState } from "react";
import { updateChair } from "@/services/chairs";

interface Props {
  chair: Chair;
  onClose: () => void;
}

export default function EditChairModal({
  chair,
  onClose,
}: Props) {

  const [form, setForm] = useState({
    device_id: chair.device_id,
    model_name: chair.model_name,
    status: chair.status,
  });

  const handleSave = async () => {
    try {
      await updateChair(chair.id, form);

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Failed to update chair");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-[700px]">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Edit Chair
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
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
              "
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Model
            </label>

            <input
              value={form.model_name}
              onChange={(e) =>
                setForm({
                  ...form,
                  model_name: e.target.value,
                })
              }
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
              "
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Status
            </label>

            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value,
                })
              }
              className="
                w-full
                border
                rounded-xl
                p-3
                mt-2
              "
            >
              <option value="active">
                Active
              </option>

              <option value="maintenance">
                Maintenance
              </option>

              <option value="offline">
                Offline
              </option>

              <option value="low_performing">
                Low Income
              </option>
            </select>
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
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}