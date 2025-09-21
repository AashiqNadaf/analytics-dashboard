import { memo } from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { useThemeStore } from '../../../../Store/themeStore';
import { CHART_DATA, CHART_COLORS } from './constants';
import type { BarChartProps } from './interface';

const BarChart: React.FC<BarChartProps> = ({ data = CHART_DATA }) => {
  const { theme } = useThemeStore();

  return (
    <div className="w-full h-[252px]">
      <div
        className="w-full h-full sm:px-4 p-4 sm:pb-8 pt-2 sm:pt-4 rounded-lg"
        style={{ backgroundColor: theme.primary }}
      >
        <span
          className="text-base font-semibold mb-4"
          style={{ color: theme.text }}
        >
          Projections vs Actuals
        </span>
        <div className="w-full h-[180px] sm:h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme.border}
                opacity={0.3}
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: theme.text,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: theme.text,
                  fontSize: 12,
                  fontWeight: 500,
                }}
                tickFormatter={(value) => `${value}M`}
              />
              <Bar
                dataKey="projections"
                stackId="a"
                fill={CHART_COLORS.projections}
                radius={[0, 0, 0, 0]}
                maxBarSize={30}
              />
              <Bar
                dataKey="actuals"
                stackId="a"
                fill={CHART_COLORS.actuals}
                radius={[4, 4, 0, 0]}
                maxBarSize={30}
              />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default memo(BarChart);
