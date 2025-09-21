import type { Activity } from './interface';

export const DUMMY_ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'You have a bug that needs to be fixed',
    time: 'Just now',
    userProfile:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '2',
    title: 'Released a new version',
    time: '59 minutes ago',
    userProfile:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '3',
    title: 'Submitted a bug',
    time: '12 hours ago',
    userProfile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '4',
    title: 'Modified A data in Page X',
    time: 'Today, 11:59 AM',
    userProfile:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: '5',
    title: 'Deleted a page in Project X',
    time: 'Feb 2, 2023',
    userProfile:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  },
];

export const ACTIVITIES_TITLE = 'Activities';
