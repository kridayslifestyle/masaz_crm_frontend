export interface Collection {
  id: number;

  chair_id: number;

  store_id: number;

  date: string;

  total_amount: number;

  online_payment: number;

  cash_payment: number;

  change_amount: number;

  transaction_count: number;

  status: string;

  notes: string;

  created_at: string;

  chair_code: string;

  store_name: string;
}