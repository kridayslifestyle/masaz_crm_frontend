export interface Employee {
  id: number;

  employee_code: string;
  name: string;

  phone?: string | null;
  email?: string | null;

  designation?: string | null;
  city?: string | null;

  joining_date?: string | null;

  salary?: number | null;

  is_active: boolean;

  created_at?: string;

  // Calculated frontend/backend fields if used elsewhere
  assigned_stores?: number;
  assigned_chairs?: number;
  performance_percentage?: number;
  incentive_amount?: number;
}