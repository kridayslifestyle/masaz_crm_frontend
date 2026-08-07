"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import RevenueChart from "@/components/dashboard/RevenueChart";
import ChairPerformanceChart from "@/components/dashboard/ChairPerformanceChart";
import RecentAlerts from "@/components/dashboard/RecentAlerts";
import TopStoresCard from "@/components/dashboard/TopStoresCard";
import TopSalespersons from "@/components/dashboard/TopSalespersons";
import RecentCollectionsTable from "@/components/dashboard/RecentCollectionsTable";

import { getDashboardSummary } from "@/services/dashboard";
import { getRecentAlerts } from "@/services/alerts";
import { getEmployeePerformance } from "@/services/employees";
import { getServiceSummary } from "@/services/service";
import { DashboardData } from "@/types/dashboard";

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);

  const [alerts, setAlerts] = useState<any[]>([]);

  const [employees, setEmployees] = useState<any[]>([]);

  const [service, setService] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [dashboardData, alertsData, employeeData, serviceData] =
          await Promise.all([
            getDashboardSummary(),
            getRecentAlerts(),
            getEmployeePerformance(),
            getServiceSummary(),
          ]);

        setData(dashboardData);

        setAlerts(alertsData);

        setEmployees(employeeData);
        setService(serviceData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return <DashboardLayout>Loading...</DashboardLayout>;
  }

  if (!data) {
    return (
      <DashboardLayout>
        <div className="text-red-500">Failed to load dashboard data.</div>
      </DashboardLayout>
    );
  }

  const topEmployees = [...employees]
    .sort((a, b) => b.monthly_revenue - a.monthly_revenue)
    .slice(0, 5);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* KPI CARDS */}

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Total Chairs</h3>

          <p className="text-3xl font-bold mt-2">{data?.kpis.total_chairs}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Active Stores</h3>

          <p className="text-3xl font-bold mt-2">{data?.kpis.active_stores}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Today's Revenue</h3>

          <p className="text-3xl font-bold mt-2">₹{data?.kpis.today_revenue}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Monthly Revenue</h3>

          <p className="text-3xl font-bold mt-2">
            ₹{data?.kpis.monthly_revenue}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Pending Payouts</h3>

          <p className="text-3xl font-bold mt-2">
            ₹{data?.kpis.pending_payout_amount}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Low Performing Chairs</h3>

          <p className="text-3xl font-bold mt-2">
            {data?.kpis.low_performing_chairs}
          </p>
        </div>

        {/* SERVICE KPIs */}

        {service && (
          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">Total Complaints</h3>
              <p className="text-3xl font-bold mt-2">
                {service.total_complaints}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">Open</h3>
              <p className="text-3xl font-bold mt-2 text-red-500">
                {service.open}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">In Progress</h3>
              <p className="text-3xl font-bold mt-2 text-yellow-500">
                {service.in_progress}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-gray-500">Resolved</h3>
              <p className="text-3xl font-bold mt-2 text-green-500">
                {service.resolved}
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* CHARTS */}
      {/* force deploy */}

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="col-span-2">
          <RevenueChart data={data?.daily_collection_chart || []} />
        </div>

        <div>{data && <ChairPerformanceChart data={data.chair_status} />}</div>
      </div>

      {/* ALERTS + TOP STORES + TOP SALESPERSONS */}

      <div className="grid grid-cols-3 gap-6 mt-8">
        <RecentAlerts alerts={alerts} />

        <TopStoresCard stores={data?.top_stores || []} />

        <TopSalespersons employees={topEmployees} />
      </div>

      {/* RECENT COLLECTIONS */}

      <div className="mt-8">
        <RecentCollectionsTable collections={data?.recent_collections || []} />
      </div>
    </DashboardLayout>
  );
}
