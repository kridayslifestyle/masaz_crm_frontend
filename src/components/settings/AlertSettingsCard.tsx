import { Settings } from "@/types/settings";

interface Props {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

export default function AlertSettingsCard({
  settings,
  setSettings,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow">

      <h2 className="text-2xl font-bold mb-8">
        Alert Settings
      </h2>

      <div className="space-y-5">

        <input
          type="number"
          value={settings.minimum_daily_revenue}
          onChange={(e) =>
            setSettings({
              ...settings,
              minimum_daily_revenue: Number(e.target.value),
            })
          }
          placeholder="Minimum Daily Revenue"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          type="number"
          value={settings.target_daily_revenue}
          onChange={(e) =>
            setSettings({
              ...settings,
              target_daily_revenue: Number(e.target.value),
            })
          }
          placeholder="Target Daily Revenue"
          className="w-full p-4 border rounded-2xl"
        />

      </div>

    </div>
  );
}