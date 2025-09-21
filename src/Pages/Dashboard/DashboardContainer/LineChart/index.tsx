import { memo } from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { useThemeStore } from '../../../../Store/themeStore';
import { LINE_CHART_DATA, LINE_CHART_COLORS } from './constants';
import type { LineChartProps } from './interface';

const LineChart: React.FC<LineChartProps> = ({ data = LINE_CHART_DATA }) => {
  const { theme } = useThemeStore();

  return (
    <div
      className="w-full h-full min-h-[250px] p-2 sm:p-4 rounded-lg"
      style={{ backgroundColor: theme.primary }}
    >
      <div className="flex items-center mb-4">
        <h3 className="text-base font-semibold" style={{ color: theme.text }}>
          Revenue
        </h3>
        <div
          className="w-px h-4 mx-4"
          style={{ backgroundColor: theme.border }}
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: LINE_CHART_COLORS.current }}
            />
            <span className="text-xs" style={{ color: theme.text }}>
              Current Week
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: LINE_CHART_COLORS.previous }}
            />
            <span className="text-xs" style={{ color: theme.text }}>
              Previous Week
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100%-40px)]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
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
            <Line
              type="monotone"
              dataKey="current"
              stroke={LINE_CHART_COLORS.current}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke={LINE_CHART_COLORS.previous}
              strokeWidth={2}
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(LineChart);
