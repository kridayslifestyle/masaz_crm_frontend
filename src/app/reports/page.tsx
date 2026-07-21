"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import ReportSummaryCard from "@/components/reports/ReportSummaryCard";
import RevenueTrendChart from "@/components/reports/RevenueTrendChart";
import SalesPerformanceChart from "@/components/reports/SalesPerformanceChart";
import StoreBreakdownTable from "@/components/reports/StoreBreakdownTable";
import { getMonthlyReport } from "@/services/reports";
import { exportToExcel } from "@/utils/exportExcel";
import { exportReportPdf } from "@/utils/exportPdf";

export default function ReportsPage() {
  const [selectedMonth, setSelectedMonth] = useState("2026-11");

  const [summary, setSummary] = useState<any>();

  const [storeData, setStoreData] = useState<any[]>([]);

  const [salesPerformance, setSalesPerformance] = useState<any[]>([]);

  useEffect(() => {
  const loadReport = async () => {
    const [year, month] = selectedMonth.split("-");

    try {
      const report = await getMonthlyReport(
        Number(month),
        Number(year)
      );

      setSummary(report.summary);

      setStoreData(
        report.store_breakdown
      );

      setSalesPerformance(
        report.sales_team_performance
      );

    } catch (error) {
      console.error("Report error:", error);
    }
  };

  loadReport();
}, [selectedMonth]);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-5xl font-bold">Monthly Reports</h1>

          <p className="text-gray-500 mt-3 text-xl">Executive summary</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Month Selector */}
          <div className="bg-white shadow rounded-2xl px-5 py-3">
            <label className="text-gray-500 text-sm block mb-1">
              Report Month
            </label>

            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="
                outline-none
                text-lg
                font-medium
              "
            />
          </div>

          {/* Buttons */}

          <button
            className="
              bg-white
              shadow
              rounded-2xl
              px-6
              py-4
            "
          >
            Print
          </button>

          <button
            onClick={() =>
              exportToExcel(storeData, `Monthly_Report_${selectedMonth}`)
            }
            className="
    bg-white
    shadow
    rounded-2xl
    px-6
    py-4
  "
          >
            Excel
          </button>

          <button
            onClick={() => exportReportPdf(summary, storeData, selectedMonth)}
            className="
    bg-cyan-500
    text-white
    rounded-2xl
    px-6
    py-4
  "
          >
            PDF
          </button>
        </div>
      </div>

      <ReportSummaryCard />

      <div className="grid grid-cols-2 gap-8 mb-10">
        <RevenueTrendChart />

        <SalesPerformanceChart />
      </div>
      <StoreBreakdownTable />
    </DashboardLayout>
  );
}
