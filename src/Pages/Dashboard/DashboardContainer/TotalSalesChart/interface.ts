export interface SalesData {
  name: string;
  value: number;
  color: string;
  percentage: number;
  [key: string]: string | number;
}

export interface TotalSalesChartProps {
  data?: SalesData[];
}
