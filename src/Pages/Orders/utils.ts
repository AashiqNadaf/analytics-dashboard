import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
import type { Theme } from '../../Store/interface';

export const formatRelativeTime = (date: Date): string => {
  const now = dayjs();
  const targetDate = dayjs(date);
  const diffInMinutes = now.diff(targetDate, 'minutes');
  const diffInHours = now.diff(targetDate, 'hours');

  if (diffInMinutes < 1) {
    return 'just now';
  }

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  }

  if (diffInHours < 12) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }

  if (targetDate.isSame(now, 'day')) {
    return 'today';
  }

  if (targetDate.isSame(now.subtract(1, 'day'), 'day')) {
    return 'yesterday';
  }

  return targetDate.format('MMM DD, YYYY');
};

export const getInputBackgroundColor = (theme: Theme) => {
  return theme.currentTheme === 'dark' ? '#FFFFFF1A' : '#1C1C1C0D';
};
