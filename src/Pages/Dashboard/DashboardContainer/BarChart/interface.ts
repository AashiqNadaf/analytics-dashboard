export interface ChartData {
  month: string;
  actuals: number;
  projections: number;
}

export interface BarChartProps {
  data?: ChartData[];
}
