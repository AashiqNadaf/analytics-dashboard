import type { LineChartData } from './interface';

export const LINE_CHART_DATA: LineChartData[] = [
  { month: 'Jan', current: 12, previous: 7 },
  { month: 'Feb', current: 10, previous: 17 },
  { month: 'Mar', current: 8, previous: 15 },
  { month: 'Apr', current: 16, previous: 10 },
  { month: 'May', current: 20, previous: 18 },
  { month: 'Jun', current: 19, previous: 23 },
];

export const LINE_CHART_COLORS = {
  current: '#1C1C1C',
  previous: '#AECDE0',
} as const;

export const LINE_CHART_CONFIG = {
  height: 318,
  title: 'Revenue',
} as const;
