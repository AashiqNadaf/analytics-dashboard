import { memo, useCallback, useState } from 'react';
import type { TopBarMobileProps } from './interface';
import { ICON_CONFIG, LAYOUT_CONFIG } from './constants';
import Icon from '../../../../Common/Icon';
import { ReactComponent as LightToogleNavbarIcon } from '../../../../../Icons/LightToogleNavbarIcon.svg';
import { ReactComponent as LightFavouriteIcon } from '../../../../../Icons/LightFavouriteIcon.svg';
import { ReactComponent as DarkToogleNavbarIcon } from '../../../../../Icons/DarkToogleNavbarIcon.svg';
import { ReactComponent as DarkFavouriteIcon } from '../../../../../Icons/DarkFavouriteIcon.svg';
import { ReactComponent as LightFilledStarIcon } from '../../../../../Icons/LightFilledStarIcon.svg';
import { ReactComponent as DarkFilledStarIcon } from '../../../../../Icons/DarkFilledStarIcon.svg';
import { ReactComponent as LightToogleThemeIcon } from '../../../../../Icons/LightToogleThemeIcon.svg';
import { ReactComponent as DarkToogleThemeIcon } from '../../../../../Icons/DarkToogleThemeIcon.svg';
import { ReactComponent as LightRefreshIcon } from '../../../../../Icons/LightRefreshIcon.svg';
import { ReactComponent as DarkRefreshIcon } from '../../../../../Icons/DarkRefreshIcon.svg';
import { ReactComponent as LightNotificationIcon } from '../../../../../Icons/LightNotificationIcon.svg';
import { ReactComponent as DarkNotificationIcon } from '../../../../../Icons/DarkNotificationIcon.svg';
import { ReactComponent as LightToogleRightNavbarIcon } from '../../../../../Icons/LightToogleNavbarIcon.svg';
import { ReactComponent as DarkToogleRightNavbarIcon } from '../../../../../Icons/DarkToogleNavbarIcon.svg';
import { useThemeStore } from '../../../../../Store/themeStore';
import { useQuickAccessStore } from '../../../../../Store/quickAccessStore';
import { useLocation } from 'react-router-dom';
import Input from '../../../../Common/Input';
import TopBarBreadcrumb from '../TopBarBreadcrumb';
import { ReactComponent as LightSearchIcon } from '../../../../../Icons/LightSearchIcon.svg';
import { ReactComponent as DarkSearchIcon } from '../../../../../Icons/DarkSearchIcon.svg';

const TopBarMobile: React.FC<TopBarMobileProps> = ({
  handleLeftSideBarOpen,
  handleRightSideBarOpen,
}) => {
  const { theme, toggleTheme } = useThemeStore();
  const { toggleFavorite, isFavorite } = useQuickAccessStore();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const currentRoute = location.pathname;

  const onRefreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div
      className={LAYOUT_CONFIG.containerClass}
      style={{ backgroundColor: theme.background, borderColor: theme.border }}
    >
      {/* Line 1: All Icons - Evenly Spaced */}
      <div className={LAYOUT_CONFIG.iconRowClass}>
        <Icon
          lightThemeIcon={LightToogleNavbarIcon}
          darkThemeIcon={DarkToogleNavbarIcon}
          className={`${ICON_CONFIG.size} ${ICON_CONFIG.padding} ${ICON_CONFIG.cursor}`}
          onClick={handleLeftSideBarOpen}
        />
        <Icon
          lightThemeIcon={
            isFavorite(currentRoute) ? DarkFilledStarIcon : DarkFavouriteIcon
          }
          darkThemeIcon={
            isFavorite(currentRoute) ? LightFilledStarIcon : LightFavouriteIcon
          }
          className={`${ICON_CONFIG.size} ${ICON_CONFIG.padding} ${ICON_CONFIG.cursor}`}
          onClick={() => toggleFavorite(currentRoute)}
        />
        <Icon
          lightThemeIcon={LightToogleThemeIcon}
          darkThemeIcon={DarkToogleThemeIcon}
          onClick={toggleTheme}
          className={`${ICON_CONFIG.size} ${ICON_CONFIG.padding} ${ICON_CONFIG.cursor}`}
        />
        <Icon
          lightThemeIcon={LightRefreshIcon}
          darkThemeIcon={DarkRefreshIcon}
          onClick={onRefreshPage}
          className={`${ICON_CONFIG.size} ${ICON_CONFIG.padding} ${ICON_CONFIG.cursor}`}
        />
        <Icon
          lightThemeIcon={LightNotificationIcon}
          darkThemeIcon={DarkNotificationIcon}
          onClick={() => {}}
          className={`${ICON_CONFIG.size} ${ICON_CONFIG.padding} ${ICON_CONFIG.cursor}`}
        />
        <Icon
          lightThemeIcon={LightToogleRightNavbarIcon}
          darkThemeIcon={DarkToogleRightNavbarIcon}
          onClick={handleRightSideBarOpen}
          className={`${ICON_CONFIG.size} ${ICON_CONFIG.padding} ${ICON_CONFIG.cursor}`}
        />
      </div>

      <div className={LAYOUT_CONFIG.inputContainerClass}>
        <Input
          placeholder="Search"
          prefix={
            <Icon
              lightThemeIcon={DarkSearchIcon}
              darkThemeIcon={LightSearchIcon}
              className="w-5 h-5"
            />
          }
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
          suffix={<span style={{ color: theme.placeholder }}>⌘/</span>}
        />
      </div>

      <TopBarBreadcrumb />
    </div>
  );
};

export default memo(TopBarMobile);
