import type { LocationData } from './interface';

export const LOCATION_DATA: LocationData[] = [
  { location: 'New York', revenue: 72, value: '72K' },
  { location: 'San Francisco', revenue: 39, value: '39K' },
  { location: 'Sydney', revenue: 25, value: '25K' },
  { location: 'Singapore', revenue: 61, value: '61K' },
];

export const LOCATION_COLORS = {
  bar: '#AECDE0',
  background: '#FFFFFF',
} as const;

export const LOCATION_CONFIG = {
  height: 318,
  title: 'Revenue by Location',
} as const;
