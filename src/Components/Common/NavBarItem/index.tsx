import { memo, useState } from 'react';
import Icon from '../Icon';
import type { DashboardItemProps } from './interface';
import { useThemeStore } from '../../../Store/themeStore';
import { ReactComponent as LightActiveSymbolIcon } from '../../../Icons/LightActiveSybmol.svg';
import { ReactComponent as DarkActiveSymbolIcon } from '../../../Icons/DarkActiveSybmol.svg';
import { ReactComponent as LightArrowRightIcon } from '../../../Icons/LightRightArrowIcon.svg';
import { ReactComponent as DarkArrowRightIcon } from '../../../Icons/DarkRightArrowIcon.svg';

const DashboardItem = ({
  route,
  isActive,
  handleRouteClick,
}: DashboardItemProps) => {
  const { theme } = useThemeStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const onClick = () => {
    handleRouteClick(route.path);
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className="text-sm font-400 h-[28px] py-1 pr-3 flex justify-start items-center gap-1 cursor-pointer"
        onClick={onClick}
        style={{
          backgroundColor:
            isActive === route.path ? theme.itemActiveBg : 'transparent',
          borderRadius: '8px',
        }}
      >
        <div className="w-6 h-5 p-1 flex flex-row justify-end items-center">
          {isActive === route.path && (
            <Icon
              lightThemeIcon={LightActiveSymbolIcon}
              darkThemeIcon={DarkActiveSymbolIcon}
              className="w-1 h-3 mr-auto"
            />
          )}
          {route?.children?.length &&
            route?.children?.length > 0 &&
            (isExpanded ? (
              <Icon
                lightThemeIcon={LightArrowRightIcon}
                darkThemeIcon={DarkArrowRightIcon}
                className="w-4 h-4 flex justify-end items-center rotate-90"
              />
            ) : (
              <Icon
                lightThemeIcon={LightArrowRightIcon}
                darkThemeIcon={DarkArrowRightIcon}
                className="w-4 h-4 flex justify-end items-center"
              />
            ))}
        </div>
        {route.lightThemeIcon && route.darkThemeIcon && (
          <Icon
            lightThemeIcon={route.lightThemeIcon}
            darkThemeIcon={route.darkThemeIcon}
            className="w-5 h-5 p-1"
          />
        )}
        <span
          style={{
            color: theme.text,
          }}
        >
          {route.name}
        </span>
      </div>
      {isExpanded && (
        <div className="w-full h-auto flex flex-col gap-1">
          {route.children?.map((child) => (
            <DashboardItem
              key={child.path}
              route={child}
              isActive={isActive}
              handleRouteClick={handleRouteClick}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default memo(DashboardItem);
