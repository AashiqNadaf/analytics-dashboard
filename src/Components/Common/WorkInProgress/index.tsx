import { memo } from 'react';
import { useThemeStore } from '../../../Store/themeStore';

const WorkInProgress = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{ backgroundColor: theme.background }}
    >
      <div className="text-center">
        <div className="text-6xl font-bold mb-4" style={{ color: theme.text }}>
          🚧
        </div>
        <h1
          className="text-2xl font-semibold mb-2"
          style={{ color: theme.text }}
        >
          Work in Progress
        </h1>
        <p
          className="text-lg opacity-75"
          style={{ color: theme.secondaryText }}
        >
          This feature is currently under development
        </p>
        <div
          className="mt-6 w-16 h-1 mx-auto rounded-full"
          style={{ backgroundColor: theme.primary }}
        />
      </div>
    </div>
  );
};

export default memo(WorkInProgress);
