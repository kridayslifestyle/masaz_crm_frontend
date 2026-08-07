"use client";

import { useEffect, useState } from "react";
import ServiceTable from "./ServiceTable";
import { getComplaints } from "@/services/service";
import { Complaint } from "@/types/service";

export default function ServicePageClient() {
  const [data, setData] = useState<Complaint[]>([]);

  const fetchData = async () => {
    try {
      const res = await getComplaints();
      setData(res);
    } catch (err) {
      console.error("Error fetching complaints", err);
    }
  };

  useEffect(() => {
    console.log("Fetching complaints...");
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <ServiceTable data={data} fetchData={fetchData} />
    </div>
  );
}