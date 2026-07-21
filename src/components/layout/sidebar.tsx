"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Armchair,
  Store,
  TrendingUp,
  Wallet,
  Bell,
  Users,
  Award,
  FileBarChart,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-[#020d35] text-white flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold">
          MasaZ CRM
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Smart Revenue Management
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 px-4 py-6">

        <p className="text-slate-400 text-sm mb-4">
          Workspace
        </p>

        <div className="space-y-2">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/chairs"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <Armchair size={18} />
            Chair Management
          </Link>

          <Link
            href="/stores"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <Store size={18} />
            Store Management
          </Link>

          <Link
            href="/revenue"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <TrendingUp size={18} />
            Revenue Analytics
          </Link>

          <Link
            href="/collections"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <Wallet size={18} />
            Daily Collections
          </Link>

          <Link
            href="/notifications"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <Bell size={18} />
            Alerts & Notifications
          </Link>

          <Link
            href="/sales"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <Users size={18} />
            Sales Team
          </Link>

          <Link
            href="/incentives"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <Award size={18} />
            Incentives
          </Link>

          <Link
            href="/reports"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <FileBarChart size={18} />
            Monthly Reports
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800"
          >
            <Settings size={18} />
            Settings
          </Link>

        </div>

      </div>

      {/* User */}

      <div className="p-4 border-t border-slate-800">

        <div className="rounded-2xl bg-cyan-600 p-4">

          <p className="font-semibold">
            Logged in as
          </p>

          <p className="text-lg font-bold">
            Admin
          </p>

          <p className="text-sm">
            Super Admin
          </p>

        </div>

      </div>

    </aside>
  );
}