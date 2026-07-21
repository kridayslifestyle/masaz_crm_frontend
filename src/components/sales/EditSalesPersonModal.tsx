"use client";

import { useState } from "react";

import { Employee } from "@/types/employee";
import { updateEmployee } from "@/services/employees";

interface Props {
  employee: Employee;
  onClose: () => void;
}

export default function EditSalesPersonModal({
  employee,
  onClose,
}: Props) {
  const [form, setForm] = useState({
    name: employee.name,
    phone: employee.phone,
    email: employee.email,
    region: employee.region,
    designation: employee.designation,
    target_revenue: employee.target_revenue,
    commission_percentage:
      employee.commission_percentage,
    joining_date: employee.joining_date,
    status: employee.status,
  });

  const handleSave = async () => {
    try {
      await updateEmployee(
        employee.id,
        form
      );

      alert(
        "Employee updated successfully"
      );

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update employee"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[750px]">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Edit Sales Person
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
            className="border rounded-2xl p-4"
            value={form.target_revenue}
            onChange={(e) =>
              setForm({
                ...form,
                target_revenue:
                  Number(e.target.value),
              })
            }
          />

          <input
            type="number"
            className="border rounded-2xl p-4"
            value={
              form.commission_percentage
            }
            onChange={(e) =>
              setForm({
                ...form,
                commission_percentage:
                  Number(e.target.value),
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
                joining_date:
                  e.target.value,
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
              bg-slate-200
              px-6
              py-3
              rounded-2xl
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-2xl
            "
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}