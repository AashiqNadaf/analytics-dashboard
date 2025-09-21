import { memo } from 'react';
import type { NavListItemProps } from './interface';
import { useThemeStore } from '../../../Store/themeStore';

const NavListItem: React.FC<NavListItemProps> = ({ icon, title, time }) => {
  const { theme } = useThemeStore();
  return (
    <div className="w-full h-[46px] flex flex-row items-center gap-2 p-1">
      {icon}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <span
          className="text-sm font-400 truncate"
          style={{
            color: theme.text,
            maxWidth: '190px',
          }}
          title={title}
        >
          {title}
        </span>
        {time && (
          <span
            className="text-xs font-400 truncate"
            style={{
              color: theme.secondaryText,
              maxWidth: '190px',
            }}
            title={time}
          >
            {time}
          </span>
        )}
      </div>
    </div>
  );
};

export default memo(NavListItem);
