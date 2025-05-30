import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, pageTitle, className }) => {
  // Sidebar (via SidebarNav) is fixed, w-64 (16rem).
  // Header (via TopHeader) is fixed, h-16 (4rem). It uses `md:left-64` for responsive alignment with the sidebar.
  // On screens smaller than 'md', TopHeader will have `left-0`, potentially overlapping the always-visible SidebarNav.
  // This behavior is derived from the provided TopHeader.tsx context component.

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Sidebar />
      <Header pageTitle={pageTitle} />
      
      {/* This container div provides the necessary offsets for the fixed Sidebar and Header. */}
      {/* pl-64 (padding-left: 16rem) accounts for the Sidebar's width. */}
      {/* pt-16 (padding-top: 4rem) accounts for the Header's height. */}
      <div className="pl-64 pt-16">
        {/* The <main> element for the primary page content. */}
        {/* w-full: Takes the full width of its parent (the div with pl-64). */}
        {/* min-h-[calc(100vh-4rem)]: Ensures the content area fills at least the viewport height below the header. */}
        {/* p-6: Internal padding for the content, as per 'Layout Requirements.mainContent.layout'. */}
        {/* overflow-y-auto: Enables vertical scrolling if content exceeds available space. */}
        <main className="w-full min-h-[calc(100vh-4rem)] p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
