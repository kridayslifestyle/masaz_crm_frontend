"use client";

import SalesPerformanceBar from "./SalesPerformanceBar";
import TargetBadge from "./TargetBadge";

import { Employee } from "@/types/employee";

interface Props {
  performance: Employee[];

  setEditingEmployee: React.Dispatch<
    React.SetStateAction<Employee | null>
  >;

  setShowEditModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<Employee | null>
  >;

  setShowViewModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function SalesTable({
  performance,
  setEditingEmployee,
  setShowEditModal,
  setSelectedEmployee,
  setShowViewModal,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="border-b text-gray-500">
          <tr>

            <th className="p-6 text-left">
              EMPLOYEE
            </th>

            <th className="p-6 text-left">
              CITY
            </th>

            <th className="p-6 text-left">
              STORES
            </th>

            <th className="p-6 text-left">
              CHAIRS
            </th>

            <th className="p-6 text-left">
              PERFORMANCE
            </th>

            <th className="p-6 text-left">
              TARGET
            </th>

            <th className="p-6 text-left">
              INCENTIVE
            </th>

            <th className="p-6 text-left">
              ACTIONS
            </th>

          </tr>
        </thead>

        <tbody>

          {performance.map((employee) => (

            <tr
              key={employee.id}
              className="border-b hover:bg-slate-50"
            >

              {/* Employee */}

              <td className="p-6">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-blue-600
                    "
                  >
                    {employee.name?.charAt(0)}
                  </div>

                  <div>

                    <div className="font-semibold">
                      {employee.name}
                    </div>

                    <div className="text-gray-500 text-sm">
                      {employee.employee_code}
                    </div>

                    <div className="text-gray-500 text-sm">
                      {employee.designation || "-"}
                    </div>

                  </div>

                </div>

              </td>

              {/* City */}

              <td className="p-6">
                {employee.city || "-"}
              </td>

              {/* Assigned Stores */}

              <td className="p-6">
                {employee.assigned_stores ?? 0}
              </td>

              {/* Assigned Chairs */}

              <td className="p-6">
                {employee.assigned_chairs ?? 0}
              </td>

              {/* Performance */}

              <td className="p-6">

                <SalesPerformanceBar
                  value={
                    employee.performance_percentage ??
                    0
                  }
                />

              </td>

              {/* Target */}

              <td className="p-6">

                <TargetBadge
                  value={
                    employee.performance_percentage ??
                    0
                  }
                />

              </td>

              {/* Incentive */}

              <td className="p-6 font-bold text-green-600">

                ₹
                {(
                  employee.incentive_amount ?? 0
                ).toLocaleString()}

              </td>

              {/* Actions */}

              <td className="p-6">

                <div className="flex gap-2">

                  <button
                    onClick={() => {
                      setEditingEmployee(employee);
                      setShowEditModal(true);
                    }}
                    className="
                      bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-blue-700
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setSelectedEmployee(employee);
                      setShowViewModal(true);
                    }}
                    className="
                      bg-slate-200
                      hover:bg-slate-300
                      px-4
                      py-2
                      rounded-xl
                    "
                  >
                    View
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}