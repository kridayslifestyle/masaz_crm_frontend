export interface DashboardData {
  kpis: {
    total_chairs: number;
    active_stores: number;
    today_revenue: number;
    monthly_revenue: number;
    pending_payout_amount: number;
    low_performing_chairs: number;
  };

  chair_status: {
    active: number;
    low_performing: number;
    offline: number;
    maintenance: number;
  };

  daily_collection_chart: {
    date: string;
    revenue: number;
  }[];

  top_stores: any[];

  recent_collections: any[];
}