import { memo, useState, useEffect } from 'react';
import { ACTIVITIES_TITLE, DUMMY_ACTIVITIES } from './constants';
import type { Activity } from './interface';
import { useThemeStore } from '../../../../Store/themeStore';
import NavListItem from '../../../Common/NavListItem';
import NavListItemSkeleton from '../../../Common/NavListItemSkeleton';
import UserAvatar from '../../../Common/UserAvatar';

const Activities = () => {
  const { theme } = useThemeStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadActivities = async () => {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setActivities(DUMMY_ACTIVITIES);
      setIsLoading(false);
    };

    loadActivities();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <span
        className="w-full h-[36px] text-sm font-600 flex items-center"
        style={{ color: theme.text }}
      >
        {ACTIVITIES_TITLE}
      </span>
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <NavListItemSkeleton key={index} />
          ))
        : activities.map((activity) => (
            <NavListItem
              key={activity.id}
              icon={
                <UserAvatar
                  userProfile={activity.userProfile}
                  size={24}
                  className="flex-shrink-0"
                />
              }
              title={activity.title}
              time={activity.time}
            />
          ))}
    </div>
  );
};

export default memo(Activities);
