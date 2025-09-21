export type NotificationType = 'bug' | 'user_registration' | 'user_specific';

export interface Notification {
  id: string;
  title: string;
  time: string;
  type: NotificationType;
}
