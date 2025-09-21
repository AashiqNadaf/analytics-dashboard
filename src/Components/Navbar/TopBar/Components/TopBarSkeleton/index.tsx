import { memo } from 'react';
import { useThemeStore } from '../../../../../Store/themeStore';
import { SKELETON_CONFIG, SKELETON_SIZES } from './constants';

const TopBarSkeleton = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={SKELETON_CONFIG.containerClass}
      style={{ backgroundColor: theme.background, borderColor: theme.border }}
    >
      <div className={SKELETON_CONFIG.leftSectionClass}>
        <div
          className={SKELETON_CONFIG.iconClass}
          style={{ backgroundColor: theme.border }}
        />
        <div
          className={SKELETON_CONFIG.iconClass}
          style={{ backgroundColor: theme.border }}
        />
        <div className={SKELETON_CONFIG.breadcrumbClass}>
          <div
            className={`${SKELETON_CONFIG.breadcrumbItemClass} ${SKELETON_SIZES.breadcrumbItem1}`}
            style={{ backgroundColor: theme.border }}
          />
          <div
            className={`${SKELETON_CONFIG.breadcrumbItemClass} ${SKELETON_SIZES.breadcrumbSeparator}`}
            style={{ backgroundColor: theme.border }}
          />
          <div
            className={`${SKELETON_CONFIG.breadcrumbItemClass} ${SKELETON_SIZES.breadcrumbItem2}`}
            style={{ backgroundColor: theme.border }}
          />
        </div>
      </div>

      <div className={SKELETON_CONFIG.rightSectionClass}>
        <div
          className={SKELETON_CONFIG.inputClass}
          style={{ backgroundColor: theme.border }}
        />

        <div className={SKELETON_CONFIG.iconGroupClass}>
          <div
            className={SKELETON_CONFIG.iconClass}
            style={{ backgroundColor: theme.border }}
          />
          <div
            className={SKELETON_CONFIG.iconClass}
            style={{ backgroundColor: theme.border }}
          />
          <div
            className={SKELETON_CONFIG.iconClass}
            style={{ backgroundColor: theme.border }}
          />
          <div
            className={SKELETON_CONFIG.iconClass}
            style={{ backgroundColor: theme.border }}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(TopBarSkeleton);
