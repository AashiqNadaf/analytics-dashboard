import type { Dayjs } from 'dayjs';

export const MODAL_CONFIG = {
  title: 'Filter Orders by Date',
  width: 500,
  top: 20,
} as const;

export const DEFAULT_FILTERS = {
  dateRange: undefined as [Dayjs, Dayjs] | undefined,
};
