"use client";

import { useEffect, useState } from "react";
import ServiceTable from "@/components/service/ServiceTable";
import { getComplaints } from "@/services/service";
import { Complaint } from "@/types/service";

export default function ServicePage() {
  const [data, setData] = useState<Complaint[]>([]);

  const fetchData = async () => {
    try {
      const res = await getComplaints();
      setData(res);
    } catch (err) {
      console.error("Error fetching complaints", err);
    }
  };

  // 🔥 THIS IS MISSING IN YOUR CASE
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <ServiceTable data={data} fetchData={fetchData} />
    </div>
  );
}