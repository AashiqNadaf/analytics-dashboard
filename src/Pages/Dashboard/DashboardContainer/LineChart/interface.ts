export interface LineChartData {
  month: string;
  current: number;
  previous: number;
}

export interface LineChartProps {
  data?: LineChartData[];
}
