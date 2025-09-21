import { memo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useThemeStore } from '../../../../Store/themeStore';
import { TOTAL_SALES_DATA } from './constants';
import type { TotalSalesChartProps } from './interface';

const TotalSalesChart: React.FC<TotalSalesChartProps> = ({
  data = TOTAL_SALES_DATA,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className="w-full h-full min-h-[250px] p-2 sm:p-4 rounded-lg"
      style={{ backgroundColor: theme.primary }}
    >
      <h3
        className="text-base font-semibold mb-4"
        style={{ color: theme.text }}
      >
        Total Sales
      </h3>

      <div className="w-full h-[calc(100%-40px)] flex flex-col">
        {/* Donut Chart */}
        <div className="flex-1 flex items-center justify-center px-4 py-2">
          <div className="w-[120px] h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs" style={{ color: theme.text }}>
                  {item.name}
                </span>
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: theme.text }}
              >
                ${item.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TotalSalesChart);
