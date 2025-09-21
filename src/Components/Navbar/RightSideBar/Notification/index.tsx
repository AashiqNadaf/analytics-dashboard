import { memo, useState, useEffect } from 'react';
import { DUMMY_NOTIFICATIONS } from './constants';
import type { Notification } from './interface';
import { useThemeStore } from '../../../../Store/themeStore';
import NavListItem from '../../../Common/NavListItem';
import NavListItemSkeleton from '../../../Common/NavListItemSkeleton';
import { getNotificationIcon } from './util';

const Notification = () => {
  const { theme } = useThemeStore();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNotifications = async () => {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setNotifications(DUMMY_NOTIFICATIONS);
      setIsLoading(false);
    };

    loadNotifications();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <span
        className="w-full h-[36px] text-sm font-600 flex items-center"
        style={{ color: theme.text }}
      >
        Notifications
      </span>

      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <NavListItemSkeleton key={index} />
          ))
        : notifications.map((notification) => (
            <NavListItem
              key={notification.id}
              icon={getNotificationIcon(notification.type)}
              title={notification.title}
              time={notification.time}
            />
          ))}
    </div>
  );
};

export default memo(Notification);
