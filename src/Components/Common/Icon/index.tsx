import { memo } from 'react';
import type { IconButtonProps } from './Interface';
import { useThemeStore } from '../../../Store/themeStore';
import { THEME_DARK, THEME_LIGHT } from '../../../Store/constant';

const Icon: React.FC<IconButtonProps> = ({
  lightThemeIcon: LightIcon,
  darkThemeIcon: DarkIcon,
  className,
  onClick,
}) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={`flex justify-center items-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {theme.currentTheme === THEME_DARK && <LightIcon />}
      {theme.currentTheme === THEME_LIGHT && <DarkIcon />}
    </div>
  );
};

export default memo(Icon);
