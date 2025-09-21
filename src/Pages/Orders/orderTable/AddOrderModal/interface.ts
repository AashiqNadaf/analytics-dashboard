import type { Order } from '../../interface';

export interface AddOrderModalProps {
  visible: boolean;
  onCancel: () => void;
  onAdd: (order: Omit<Order, 'id'>) => void;
}
