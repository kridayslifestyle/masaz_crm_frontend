"use client";

import { useState, useEffect } from "react";
import { createComplaint } from "@/services/service";
import { getStores } from "@/services/stores";
import { getChairs } from "@/services/chairs";

export default function CreateComplaintModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [stores, setStores] = useState<any[]>([]);
  const [chairs, setChairs] = useState<any[]>([]);
  const [filteredChairs, setFilteredChairs] = useState<any[]>([]);

  const [form, setForm] = useState({
    store_id: 0,
    chair_id: 0,
    complaint_date: "",
    reported_by: "",
    customer_name: "",
    customer_phone: "",
    problem_category: "power_issue",
    problem_description: "",
    priority: "medium",
    notes: "",
  });

  // Load stores & chairs
  useEffect(() => {
    const fetchData = async () => {
      const storeRes = await getStores();
      const chairRes = await getChairs();

      setStores(storeRes.data);
      setChairs(chairRes.data);
    };

    fetchData();
  }, []);

  // Filter chairs based on store
  useEffect(() => {
    if (form.store_id) {
      const filtered = chairs.filter(
        (c) => c.store_id === form.store_id
      );
      setFilteredChairs(filtered);
    }
  }, [form.store_id, chairs]);

  const handleSubmit = async () => {
    try {
      await createComplaint(form);

      alert("Complaint created successfully");

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to create complaint");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[700px] max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Create Complaint
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="grid grid-cols-2 gap-4">

          {/* Store */}
          <select
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                store_id: Number(e.target.value),
              })
            }
          >
            <option>Select Store</option>
            {stores.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          {/* Chair */}
          <select
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                chair_id: Number(e.target.value),
              })
            }
          >
            <option>Select Chair</option>
            {filteredChairs.map((c) => (
              <option key={c.id} value={c.id}>
                {c.serial_number}
              </option>
            ))}
          </select>

          <input
            type="date"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                complaint_date: e.target.value,
              })
            }
          />

          <input
            placeholder="Reported By"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                reported_by: e.target.value,
              })
            }
          />

          <input
            placeholder="Customer Name"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                customer_name: e.target.value,
              })
            }
          />

          <input
            placeholder="Customer Phone"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                customer_phone: e.target.value,
              })
            }
          />

          <input
            placeholder="Problem Description"
            className="border p-3 rounded-xl col-span-2"
            onChange={(e) =>
              setForm({
                ...form,
                problem_description: e.target.value,
              })
            }
          />

          {/* Priority */}
          <select
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                priority: e.target.value,
              })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Notes */}
          <input
            placeholder="Notes"
            className="border p-3 rounded-xl"
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
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Create
          </button>

        </div>

      </div>

    </div>
  );
}