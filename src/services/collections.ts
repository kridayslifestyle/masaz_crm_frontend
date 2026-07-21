import { api } from "./api";

export const getCollections = async () => {
  const response = await api.get("/api/collections");

  return response.data;
};