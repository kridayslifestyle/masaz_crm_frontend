"use client";

import { useState, useEffect } from "react";
import { createComplaint } from "@/services/service";
import { getStores } from "@/services/stores";
import { getChairs } from "@/services/chairs";
import { getTechnicians } from "@/services/technician";

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
  const [technicians, setTechnicians] = useState<any[]>([]);

  const [form, setForm] = useState({
    store_id: 0,
    chair_id: 0,
    technician_id: 0,
    complaint_date: new Date().toISOString().split("T")[0], // ✅ auto date
    reported_by: "",
    customer_name: "",
    customer_phone: "",
    problem_category: "power_issue",
    problem_description: "",
    priority: "medium",
    notes: "",
  });

  // ✅ Load stores, chairs, technicians
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeRes = await getStores();
        const chairRes = await getChairs();
        const techRes = await getTechnicians();

        setStores(storeRes.data);
        setChairs(chairRes.data);
        setTechnicians(techRes.data);
      } catch (err) {
        console.error("Error loading data", err);
      }
    };

    fetchData();
  }, []);

  // ✅ Filter chairs when store changes + reset chair
  useEffect(() => {
    if (form.store_id) {
      const filtered = chairs.filter(
        (c) => c.store_id === form.store_id
      );
      setFilteredChairs(filtered);

      setForm((prev) => ({
        ...prev,
        chair_id: 0,
      }));
    }
  }, [form.store_id, chairs]);

  // ✅ Submit with validation
  const handleSubmit = async () => {
    if (!form.store_id || !form.chair_id || !form.problem_description) {
      alert("Please fill all required fields");
      return;
    }

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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-[700px] max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Create Complaint
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        {/* Form */}
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
            <option value="">Select Store</option>
            {stores.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          {/* Chair */}
          <select
            className="border p-3 rounded-xl"
            value={form.chair_id || ""}
            onChange={(e) =>
              setForm({
                ...form,
                chair_id: Number(e.target.value),
              })
            }
          >
            <option value="">Select Chair</option>
            {filteredChairs.map((c) => (
              <option key={c.id} value={c.id}>
                {c.serial_number}
              </option>
            ))}
          </select>

          {/* Technician */}
          <select
            className="border p-3 rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                technician_id: Number(e.target.value),
              })
            }
          >
            <option value="">Select Technician</option>
            {technicians.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

          {/* Date */}
          <input
            type="date"
            className="border p-3 rounded-xl"
            value={form.complaint_date}
            onChange={(e) =>
              setForm({
                ...form,
                complaint_date: e.target.value,
              })
            }
          />

          {/* Reported By */}
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

          {/* Customer Name */}
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

          {/* Customer Phone */}
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

          {/* Problem Description */}
          <textarea
            placeholder="Problem Description"
            className="border p-3 rounded-xl col-span-2"
            rows={3}
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
            <option value="medium" selected>Medium</option>
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

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Create Complaint
          </button>

        </div>

      </div>
    </div>
  );
}