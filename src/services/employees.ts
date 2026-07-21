import { api } from "./api";

import { Employee } from "@/types/employee";


export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get("/api/employees");

  return response.data;
};


export const getEmployee = async (
  employeeId: number
): Promise<Employee> => {
  const response = await api.get(
    `/api/employees/${employeeId}`
  );

  return response.data;
};


export const createEmployee = async (
  data: Partial<Employee>
) => {
  const response = await api.post(
    "/api/employees",
    data
  );

  return response.data;
};


export const updateEmployee = async (
  employeeId: number,
  data: Partial<Employee>
) => {
  const response = await api.patch(
    `/api/employees/${employeeId}`,
    data
  );

  return response.data;
};


export const deleteEmployee = async (
  employeeId: number
) => {
  const response = await api.delete(
    `/api/employees/${employeeId}`
  );

  return response.data;
};


export const getEmployeePerformance = async () => {
  const response = await api.get(
    "/api/employees/stats/performance"
  );

  return response.data;
};


export const getEmployeeSummary = async () => {
  const response = await api.get(
    "/api/employees/stats/summary"
  );

  return response.data;
};