"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import CollectionStatsCards from "@/components/collections/CollectionStatsCards";
import CollectionFilters from "@/components/collections/CollectionFilters";
import CollectionTable from "@/components/collections/CollectionTable";

import { Collection } from "@/types/collection";
import { getCollections } from "@/services/collections";

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCollections = async () => {
      try {
        const data = await getCollections();

        setCollections(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadCollections();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div>Loading collections...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-bold">
            Daily Collections
          </h1>

          <p className="text-gray-500 mt-3">
            Reconciliation & payouts to store partners
          </p>
        </div>

        <button
          className="
            bg-cyan-500
            text-white
            px-7
            py-4
            rounded-3xl
          "
        >
          Download Report
        </button>
      </div>

      {/* KPI Cards */}
      <CollectionStatsCards />

      {/* Filters */}
      <CollectionFilters />

      {/* Table */}
      <CollectionTable
        collections={collections}
      />

    </DashboardLayout>
  );
}