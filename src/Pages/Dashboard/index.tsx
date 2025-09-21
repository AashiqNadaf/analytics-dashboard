import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuickAccessStore } from '../../Store/quickAccessStore';
import { DASHBOARD_TAB } from './constants';
import { useThemeStore } from '../../Store/themeStore';
import DashboardContainer from './DashboardContainer';

const Dashboard = () => {
  const location = useLocation();
  const { addToRecentlyVisited } = useQuickAccessStore();
  const { theme } = useThemeStore();
  useEffect(() => {
    if (location.pathname && location.pathname !== '/') {
      addToRecentlyVisited(location.pathname);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-4 p-2">
      <div
        className="w-full h-[28px] flex justify-start items-center px-2 text-sm font-semibold"
        style={{ color: theme.text }}
      >
        {DASHBOARD_TAB}
      </div>
      <DashboardContainer />
    </div>
  );
};

export default memo(Dashboard);
