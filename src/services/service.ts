import { api } from "./api";

// GET SUMMARY
export const getServiceSummary = async () => {
  const res = await api.get("/api/service/summary");
  return res.data;
};

// GET ALL COMPLAINTS
export const getComplaints = async () => {
  const res = await api.get("/api/service/complaints");
  return res.data;
};

// GET SINGLE COMPLAINT
export const getComplaint = async (id: number) => {
  const res = await api.get(`/api/service/complaints/${id}`);
  return res.data;
};

// CREATE COMPLAINT
export const createComplaint = async (data: any) => {
  const res = await api.post("/api/service/complaints", data);
  return res.data;
};

// UPDATE COMPLAINT
export const updateComplaint = async (id: number, data: any) => {
  const res = await api.patch(`/api/service/complaints/${id}`, data);
  return res.data;
};

// START SERVICE
export const startService = async (id: number, technician: string) => {
  const res = await api.patch(`/api/service/${id}/start`, {
    technician_name: technician,
  });
  return res.data;
};

// RESOLVE SERVICE
export const resolveService = async (id: number, data: any) => {
  const res = await api.patch(`/api/service/${id}/resolve`, data);
  return res.data;
};