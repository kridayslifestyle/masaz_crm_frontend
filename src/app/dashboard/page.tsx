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
import { getRecentAlerts } from "@/services/alerts"
import { getEmployeePerformance } from "@/services/employees";

import { DashboardData } from "@/types/dashboard";

export default function DashboardPage() {

  const [data, setData] =
    useState<DashboardData | null>(null);

  const [alerts, setAlerts] =
    useState<any[]>([]);

  const [employees, setEmployees] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const [
          dashboardData,
          alertsData,
          employeeData,
        ] = await Promise.all([
          getDashboardSummary(),
          getRecentAlerts(),
          getEmployeePerformance(),
        ]);

        setData(dashboardData);

        setAlerts(alertsData);

        setEmployees(employeeData);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    loadDashboard();

  }, []);

  if (loading) {

    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );

  }

  const topEmployees =
    [...employees]
      .sort(
        (a, b) =>
          b.monthly_revenue -
          a.monthly_revenue
      )
      .slice(0, 5);

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* KPI CARDS */}

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">
            Total Chairs
          </h3>

          <p className="text-3xl font-bold mt-2">
            {data?.kpis.total_chairs}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">
            Active Stores
          </h3>

          <p className="text-3xl font-bold mt-2">
            {data?.kpis.active_stores}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">
            Today's Revenue
          </h3>

          <p className="text-3xl font-bold mt-2">
            ₹{data?.kpis.today_revenue}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">
            Monthly Revenue
          </h3>

          <p className="text-3xl font-bold mt-2">
            ₹{data?.kpis.monthly_revenue}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">
            Pending Payouts
          </h3>

          <p className="text-3xl font-bold mt-2">
            ₹{data?.kpis.pending_payout_amount}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">
            Low Performing Chairs
          </h3>

          <p className="text-3xl font-bold mt-2">
            {data?.kpis.low_performing_chairs}
          </p>
        </div>

      </div>

      {/* CHARTS */}

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="col-span-2">

          <RevenueChart
            data={
              data?.daily_collection_chart || []
            }
          />

        </div>

        <div>

          <ChairPerformanceChart
            data={data!.chair_status}
          />

        </div>

      </div>

      {/* ALERTS + TOP STORES + TOP SALESPERSONS */}

      <div className="grid grid-cols-3 gap-6 mt-8">

        <RecentAlerts
          alerts={alerts}
        />

        <TopStoresCard
          stores={
            data?.top_stores || []
          }
        />

        <TopSalespersons
          employees={
            topEmployees
          }
        />

      </div>

      {/* RECENT COLLECTIONS */}

      <div className="mt-8">

        <RecentCollectionsTable
          collections={
            data?.recent_collections || []
          }
        />

      </div>

    </DashboardLayout>
  );
}