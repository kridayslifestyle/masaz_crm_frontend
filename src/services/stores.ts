import api from "@/lib/api";

export const getStores = async () => {
  const response = await api.get("/api/stores");
  return response.data;
};

export const createStore = async (
  data: any
) => {

  const response =
    await api.post(
      "/api/stores/",
      data
    );

  return response.data;
};

export const updateStore = async (
  id: number,
  data: any
) => {
  const response = await api.patch(
    `/api/stores/${id}`,
    data
  );

  return response.data;
};

export const deactivateStore = async (
  id: number
) => {
  await api.delete(
    `/api/stores/${id}`
  );
};

export const activateStore = async (
  id: number
) => {

  await api.patch(
    `/api/stores/${id}/activate`
  );

};