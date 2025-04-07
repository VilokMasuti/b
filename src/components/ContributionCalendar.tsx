import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Separator } from '../components/ui/separator';

interface ContributionCalendarProps {
  activityData: number[];
}

const ContributionCalendar = ({ activityData }: ContributionCalendarProps) => {
  // Generate mock contribution data for 52 weeks * 7 days
  const generateMockContributions = () => {
    const days: number[] = [];

    for (let week = 0; week < 52; week++) {
      const weekIntensity = activityData[week] || 0;

      for (let day = 0; day < 7; day++) {
        const rand = Math.random();
        let intensity = 0;

        if (weekIntensity === 0) {
          intensity = 0;
        } else if (rand > 0.7) {
          intensity = Math.min(
            5,
            Math.ceil(weekIntensity / 5) + Math.floor(rand * 3)
          );
        } else if (rand > 0.4) {
          intensity = Math.min(
            3,
            Math.ceil(weekIntensity / 10) + Math.floor(rand * 2)
          );
        } else if (rand > 0.2) {
          intensity = Math.min(
            2,
            Math.ceil(weekIntensity / 15) + (rand > 0.1 ? 1 : 0)
          );
        } else {
          intensity = Math.min(1, Math.ceil(weekIntensity / 20));
        }

        days.push(intensity);
      }
    }

    return days;
  };

  const contributions = generateMockContributions();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const currentMonth = new Date().getMonth();
  const monthLabels = months
    .slice(currentMonth + 1)
    .concat(months.slice(0, currentMonth + 1));

  const weekdays = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <Card className=" shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle>Contribution Calendar</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6 overflow-auto">
        <div className="flex text-xs text-muted-foreground mb-2 ml-10">
          {monthLabels.map((month, index) => (
            <div key={index} className="flex-1 text-center min-w-[14px]">
              {month}
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="flex flex-col pr-2 text-xs text-muted-foreground">
            {weekdays.map((day, index) => (
              <div key={index} className="h-3.5 flex items-center">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
            {contributions.map((intensity, index) => (
              <div
                key={index}
                className={`github-contribution github-contribution-${intensity}`}
                title={`${intensity} contributions`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center mt-4 justify-end gap-1 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                className={`github-contribution github-contribution-${level}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionCalendar;
