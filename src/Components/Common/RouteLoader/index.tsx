import React, { memo } from 'react';
import { useThemeStore } from '../../../Store/themeStore';

const RouteLoader: React.FC = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className="flex items-center justify-center h-full w-full"
      style={{ backgroundColor: theme.background }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="animate-spin rounded-full border-4 border-solid border-t-transparent"
          style={{
            width: '40px',
            height: '40px',
            borderColor: theme.border,
            borderTopColor: theme.primary,
          }}
        />
        <div className="text-sm" style={{ color: theme.secondaryText }}>
          Loading page...
        </div>
      </div>
    </div>
  );
};

export default memo(RouteLoader);
