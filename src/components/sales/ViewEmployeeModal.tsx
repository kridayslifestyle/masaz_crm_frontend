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

        <div className="grid grid-cols-2 gap-6">

          <Info title="Name" value={employee.name} />
          <Info title="Phone" value={employee.phone} />

          <Info title="Email" value={employee.email} />
          <Info title="Region" value={employee.region} />

          <Info
            title="Designation"
            value={employee.designation}
          />

          <Info
            title="Joining Date"
            value={employee.joining_date}
          />

          <Info
            title="Status"
            value={employee.status}
          />

          <Info
            title="Target Revenue"
            value={`₹${employee.target_revenue?.toLocaleString()}`}
          />

          <Info
            title="Commission %"
            value={`${employee.commission_percentage}%`}
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
            value={`${employee.performance_percentage ?? 0}%`}
          />

          <Info
            title="Incentive Earned"
            value={`₹${employee.incentive_amount?.toLocaleString() ?? 0}`}
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