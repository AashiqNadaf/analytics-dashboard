import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import type { TopBarLeftContentProps } from './interface';
import { ICON_CONFIG, BREADCRUMB_CONFIG } from './constants';
import Icon from '../../../../Common/Icon';
import { ReactComponent as LightToogleNavbarIcon } from '../../../../../Icons/LightToogleNavbarIcon.svg';
import { ReactComponent as LightFavouriteIcon } from '../../../../../Icons/LightFavouriteIcon.svg';
import { ReactComponent as DarkToogleNavbarIcon } from '../../../../../Icons/DarkToogleNavbarIcon.svg';
import { ReactComponent as DarkFavouriteIcon } from '../../../../../Icons/DarkFavouriteIcon.svg';
import { ReactComponent as LightFilledStarIcon } from '../../../../../Icons/LightFilledStarIcon.svg';
import { ReactComponent as DarkFilledStarIcon } from '../../../../../Icons/DarkFilledStarIcon.svg';
import TopBarBreadcrumb from '../TopBarBreadcrumb';
import '../style.scss';
import { useQuickAccessStore } from '../../../../../Store/quickAccessStore';

const TopBarLeftContent: React.FC<TopBarLeftContentProps> = ({
  handleLeftSideBarOpen,
}) => {
  const { toggleFavorite, isFavorite } = useQuickAccessStore();
  const location = useLocation();

  const currentRoute = location.pathname;

  return (
    <div className="flex flex-row gap-2">
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
      <div
        className={`${BREADCRUMB_CONFIG.hiddenClass} ${BREADCRUMB_CONFIG.containerClass}`}
      >
        <TopBarBreadcrumb />
      </div>
    </div>
  );
};

export default memo(TopBarLeftContent);
