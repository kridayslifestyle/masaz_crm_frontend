import { api } from "./api";
import { Settings } from "@/types/settings";

export const getSettings = async (): Promise<Settings> => {
  const response = await api.get("/api/settings/");
  return response.data;
};

export const updateSettings = async (
  data: Settings
): Promise<Settings> => {
  const response = await api.put(
    "/api/settings/",
    data
  );

  return response.data;
};