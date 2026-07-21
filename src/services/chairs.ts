import api from "@/lib/api";

export const getChairs = async () => {
  const response =
    await api.get("/api/chairs");

  return response.data;
};


export const updateChair = async (
  id: number,
  data: any
) => {
  const response = await api.patch(
    `/api/chairs/${id}`,
    data
  );

  return response.data;
};

export const moveChairToMaintenance = async (
  chairId: number
) => {
  await api.delete(
    `/api/chairs/${chairId}`
  );
};

export const createChair = async (
  data: any
) => {
  const response = await api.post(
    "/api/chairs",
    data
  );

  return response.data;
};