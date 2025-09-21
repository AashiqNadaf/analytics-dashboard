import { memo } from 'react';
import { useThemeStore } from '../../../../Store/themeStore';
import { LOCATION_DATA, LOCATION_COLORS } from './constants';
import type { LocationChartProps } from './interface';
import WorldMap from '../../../../Images/WorldMap.png';

const LocationChart: React.FC<LocationChartProps> = ({
  data = LOCATION_DATA,
}) => {
  const { theme } = useThemeStore();

  const maxRevenue = Math.max(...data.map((item) => item.revenue));

  return (
    <div
      className="w-full h-full min-h-[250px] p-2 sm:p-4 rounded-lg"
      style={{ backgroundColor: theme.primary }}
    >
      <h3
        className="text-base font-semibold mb-4"
        style={{ color: theme.text }}
      >
        Revenue by Location
      </h3>
      <img src={WorldMap} alt="World Map" className="w-full h-[82px]" />
      <div className="w-full h-[calc(100%-40px)] flex flex-col gap-4">
        <div className="flex-1 flex flex-col gap-3">
          {data.map((location, index) => {
            const percentage = (location.revenue / maxRevenue) * 100;

            return (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span
                    className="text-xs font-medium"
                    style={{ color: theme.text }}
                  >
                    {location.location}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: theme.text }}
                  >
                    {location.value}
                  </span>
                </div>
                <div
                  className="w-full h-2 rounded-full"
                  style={{ backgroundColor: LOCATION_COLORS.background }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: LOCATION_COLORS.bar,
                      width: `${percentage}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(LocationChart);
