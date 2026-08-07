"use client";

import { useEffect, useState } from "react";
import ServiceTable from "./ServiceTable";
import { getComplaints } from "@/services/service";
import { Complaint } from "@/types/service";

export default function ServicePageClient() {
  const [data, setData] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

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
    console.log("Fetching complaints...");
    fetchData();
  }, []);

  

  if (loading) {

    return <div className="p-6">Loading complaints...</div>;
  }

  if (data.length === 0) {
    return <div className="p-6">No complaints found</div>;
  }

  return (

    
    <div className="p-6">
      <ServiceTable data={data} fetchData={fetchData} />
    </div>
  );
}