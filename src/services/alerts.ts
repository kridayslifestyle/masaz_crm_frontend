import { api } from "./api";

// services/alerts.ts
export const getRecentAlerts = async () => {
  const res = await api.get("/api/alerts");
  return res.data.slice(0, 5);
};