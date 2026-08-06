"use client";

import { useState } from "react";
import { createEmployee } from "@/services/employees";

interface Props {
  onClose: () => void;
}

export default function AddSalesPersonModal({
  onClose,
}: Props) {
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    employee_code: "",
    name: "",
    phone: "",
    email: "",
    designation: "",
    city: "",
    joining_date: "",
    salary: "",
    is_active: true,
  });

  const handleSubmit = async () => {
    if (!form.employee_code.trim()) {
      alert("Employee Code is required");
      return;
    }

    if (!form.name.trim()) {
      alert("Employee Name is required");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        employee_code: form.employee_code.trim(),
        name: form.name.trim(),

        phone: form.phone || null,
        email: form.email || null,
        designation: form.designation || null,
        city: form.city || null,

        joining_date: form.joining_date || null,

        salary: form.salary
          ? Number(form.salary)
          : null,

        is_active: form.is_active,
      };

      await createEmployee(payload);

      alert("Employee created successfully");

      onClose();

      window.location.reload();
    } catch (error: any) {
      console.error(
        "Failed to create employee:",
        error?.response?.data || error
      );

      const detail =
        error?.response?.data?.detail;

      if (typeof detail === "string") {
        alert(detail);
      } else {
        alert("Failed to create employee");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[750px]">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Add Employee
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ✕
          </button>

        </div>

        {/* Form */}

        <div className="grid grid-cols-2 gap-5">

          {/* Employee Code */}

          <div>
            <label className="text-sm text-gray-500">
              Employee Code *
            </label>

            <input
              placeholder="EMP001"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.employee_code}
              onChange={(e) =>
                setForm({
                  ...form,
                  employee_code: e.target.value,
                })
              }
            />
          </div>

          {/* Name */}

          <div>
            <label className="text-sm text-gray-500">
              Employee Name *
            </label>

            <input
              placeholder="Employee Name"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />
          </div>

          {/* Phone */}

          <div>
            <label className="text-sm text-gray-500">
              Phone
            </label>

            <input
              placeholder="Phone Number"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
            />
          </div>

          {/* Email */}

          <div>
            <label className="text-sm text-gray-500">
              Email
            </label>

            <input
              type="email"
              placeholder="Email"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
          </div>

          {/* Designation */}

          <div>
            <label className="text-sm text-gray-500">
              Designation
            </label>

            <input
              placeholder="Technician / Sales / Manager"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.designation}
              onChange={(e) =>
                setForm({
                  ...form,
                  designation: e.target.value,
                })
              }
            />
          </div>

          {/* City */}

          <div>
            <label className="text-sm text-gray-500">
              City
            </label>

            <input
              placeholder="City"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.city}
              onChange={(e) =>
                setForm({
                  ...form,
                  city: e.target.value,
                })
              }
            />
          </div>

          {/* Joining Date */}

          <div>
            <label className="text-sm text-gray-500">
              Joining Date
            </label>

            <input
              type="date"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.joining_date}
              onChange={(e) =>
                setForm({
                  ...form,
                  joining_date: e.target.value,
                })
              }
            />
          </div>

          {/* Salary */}

          <div>
            <label className="text-sm text-gray-500">
              Salary
            </label>

            <input
              type="number"
              placeholder="Salary"
              className="border rounded-2xl p-4 w-full mt-1"
              value={form.salary}
              onChange={(e) =>
                setForm({
                  ...form,
                  salary: e.target.value,
                })
              }
            />
          </div>

          {/* Status */}

          <div>
            <label className="text-sm text-gray-500">
              Status
            </label>

            <select
              className="border rounded-2xl p-4 w-full mt-1"
              value={
                form.is_active
                  ? "active"
                  : "inactive"
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  is_active:
                    e.target.value === "active",
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

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            disabled={saving}
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
            disabled={saving}
            className="
              px-6
              py-3
              rounded-2xl
              bg-blue-600
              text-white
              disabled:bg-gray-400
            "
          >
            {saving
              ? "Saving..."
              : "Save Employee"}
          </button>

        </div>

      </div>
    </div>
  );
}