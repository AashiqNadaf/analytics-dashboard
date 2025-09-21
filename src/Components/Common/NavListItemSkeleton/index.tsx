import { memo } from 'react';
import { useThemeStore } from '../../../Store/themeStore';

const NavListItemSkeleton = () => {
  const { theme } = useThemeStore();

  return (
    <div className="w-full h-[46px] flex flex-row items-center gap-2 p-1 animate-pulse">
      <div
        className="w-6 h-6 rounded-full"
        style={{ backgroundColor: theme.primary }}
      />
      <div className="flex flex-col justify-center gap-1 flex-1">
        <div
          className="h-3 w-3/4 rounded"
          style={{ backgroundColor: theme.primary }}
        />
        <div
          className="h-2 w-1/2 rounded"
          style={{ backgroundColor: theme.primary }}
        />
      </div>
    </div>
  );
};

export default memo(NavListItemSkeleton);
