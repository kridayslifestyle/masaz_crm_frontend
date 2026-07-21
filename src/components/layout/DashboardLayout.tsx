import Sidebar from "./sidebar";
import RevenueStatsCards from "@/components/revenue/RevenueStatsCards";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <main className="ml-72 p-6">{children}</main>
    </div>
  );
}
