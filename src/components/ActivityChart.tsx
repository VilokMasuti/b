import { useState } from 'react';
import { format, subMonths } from 'date-fns';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

interface ActivityChartProps {
  activityData: number[];
}

// Easy month label generation using date-fns
const getLast12Months = (): string[] => {
  return Array.from({ length: 12 }, (_, i) =>
    format(subMonths(new Date(), 11 - i), 'MMM')
  );
};

const ActivityChart = ({ activityData }: ActivityChartProps) => {
  const [view, setView] = useState<'year' | 'month'>('year');
  const months = getLast12Months();

  // Group data by month (4 weeks per month)
  const yearlyData = months.map((month, i) => {
    const startIndex = i * 4;
    const monthContributions = activityData.slice(startIndex, startIndex + 4).reduce((a, b) => a + b, 0);
    return {
      name: month,
      contributions: monthContributions,
    };
  });

  // Simpler dummy daily data from last 4 weeks
  const monthlyData = activityData.slice(-4).flatMap((weekCount, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      return {
        name: `Day ${weekIdx * 7 + dayIdx + 1}`,
        contributions: Math.floor(weekCount / 7),
      };
    });
  });

  const chartData = view === 'year' ? yearlyData : monthlyData;

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle>Contribution Activity</CardTitle>
          <Tabs defaultValue="year" className="w-[200px]" onValueChange={(value) => setView(value as 'year' | 'month')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="year">Year</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="pt-6 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
              }}
              formatter={(value: number) => [`${value} contributions`]}
              labelFormatter={(label) => `${label}`}
            />
            <Area
              type="monotone"
              dataKey="contributions"
              stroke="#6366F1"
              fillOpacity={1}
              fill="url(#colorContributions)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
