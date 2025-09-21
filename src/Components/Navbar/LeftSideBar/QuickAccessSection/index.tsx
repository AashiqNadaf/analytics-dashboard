import { useThemeStore } from '../../../../Store/themeStore';
import { memo, useState } from 'react';
import { FAVORITES_TAB, RECENTLY_TAB } from './constants';
import { useQuickAccessStore } from '../../../../Store/quickAccessStore';
import { trimRoute } from './util';

const QuickAccessSection = () => {
  const { theme } = useThemeStore();
  const { favoriteRoutes, recentlyVisited } = useQuickAccessStore();
  const [activeTab, setActiveTab] = useState<
    typeof FAVORITES_TAB | typeof RECENTLY_TAB
  >(FAVORITES_TAB);
  const handleTabChange = (tab: typeof FAVORITES_TAB | typeof RECENTLY_TAB) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full h-auto pb-3 flex flex-col gap-1">
      <div className="w-full h-[28px] flex flex-row gap-1 justify-start">
        <div
          className="w-full h-full flex justify-center items-center py-1 px-2 cursor-pointer"
          onClick={() => handleTabChange(FAVORITES_TAB)}
        >
          <span
            className="text-sm font-400"
            style={{
              color:
                activeTab === FAVORITES_TAB
                  ? theme.secondaryText
                  : theme.tertiaryText,
            }}
          >
            {FAVORITES_TAB}
          </span>
        </div>
        <div
          className="w-full h-full flex justify-center items-center py-1 px-2 cursor-pointer"
          onClick={() => handleTabChange(RECENTLY_TAB)}
        >
          <span
            className="text-sm font-400"
            style={{
              color:
                activeTab === RECENTLY_TAB
                  ? theme.secondaryText
                  : theme.tertiaryText,
            }}
          >
            {RECENTLY_TAB}
          </span>
        </div>
      </div>
      {activeTab === FAVORITES_TAB && favoriteRoutes.length > 0 && (
        <div className="w-full flex flex-col gap-1">
          {favoriteRoutes.map((route) => (
            <div key={route} className="w-full h-[28px] flex flex-col gap-1">
              <div className="w-full h-full flex justify-start items-center py-1 px-2 ">
                <div className="w-4 h-4 flex justify-center items-center">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: theme.tertiaryText }}
                  />
                </div>
                <span className="text-sm font-medium">{trimRoute(route)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === RECENTLY_TAB && recentlyVisited.length > 0 && (
        <div className="w-full flex flex-col gap-1">
          {recentlyVisited.map((route) => (
            <div key={route} className="w-full h-[28px] flex flex-col gap-1">
              <div className="w-full h-full flex justify-start items-center py-1 px-2 ">
                <div className="w-4 h-4 flex justify-center items-center">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: theme.tertiaryText }}
                  />
                </div>
                <span className="text-sm font-medium">{trimRoute(route)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(QuickAccessSection);
