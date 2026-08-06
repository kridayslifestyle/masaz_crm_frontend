export interface Store {
  id: number;

  // Store details
  name: string;
  owner_name: string;
  owner_phone?: string | null;
  owner_email?: string | null;

  city?: string | null;
  address?: string | null;

  is_active: boolean;
  store_type: string;

  // Agreement / revenue
  agreement_start_date?: string | null;
  agreement_end_date?: string | null;

  revenue_share_type?: string | null;
  gst_number?: string | null;

  // Bank details
  account_holder_name?: string | null;
  bank_name?: string | null;
  account_number?: string | null;
  ifsc_code?: string | null;

  // Payment details
  payment_invoice?: string | null;
  payment_date?: string | null;

  // Store login
  store_username?: string | null;

  // Calculated backend values
  total_chairs: number;
  monthly_revenue: number;

  // Optional calculated values
  pending_amount?: number;
  share_percentage?: number;
  partner_id?: string;
  growth_percentage?: number;

  created_at?: string;
}

export interface StoreCredentials {
  store_username: string | null;
  store_password: string | null;
}