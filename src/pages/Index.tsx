import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelCard from '../components/Dashboard/FunnelCard';
import PieChartCard from '../components/Dashboard/PieChartCard';
import LineChartCard from '../components/Dashboard/LineChartCard';
import StatsSection from '../components/Dashboard/StatsSection';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const IndexPage: React.FC = () => {
  const pageTitle = "Dashboard";

  // Note: The dashboard components (FunnelCard, PieChartCard, etc.)
  // define their own data internally as per the project's context code.
  // This page component is responsible for arranging them within the MainAppLayout.

  return (
    <MainAppLayout pageTitle={pageTitle}>
      {/* Tabs for Sales/Leads selection, as seen in the provided image */}
      <div className="mb-6">
        <Tabs defaultValue="leads" className="w-auto">
          <TabsList>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          {/* 
            Currently, no TabsContent is used. The components below are rendered 
            regardless of the selected tab. If 'Sales' and 'Leads' tabs should display 
            different sets of components, TabsContent would be needed here to wrap them.
            Given the focus on "Dashboard Overview" (which is leads-centric), this setup shows the leads data.
          */}
        </Tabs>
      </div>

      {/* Main content grid for dashboard cards */}
      {/* Uses lg:grid-cols-2 for responsiveness: 2 columns on large screens, 1 column on smaller screens. */}
      {/* gap-6 for spacing between cards, as per Layout Requirements. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Row 1: FunnelCard and PieChartCard, each taking one column on large screens */}
        <FunnelCard />
        <PieChartCard />

        {/* Row 2: LineChartCard, spanning full width on large screens */}
        <div className="lg:col-span-2">
          <LineChartCard />
        </div>

        {/* Row 3: StatsSection, spanning full width on large screens */}
        {/* StatsSection itself might have an internal grid for its content. */}
        <div className="lg:col-span-2">
          <StatsSection />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
