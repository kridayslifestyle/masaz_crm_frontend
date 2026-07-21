"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import AddStoreModal from "@/components/stores/AddStoreModal";
import StoreGrid from "@/components/stores/StoreGrid";
import StoreSearch from "@/components/stores/StoreSearch";
import StoreChairsChart from "@/components/stores/StoreChairsChart";
import StoreRevenueChart from "@/components/stores/StoreRevenueChart";
import StoreStatsCards from "@/components/stores/StoreStatsCards";

import { getStores } from "@/services/stores";

import { Store } from "@/types/store";

export default function StoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedStore, setSelectedStore] = useState<any>(null);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const loadStores = async () => {
      try {
        const data = await getStores();

        setStores(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadStores();
  }, []);

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.owner_name.toLowerCase().includes(search.toLowerCase()) ||
      store.city.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && store.is_active) ||
      (statusFilter === "inactive" && !store.is_active);

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-lg">Loading stores...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">Store Management</h1>

          <p className="text-gray-500 mt-2">
            {stores.length} partner stores across India
          </p>
        </div>

        <div className="flex gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="
              bg-white
              border
              rounded-2xl
              px-5
              py-3
            "
          >
            <option value="all">All Stores</option>

            <option value="active">Active</option>

            <option value="inactive">Inactive</option>
          </select>

          <button
            onClick={() => {
              setSelectedStore(null);
              setShowModal(true);
            }}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-2xl
            "
          >
            + Add Store
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <StoreStatsCards stores={stores} />

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <StoreChairsChart stores={stores} />

        <StoreRevenueChart stores={stores} />
      </div>

      {/* Search */}
      <StoreSearch search={search} setSearch={setSearch} />

      {/* Store Cards */}
      <StoreGrid
        stores={filteredStores}
        setSelectedStore={setSelectedStore}
        setShowModal={setShowModal}
      />

      {/* Add / Edit Modal */}
      {showModal && (
        <AddStoreModal
          store={selectedStore}
          onClose={() => {
            setShowModal(false);
            setSelectedStore(null);
          }}
        />
      )}
    </DashboardLayout>
  );
}
