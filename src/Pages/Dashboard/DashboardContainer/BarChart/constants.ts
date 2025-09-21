import type { ChartData } from './interface';

export const CHART_DATA: ChartData[] = [
  {
    month: 'Jan',
    actuals: 16,
    projections: 4,
  },
  {
    month: 'Feb',
    actuals: 20,
    projections: 4,
  },
  {
    month: 'Mar',
    actuals: 17,
    projections: 4,
  },
  {
    month: 'Apr',
    actuals: 22,
    projections: 5,
  },
  {
    month: 'May',
    actuals: 14,
    projections: 3,
  },
  {
    month: 'Jun',
    actuals: 19,
    projections: 5,
  },
];

export const CHART_COLORS = {
  actuals: '#DDEBF5',
  projections: '#AECDE0',
} as const;

export const CHART_CONFIG = {
  desktop: {
    width: 432,
    height: 252,
  },
  mobile: {
    width: '100%',
    height: 200,
  },
} as const;
