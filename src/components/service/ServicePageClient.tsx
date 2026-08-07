"use client";

import { useEffect, useState } from "react";
import ServiceTable from "./ServiceTable";
import CreateComplaintModal from "./CreateComplaintModal"; // ✅ IMPORT
import { getComplaints } from "@/services/service";
import { Complaint } from "@/types/service";

export default function ServicePageClient() {
  const [data, setData] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false); // ✅ MODAL STATE

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getComplaints();
      setData(res);
    } catch (err) {
      console.error("Error fetching complaints", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6">Loading complaints...</div>;
  }

  return (
    <div className="p-6">

      {/* 🔥 HEADER + BUTTON */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Service Complaints</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          + New Complaint
        </button>
      </div>

      {/* ❗ EMPTY STATE FIX */}
      {data.length === 0 ? (
        <div>No complaints found</div>
      ) : (
        <ServiceTable data={data} fetchData={fetchData} />
      )}

      {/* 🔥 MODAL */}
      {open && (
        <CreateComplaintModal
          onClose={() => setOpen(false)}
          onSuccess={fetchData}
        />
      )}

    </div>
  );
}