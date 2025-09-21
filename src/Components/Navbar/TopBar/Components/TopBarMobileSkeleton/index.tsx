import { memo } from 'react';
import { useThemeStore } from '../../../../../Store/themeStore';
import { MOBILE_SKELETON_CONFIG, MOBILE_SKELETON_SIZES } from './constants';

const TopBarMobileSkeleton = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={MOBILE_SKELETON_CONFIG.containerClass}
      style={{ backgroundColor: theme.background, borderColor: theme.border }}
    >
      <div className={MOBILE_SKELETON_CONFIG.iconRowClass}>
        {Array.from({ length: MOBILE_SKELETON_SIZES.iconCount }).map(
          (_, index) => (
            <div
              key={index}
              className={MOBILE_SKELETON_CONFIG.iconClass}
              style={{ backgroundColor: theme.border }}
            />
          )
        )}
      </div>

      <div className={MOBILE_SKELETON_CONFIG.inputContainerClass}>
        <div
          className={MOBILE_SKELETON_CONFIG.inputClass}
          style={{ backgroundColor: theme.border }}
        />
      </div>

      <div className={MOBILE_SKELETON_CONFIG.breadcrumbClass}>
        <div
          className={`${MOBILE_SKELETON_CONFIG.breadcrumbItemClass} ${MOBILE_SKELETON_SIZES.breadcrumbItem1}`}
          style={{ backgroundColor: theme.border }}
        />
        <div
          className={`${MOBILE_SKELETON_CONFIG.breadcrumbItemClass} ${MOBILE_SKELETON_SIZES.breadcrumbSeparator}`}
          style={{ backgroundColor: theme.border }}
        />
        <div
          className={`${MOBILE_SKELETON_CONFIG.breadcrumbItemClass} ${MOBILE_SKELETON_SIZES.breadcrumbItem2}`}
          style={{ backgroundColor: theme.border }}
        />
      </div>
    </div>
  );
};

export default memo(TopBarMobileSkeleton);
