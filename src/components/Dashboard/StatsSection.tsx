import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonStat {
  id: string;
  percentage: number;
  description: string;
}

interface OtherDataStat {
  id: string;
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const reasonsData: ReasonStat[] = [
  { id: 'proposal', percentage: 40, description: 'The proposal is unclear' },
  { id: 'venture', percentage: 20, description: 'However venture pursuit' },
  { id: 'other', percentage: 10, description: 'Other' },
  { id: 'proposal2', percentage: 30, description: 'The proposal is unclear' }, // Duplicate description for variety as in image
];

const otherData: OtherDataStat[] = [
  { id: 'totalLeads', value: '900', label: 'total leads count' },
  { id: 'avgConvertTime', value: '12', label: 'days in average to convert lead' },
  { id: 'inactiveLeads', value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reasonsData.map((reason) => (
            <div key={reason.id}>
              <p className="text-3xl font-bold">{reason.percentage}%</p>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {otherData.map((stat) => (
            <div key={stat.id}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {stat.hasInfo && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info size={14} className="ml-1.5 cursor-help text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.infoText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsSection;
