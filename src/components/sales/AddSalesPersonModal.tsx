"use client";

import { useState } from "react";

import { createEmployee } from "@/services/employees";

interface Props {
  onClose: () => void;
}

export default function AddSalesPersonModal({
  onClose,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    region: "",
    designation: "",
    target_revenue: "",
    commission_percentage: "",
    joining_date: "",
    status: "active",
  });

  const handleSubmit = async () => {
  try {
    await createEmployee({
      ...form,
      target_revenue: Number(form.target_revenue),
      commission_percentage: Number(form.commission_percentage),
    });

    alert("Employee created successfully");

    onClose();

    window.location.reload();
  } catch (error) {
    console.error(error);

    alert("Failed to create employee");
  }
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[750px]">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Add Sales Person
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <input
            placeholder="Name"
            className="border rounded-2xl p-4"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Phone"
            className="border rounded-2xl p-4"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="border rounded-2xl p-4"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Region"
            className="border rounded-2xl p-4"
            value={form.region}
            onChange={(e) =>
              setForm({
                ...form,
                region: e.target.value,
              })
            }
          />

          <input
            placeholder="Designation"
            className="border rounded-2xl p-4"
            value={form.designation}
            onChange={(e) =>
              setForm({
                ...form,
                designation: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Target Revenue"
            className="border rounded-2xl p-4"
            value={form.target_revenue}
            onChange={(e) =>
              setForm({
                ...form,
                target_revenue: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Commission %"
            className="border rounded-2xl p-4"
            value={form.commission_percentage}
            onChange={(e) =>
              setForm({
                ...form,
                commission_percentage: 
                  e.target.value,
              })
            }
          />

          <input
            type="date"
            className="border rounded-2xl p-4"
            value={form.joining_date}
            onChange={(e) =>
              setForm({
                ...form,
                joining_date: e.target.value,
              })
            }
          />

          <select
            className="border rounded-2xl p-4"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            <option value="active">
              Active
            </option>

            <option value="inactive">
              Inactive
            </option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="
              px-6
              py-3
              rounded-2xl
              bg-slate-200
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              px-6
              py-3
              rounded-2xl
              bg-blue-600
              text-white
            "
          >
            Save Employee
          </button>

        </div>

      </div>

    </div>
  );
}