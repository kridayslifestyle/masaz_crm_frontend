"use client";

import { useEffect, useState } from "react";
import ServiceTable from "@/components/service/ServiceTable";
import ServiceStats from "@/components/service/ServiceStats";
import { getComplaints } from "@/services/service";
import CreateComplaintModal from "@/components/service/CreateComplaintModal";

export default function ServicePage() {
  const [data, setData] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const fetchData = async () => {
    const res = await getComplaints();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Service Dashboard
        </h1>

        <button
          onClick={() => setShowCreate(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          + Add Complaint
        </button>

      </div>

      {/* 🔥 Stats */}
      <ServiceStats data={data} />

      {/* 🔥 Table */}
      <ServiceTable data={data} fetchData={fetchData} />

      {showCreate && (
        <CreateComplaintModal
          onClose={() => setShowCreate(false)}
          onSuccess={fetchData}
        />
      )}

    </div>
  );
}