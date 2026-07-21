"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ChairSearch from "@/components/chairs/ChairSearch";
import ChairTable from "@/components/chairs/ChairTable";
import ChairStatsCards from "@/components/chairs/ChairStatsCards";
import ChairViewModal from "@/components/chairs/ChairViewModal";
import EditChairModal from "@/components/chairs/EditChairModal";
import { exportChairsCSV } from "@/utils/exportChairsCSV";
import AddChairModal from "@/components/chairs/AddChairModal";

import { getChairs } from "@/services/chairs";

import { Chair } from "@/types/chair";

export default function ChairsPage() {
  const [chairs, setChairs] = useState<Chair[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("all");

  const [selectedChair, setSelectedChair] = useState<Chair | null>(null);

  const [showViewModal, setShowViewModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editingChair, setEditingChair] = useState<Chair | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const loadChairs = async () => {
      try {
        const data = await getChairs();

        setChairs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadChairs();
  }, []);

  const filteredChairs = chairs.filter((chair) => {
    const matchesSearch =
      (chair.serial_number || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (chair.device_id || "").toLowerCase().includes(search.toLowerCase()) ||
      (chair.model_name || "").toLowerCase().includes(search.toLowerCase()) ||
      (chair.store_name || "").toLowerCase().includes(search.toLowerCase()) ||
      (chair.owner_name || "").toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || chair.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <DashboardLayout>
        <div>Loading chairs...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-bold">Chair Management</h1>

          <p className="text-gray-500 mt-2 text-xl">
            {chairs.length} of {chairs.length} chairs across the network
          </p>
        </div>
        </div>

        <div className="flex justify-between items-center mb-8">

  <div>
    <h1 className="text-5xl font-bold">
      Chair Management
    </h1>

    <p className="text-gray-500 mt-3 text-2xl">
      {chairs.length} of {chairs.length} chairs across the network
    </p>
  </div>

  <div className="flex gap-4">

    <button
      onClick={() => setShowAddModal(true)}
      className="
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-6
        py-4
        rounded-3xl
        font-medium
      "
    >
      + Add Chair
    </button>

    <button
      onClick={() => exportChairsCSV(filteredChairs)}
      className="
        bg-cyan-500
        hover:bg-cyan-600
        text-white
        px-6
        py-4
        rounded-3xl
        font-medium
      "
    >
      Export CSV
    </button>

  </div>

</div>

      <ChairStatsCards
        total={chairs.length}
        active={chairs.filter((c) => c.status === "active").length}
        low={chairs.filter((c) => c.status === "low_performing").length}
        maintenance={chairs.filter((c) => c.status === "maintenance").length}
        offline={chairs.filter((c) => c.status === "offline").length}
      />

      {/* Search */}
      <ChairSearch
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Table */}
      <ChairTable
        chairs={filteredChairs}
        setSelectedChair={setSelectedChair}
        setShowViewModal={setShowViewModal}
        setEditingChair={setEditingChair}
        setShowEditModal={setShowEditModal}
      />

      {showViewModal && selectedChair && (
        <ChairViewModal
          chair={selectedChair}
          onClose={() => setShowViewModal(false)}
        />
      )}

      {showEditModal && editingChair && (
        <EditChairModal
          chair={editingChair}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {
  showAddModal && (
    <AddChairModal
      onClose={() =>
        setShowAddModal(false)
      }
    />
  )
}
    </DashboardLayout>
  );
}
