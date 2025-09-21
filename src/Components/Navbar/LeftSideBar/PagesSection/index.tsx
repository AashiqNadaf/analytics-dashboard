import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../../../../Store/themeStore';
import { pages, PAGES_TAB } from './constants';
import DashboardItem from '../../../Common/NavBarItem';
import type { PagesSectionProps } from './interface';

const PagesSection: React.FC<PagesSectionProps> = ({ isActive, setIsActive }) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();

  const handleRouteClick = (path: string) => {
    setIsActive(path);
    navigate(path);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-1 pb-3">
      <span
        className="text-sm font-400 h-[28px] py-1 px-3 flex justify-start items-center"
        style={{
          color: theme.secondaryText,
        }}
      >
        {PAGES_TAB}
      </span>
      {pages
        .filter((route) => route.name && route.name !== 'Not Found')
        .map((route) => (
          <div className="w-full h-auto flex flex-col gap-1" key={route.path}>
            <DashboardItem
              route={route}
              isActive={isActive}
              handleRouteClick={handleRouteClick}
            />
          </div>
        ))}
    </div>
  );
};

export default memo(PagesSection);
