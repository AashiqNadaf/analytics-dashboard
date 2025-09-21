import { memo, useCallback, useState } from 'react';
import type { TopBarRightContentProps } from './interface';
import { ICON_CONFIG, LAYOUT_CONFIG } from './constants';
import Input from '../../../../Common/Input';
import Icon from '../../../../Common/Icon';
import { ReactComponent as LightToogleThemeIcon } from '../../../../../Icons/LightToogleThemeIcon.svg';
import { ReactComponent as DarkToogleThemeIcon } from '../../../../../Icons/DarkToogleThemeIcon.svg';
import { ReactComponent as LightRefreshIcon } from '../../../../../Icons/LightRefreshIcon.svg';
import { ReactComponent as DarkRefreshIcon } from '../../../../../Icons/DarkRefreshIcon.svg';
import { ReactComponent as LightNotificationIcon } from '../../../../../Icons/LightNotificationIcon.svg';
import { ReactComponent as DarkNotificationIcon } from '../../../../../Icons/DarkNotificationIcon.svg';
import { ReactComponent as LightToogleNavbarIcon } from '../../../../../Icons/LightToogleNavbarIcon.svg';
import { ReactComponent as DarkToogleNavbarIcon } from '../../../../../Icons/DarkToogleNavbarIcon.svg';
import { useThemeStore } from '../../../../../Store/themeStore';
import { ReactComponent as LightSearchIcon } from '../../../../../Icons/LightSearchIcon.svg';
import { ReactComponent as DarkSearchIcon } from '../../../../../Icons/DarkSearchIcon.svg';

const TopBarRightContent: React.FC<TopBarRightContentProps> = ({
  handleRightSideBarOpen,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const { toggleTheme, theme } = useThemeStore();
  const onRefreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className={LAYOUT_CONFIG.containerClass}>
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
      <div className={LAYOUT_CONFIG.iconGroupClass}>
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
          lightThemeIcon={LightToogleNavbarIcon}
          darkThemeIcon={DarkToogleNavbarIcon}
          onClick={handleRightSideBarOpen}
          className={`${ICON_CONFIG.size} ${ICON_CONFIG.padding} ${ICON_CONFIG.cursor}`}
        />
      </div>
    </div>
  );
};

export default memo(TopBarRightContent);
