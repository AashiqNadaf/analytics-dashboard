export const ORDER_STATUS_OPTIONS = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'In progress', label: 'In progress' },
  { value: 'Complete', label: 'Complete' },
  { value: 'Rejected', label: 'Rejected' },
] as const;

export const MODAL_CONFIG = {
  title: 'Add New Order',
  width: 600,
  top: 20,
} as const;

export const FORM_RULES = {
  user: [{ required: true, message: 'Please enter user name!' }],
  project: [{ required: true, message: 'Please enter project name!' }],
  address: [{ required: true, message: 'Please enter address!' }],
  status: [{ required: true, message: 'Please select status!' }],
};

export const SUCCESS_MESSAGE = 'Order added successfully!';
