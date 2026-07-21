"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import RevenueStatsCards from "@/components/revenue/RevenueStatsCards";
import RevenueTrendChart from "@/components/revenue/RevenueTrendChart";
import RevenueSplitCard from "@/components/revenue/RevenueSplitCard";
import MonthlyBreakdownChart from "@/components/revenue/MonthlyBreakdownChart";


export default function RevenuePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold">Revenue Analytics</h1>

        <p className="text-gray-500 mt-3 text-lg">
          75% Company / 25% Store revenue model · GST estimated at 18%
        </p>
      </div>

      {/* Top Cards */}
      <RevenueStatsCards />

      {/* Revenue Trend */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <RevenueTrendChart />
        </div>

        <RevenueSplitCard />
        
      </div>

      <MonthlyBreakdownChart />
      
    </DashboardLayout>
    
  );
}
