"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import { Employee } from "@/types/employee";

import { getEmployees, getEmployeePerformance } from "@/services/employees";

import TopPerformers from "@/components/sales/TopPerformers";
import SalesTable from "@/components/sales/SalesTable";
import AddSalesPersonModal from "@/components/sales/AddSalesPersonModal";
import EditSalesPersonModal from "@/components/sales/EditSalesPersonModal";
import ViewEmployeeModal from "@/components/sales/ViewEmployeeModal";

export default function SalesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [performance, setPerformance] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );

  const [showViewModal, setShowViewModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const employeesData = await getEmployees();

        const performanceData = await getEmployeePerformance();

        setEmployees(employeesData);

        setPerformance(performanceData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-xl">Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-bold">Sales Team</h1>

          <p className="text-gray-500 mt-3 text-xl">
            Monthly performance & territory ownership
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="
    bg-blue-600
    text-white
    px-7
    py-4
    rounded-2xl
    font-medium
    hover:bg-blue-700
  "
        >
          + Add Sales Person
        </button>
      </div>

      {/* Top Performers */}
      <TopPerformers performance={performance} />

      {/* Sales Table */}
      <div className="mt-10">
        <SalesTable
          performance={performance}
          setEditingEmployee={setEditingEmployee}
          setShowEditModal={setShowEditModal}
          setSelectedEmployee={setSelectedEmployee}
          setShowViewModal={setShowViewModal}
        />
      </div>

      {showEditModal && editingEmployee && (
        <EditSalesPersonModal
          employee={editingEmployee}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showAddModal && (
        <AddSalesPersonModal onClose={() => setShowAddModal(false)} />
      )}

      {showViewModal && selectedEmployee && (
        <ViewEmployeeModal
          employee={selectedEmployee}
          onClose={() => setShowViewModal(false)}
        />
      )}
    </DashboardLayout>
  );
}
