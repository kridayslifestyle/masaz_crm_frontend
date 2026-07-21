"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import BusinessSettingsCard from "@/components/settings/BusinessSettingsCard";
import RevenueSettingsCard from "@/components/settings/RevenueSettingsCard";
import AlertSettingsCard from "@/components/settings/AlertSettingsCard";
import BrandingSettingsCard from "@/components/settings/BrandingSettingsCard";

import { Settings } from "@/types/settings";

import {
  getSettings,
  updateSettings,
} from "@/services/settings";

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    company_share_percentage: 0,
    store_share_percentage: 0,
    minimum_daily_revenue: 0,
    target_daily_revenue: 0,
    alert_enabled: true,
    whatsapp_enabled: true,
    sms_enabled: true,
    email_enabled: true,
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await getSettings();

        setSettings(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadSettings();
  }, []);

  const handleSave = async () => {
    try {
      await updateSettings(settings);

      alert("Settings updated successfully!");
    } catch (error) {
      console.error(error);

      alert("Failed to update settings");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 text-xl mt-3">
            Configure business and application preferences
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <BusinessSettingsCard />

          <RevenueSettingsCard
            settings={settings}
            setSettings={setSettings}
          />

          <AlertSettingsCard
            settings={settings}
            setSettings={setSettings}
          />

          <BrandingSettingsCard />

        </div>

        {/* Save Button */}
        <div className="flex justify-end">

          <button
            onClick={handleSave}
            className="
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-2xl
              font-medium
              hover:bg-blue-700
            "
          >
            Save Changes
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}