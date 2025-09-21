import { memo } from 'react';
import type { CardProps } from './interface';
import { useThemeStore } from '../../../../../Store/themeStore';
import Icon from '../../../../../Components/Common/Icon';
import { ReactComponent as LightTrendUpIcon } from '../../../../../Icons/LightTrendUp.svg';
import { ReactComponent as DarkTrendUpIcon } from '../../../../../Icons/DarkTrendUp.svg';
import { ReactComponent as LightTrendDownIcon } from '../../../../../Icons/LightTrendDown.svg';
import { ReactComponent as DarkTrendDownIcon } from '../../../../../Icons/DarkTrendDown.svg';
import { isDarkBackground, getTextColor } from './constants';

const Card: React.FC<CardProps> = ({
  title,
  value,
  backgroundColor,
  percentage,
}) => {
  const { theme } = useThemeStore();
  const isDark = isDarkBackground(backgroundColor);
  const isThemeFriendly = title === 'Orders' || title === 'Revenue';
  const textColor = getTextColor(title, backgroundColor, theme.text);

  return (
    <div
      className="w-full h-[112px] rounded-2xl flex flex-col gap-2 p-4 sm:p-6"
      style={{ backgroundColor }}
    >
      <div
        className="w-full h-[20px] flex justify-start items-center text-sm font-semibold"
        style={{ color: textColor }}
      >
        {title}
      </div>
      <div className="w-full h-[36px] flex justify-between items-center">
        <span className="text-2xl font-semibold" style={{ color: textColor }}>
          {`${title === 'Revenue' ? '$' : ''}${value}${
            title === 'Growth' ? '%' : ''
          }`}
        </span>
        <span
          className="text-xs font-semibold flex justify-center items-center gap-1 flex-row"
          style={{ color: textColor }}
        >
          {`${percentage > 0 ? '+' : '-'}${percentage}%`}{' '}
          <Icon
            lightThemeIcon={
              isThemeFriendly
                ? percentage > 0
                  ? LightTrendUpIcon
                  : LightTrendDownIcon
                : percentage > 0
                ? isDark
                  ? LightTrendUpIcon
                  : DarkTrendUpIcon
                : isDark
                ? LightTrendDownIcon
                : DarkTrendDownIcon
            }
            darkThemeIcon={
              isThemeFriendly
                ? percentage > 0
                  ? DarkTrendUpIcon
                  : DarkTrendDownIcon
                : percentage > 0
                ? isDark
                  ? LightTrendUpIcon
                  : DarkTrendUpIcon
                : isDark
                ? LightTrendDownIcon
                : DarkTrendDownIcon
            }
            className="w-4 h-4"
          />
        </span>
      </div>
    </div>
  );
};

export default memo(Card);
