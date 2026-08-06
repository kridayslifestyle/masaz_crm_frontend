"use client";

import { Employee } from "@/types/employee";

interface Props {
  employee: Employee;
  onClose: () => void;
}

export default function ViewEmployeeModal({
  employee,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[800px]">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Employee Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ✕
          </button>

        </div>

        {/* Employee Information */}

        <div className="grid grid-cols-2 gap-6">

          <Info
            title="Employee Code"
            value={employee.employee_code || "-"}
          />

          <Info
            title="Name"
            value={employee.name || "-"}
          />

          <Info
            title="Phone"
            value={employee.phone || "-"}
          />

          <Info
            title="Email"
            value={employee.email || "-"}
          />

          <Info
            title="Designation"
            value={employee.designation || "-"}
          />

          <Info
            title="City"
            value={employee.city || "-"}
          />

          <Info
            title="Joining Date"
            value={employee.joining_date || "-"}
          />

          <Info
            title="Salary"
            value={
              employee.salary !== null &&
              employee.salary !== undefined
                ? `₹${employee.salary.toLocaleString()}`
                : "-"
            }
          />

          <Info
            title="Status"
            value={
              employee.is_active
                ? "Active"
                : "Inactive"
            }
          />

          <Info
            title="Stores Assigned"
            value={String(
              employee.assigned_stores ?? 0
            )}
          />

          <Info
            title="Chairs Assigned"
            value={String(
              employee.assigned_chairs ?? 0
            )}
          />

          <Info
            title="Performance"
            value={`${
              employee.performance_percentage ?? 0
            }%`}
          />

          <Info
            title="Incentive Earned"
            value={`₹${(
              employee.incentive_amount ?? 0
            ).toLocaleString()}`}
          />

        </div>

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5">

      <div className="text-gray-500 text-sm mb-2">
        {title}
      </div>

      <div className="font-semibold text-lg">
        {value}
      </div>

    </div>
  );
}