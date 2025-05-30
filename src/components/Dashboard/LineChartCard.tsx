import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface LineChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const lineChartData: LineChartDataPoint[] = [
  { month: 'March', closedWon: 65, closedLost: 90 },
  { month: 'April', closedWon: 59, closedLost: 40 },
  { month: 'May', closedWon: 80, closedLost: 45 },
  { month: 'June', closedWon: 62, closedLost: 5 },
  { month: 'July', closedWon: 75, closedLost: 40 },
  { month: 'August', closedWon: 95, closedLost: 30 },
];

const LineChartCard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'leadsCame' | 'leadsConverted' | 'totalDealsSize'>('leadsConverted');
  // In a real app, data would change based on activeTab

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="mb-1">Leads tracking</CardTitle>
            <div className="flex items-baseline space-x-4">
              <p><span className="text-2xl font-bold">680</span> <span className="text-sm text-muted-foreground">total closed</span></p>
              <p><span className="text-2xl font-bold">70</span> <span className="text-sm text-muted-foreground">total lost</span></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full sm:w-auto">
              <TabsList className="grid w-full grid-cols-3 sm:w-auto">
                <TabsTrigger value="leadsCame" className="text-xs px-2 sm:px-3">Leads came</TabsTrigger>
                <TabsTrigger value="leadsConverted" className="text-xs px-2 sm:px-3">Leads Converted</TabsTrigger>
                <TabsTrigger value="totalDealsSize" className="text-xs px-2 sm:px-3">Total deals size</TabsTrigger>
              </TabsList>
            </Tabs>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-sm w-full sm:w-auto">
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
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineChartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} domain={[0, 'dataMax + 10']}/>
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                itemStyle={{ color: 'hsl(var(--card-foreground))' }}
              />
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F06548" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F06548" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="closedWon" stroke="#14B8A6" strokeWidth={2} fillOpacity={1} fill="url(#colorClosedWon)" dot={{ r: 4, fill: '#14B8A6', strokeWidth:2, stroke:'hsl(var(--card))' }} activeDot={{ r: 6 }} name="Closed Won" />
              <Area type="monotone" dataKey="closedLost" stroke="#F06548" strokeWidth={2} fillOpacity={1} fill="url(#colorClosedLost)" dot={{ r: 4, fill: '#F06548', strokeWidth:2, stroke:'hsl(var(--card))' }} activeDot={{ r: 6 }} name="Closed Lost" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-6">
          <div className="flex items-center text-sm">
            <span className="mr-2 h-3 w-3 rounded-sm bg-teal-500"></span>
            <span>Closed won</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="mr-2 h-3 w-3 rounded-sm bg-destructive"></span>
            <span>Closed lost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
