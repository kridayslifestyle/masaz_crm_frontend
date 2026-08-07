export type Priority = "low" | "medium" | "high";
export type Status = "open" | "in_progress" | "resolved";

export interface Complaint {
  id: number;

  // Basic Info
  store_id: number;
  store_name: string;
  chair_id: number;
  chair_machine_number: string;
  chair_device_id: string;

  // Customer Info
  reported_by: string;
  customer_name: string;
  customer_phone: string;

  // Problem Info
  problem_category: string;
  problem_description: string;
  priority: Priority;
  status: Status;

  // Service Info
  technician_name: string | null;
  visit_date: string | null;

  actual_problem: string | null;
  resolution_details: string | null;
  parts_replaced: string | null;

  service_cost: number | null;
  resolution_date: string | null;

  // Meta
  complaint_date: string;
  created_at: string;
  updated_at: string;

  notes: string | null;
}

export interface CreateComplaintPayload {
  store_id: number;
  chair_id: number;
  complaint_date: string;
  reported_by: string;
  customer_name: string;
  customer_phone: string;
  problem_category: string;
  problem_description: string;
  priority: Priority;
  notes?: string;
}

export interface ResolvePayload {
  technician_name: string;
  visit_date: string;

  actual_problem: string;
  resolution_details: string;
  parts_replaced: string;

  service_cost: number;
  resolution_date: string;

  notes?: string;
}