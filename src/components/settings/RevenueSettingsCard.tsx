import { Settings } from "@/types/settings";

interface Props {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

export default function RevenueSettingsCard({
  settings,
  setSettings,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow">
      <h2 className="text-2xl font-bold mb-8">
        Revenue Settings
      </h2>

      <div className="space-y-5">

        <div>
          <label>Company Share %</label>

          <input
            type="number"
            value={settings.company_share_percentage}
            onChange={(e) =>
              setSettings({
                ...settings,
                company_share_percentage: Number(e.target.value),
              })
            }
            className="w-full mt-2 p-4 border rounded-2xl"
          />
        </div>

        <div>
          <label>Store Share %</label>

          <input
            type="number"
            value={settings.store_share_percentage}
            onChange={(e) =>
              setSettings({
                ...settings,
                store_share_percentage: Number(e.target.value),
              })
            }
            className="w-full mt-2 p-4 border rounded-2xl"
          />
        </div>

      </div>
    </div>
  );
}