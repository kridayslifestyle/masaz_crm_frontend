export interface Store {
  id: number;

  name: string;

  owner_name: string;

  owner_phone: string;

  owner_email: string;

  city: string;

  address: string;

  is_active: boolean;

  store_type: string;

  total_chairs: number;

  monthly_revenue: number;

  pending_amount?: number;

  share_percentage?: number;

  partner_id?: string;

  growth_percentage?: number;
}