export interface Employee {
  id: number;

  name: string;

  phone: string;

  email: string;

  region: string;

  designation: string;

  target_revenue: number;

  commission_percentage: number;

  joining_date: string;

  status: string;

  assigned_stores?: number;

  assigned_chairs?: number;

  performance_percentage?: number;

  incentive_amount?: number;
}