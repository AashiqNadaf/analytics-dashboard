import type { Dayjs } from 'dayjs';

export interface FilterSortModalProps {
  visible: boolean;
  onCancel: () => void;
  onApply: (filters: { dateRange?: [Dayjs, Dayjs] }) => void;
}
