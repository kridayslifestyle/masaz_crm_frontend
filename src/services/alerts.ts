// services/alerts.ts

import { api } from "./api";

export const getRecentAlerts = async () => {
  const res = await api.get("/api/alerts/");
  return res.data.slice(0, 5);
};