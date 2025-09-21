import type { Notification } from './interface';

export const DUMMY_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Critical Bug Detected',
    time: '2 minutes ago',
    type: 'bug',
  },
  {
    id: '2',
    title: 'New User Registration',
    time: '5 minutes ago',
    type: 'user_registration',
  },
  {
    id: '3',
    title: 'Profile Update Required',
    time: '10 minutes ago',
    type: 'user_specific',
  },
];
