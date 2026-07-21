export default function RecentAlerts({
  alerts,
}: {
  alerts: any[];
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">
          Recent Alerts
        </h2>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border rounded-xl p-4"
          >
            <div className="flex items-start gap-3">

              <div
                className={`w-3 h-3 rounded-full mt-2 ${
                  alert.severity === "critical"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
              />

              <div>

                <h4 className="font-semibold">
                  {alert.alert_type}
                </h4>

                <p className="text-gray-600 text-sm">
                  {alert.message}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  {alert.device_id}
                </p>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}