import { api } from "./api";

export const getTechnicians = async () => {
  const res = await api.get("/api/technicians");
  return res.data;
};