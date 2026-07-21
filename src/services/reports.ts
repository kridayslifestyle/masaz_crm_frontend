import { api } from "./api";

export const getMonthlyReport = async (
  month: number,
  year: number
) => {
  const response = await api.get(
    `/api/reports/monthly?month=${month}&year=${year}`
  );

  return response.data;
};


// export const getStoreBreakdown = async (
//   month: number,
//   year: number
// ) => {
//   const response = await api.get(
//     `/api/reports/store-breakdown?month=${month}&year=${year}`
//   );

//   return response.data;
// };


// export const getSalesPerformance = async (
//   month: number,
//   year: number
// ) => {
//   const response = await api.get(
//     `/api/reports/sales-performance?month=${month}&year=${year}`
//   );

//   return response.data;
// };


export const getRevenueTrend = async () => {
  const response = await api.get(
    "/api/reports/revenue-trend"
  );

  return response.data;
};