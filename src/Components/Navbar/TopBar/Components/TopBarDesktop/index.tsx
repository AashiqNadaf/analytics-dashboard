import { memo } from 'react';
import { useThemeStore } from '../../../../../Store/themeStore';
import type { TopBarDesktopProps } from './interface';
import TopBarRightContent from '../TopBarRightContent';
import TopBarLeftContent from '../TopBarLeftContent';

const TopBarDesktop: React.FC<TopBarDesktopProps> = ({
  handleLeftSideBarOpen,
  handleRightSideBarOpen,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className="w-full min-h-[68px] flex flex-row px-7 py-5 items-center justify-between gap-2 border-b"
      style={{ backgroundColor: theme.background, borderColor: theme.border }}
    >
      <TopBarLeftContent handleLeftSideBarOpen={handleLeftSideBarOpen} />
      <TopBarRightContent handleRightSideBarOpen={handleRightSideBarOpen} />
    </div>
  );
};

export default memo(TopBarDesktop);
