import type { SalesData } from './interface';

export const TOTAL_SALES_DATA: SalesData[] = [
  {
    name: 'Direct',
    value: 300.56,
    color: '#1C1C1C',
    percentage: 46.9,
  },
  {
    name: 'Affiliate',
    value: 135.18,
    color: '#4AA785',
    percentage: 21.1,
  },
  {
    name: 'Sponsored',
    value: 154.02,
    color: '#8A8CD9',
    percentage: 24.0,
  },
  {
    name: 'E-mail',
    value: 48.96,
    color: '#AECDE0',
    percentage: 7.6,
  },
];

export const CHART_CONFIG = {
  height: 318,
  title: 'Total Sales',
} as const;
