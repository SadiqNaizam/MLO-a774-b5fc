import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface PieChartDataPoint {
  name: string;
  value: number;
  percentage: number;
  amount: number;
  color: string; // Hex color string for Recharts cells e.g. '#FF0000'
}

const pieChartData: PieChartDataPoint[] = [
  { name: 'Clutch', value: 50, percentage: 50, amount: 3000, color: '#F06548' }, // destructive
  { name: 'Behance', value: 40, percentage: 40, amount: 1000, color: '#FFBE4D' }, // accentYellow
  { name: 'Instagram', value: 10, percentage: 10, amount: 1000, color: '#0D9488' }, // teal-600
  { name: 'Dribbble', value: 10, percentage: 10, amount: 1000, color: '#84CC16' }, // lime-500 (light green)
];

const PieChartCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sources</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-sm">
              <CalendarDays size={16} className="mr-2" />
              Last 6 months
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem>Last 3 months</DropdownMenuItem>
            <DropdownMenuItem>Last 6 months</DropdownMenuItem>
            <DropdownMenuItem>Last 12 months</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-6">
        <div className="h-48 w-full md:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <RechartsTooltip
                formatter={(value: number, name: string, props) => [`${props.payload.percentage}%`, name]}
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                itemStyle={{ color: 'hsl(var(--card-foreground))' }}
              />
              <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={2} stroke="hsl(var(--card))" strokeWidth={2}>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          {pieChartData.map((entry) => (
            <div key={entry.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span style={{ backgroundColor: entry.color }} className="mr-2 h-3 w-3 rounded-sm"></span>
                <span>{entry.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-muted-foreground">$ {entry.amount.toLocaleString()}</span>
                <span className="w-8 text-right">{entry.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
         <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                        from leads total
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Percentages are calculated from the total leads.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default PieChartCard;
