import { Chair } from "@/types/chair";

export const exportChairsCSV = (
  chairs: Chair[]
) => {
  const headers = [
    "Serial Number",
    "Device ID",
    "Model",
    "Store",
    "City",
    "Owner",
    "Daily Revenue",
    "Monthly Revenue",
    "Status",
  ];

  const rows = chairs.map((chair) => [
    chair.serial_number,
    chair.device_id,
    chair.model_name,
    chair.store_name,
    chair.city,
    chair.owner_name,
    chair.daily_revenue,
    chair.monthly_revenue,
    chair.status,
  ]);

  const csvContent =
    [headers, ...rows]
      .map((e) => e.join(","))
      .join("\n");

  const blob = new Blob(
    [csvContent],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download = "chairs.csv";

  link.click();
};