import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string; // Tailwind background color class e.g. 'bg-red-500'
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-destructive' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-accentYellow' },
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-blue-700' },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-accentGreen' },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const FunnelCard: React.FC = () => {
  const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold">600</span>
          <span className="ml-2 text-muted-foreground">active leads</span>
        </div>
        <div className="mb-6 flex h-3 w-full rounded-full overflow-hidden">
          {funnelData.map((stage) => (
            <TooltipProvider key={stage.id} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn("h-full", stage.color)}
                    style={{ width: `${(stage.count / totalCount) * 100}%` }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{stage.name}: {stage.count}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <ul className="space-y-3">
          {funnelData.map((stage) => (
            <li key={stage.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className={cn("mr-2 h-3 w-3 rounded-sm", stage.color)}></span>
                <span>{stage.name}</span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="w-10 text-right">{stage.count}</span>
                <span className="w-16 text-right text-muted-foreground">$ {stage.value}</span>
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="w-16 text-right text-muted-foreground cursor-help">{stage.duration}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Average time on this stage</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelCard;
