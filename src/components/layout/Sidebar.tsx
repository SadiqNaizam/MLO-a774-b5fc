import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';
// import { cn } from '@/lib/utils'; // cn is not used in this specific component

interface SidebarProps {
  className?: string; // Defined as per common practice, but not used in this simple wrapper
                      // as SidebarNav from context controls its own styling and doesn't accept a className prop.
}

const Sidebar: React.FC<SidebarProps> = ({ /* className */ }) => {
  // This component acts as a structural placeholder or wrapper for SidebarNav.
  // SidebarNav is responsible for its own fixed positioning, styling, and content.
  // The className prop from SidebarProps is not applied here because SidebarNav
  // as provided in context does not merge an external className prop.
  return <SidebarNav />;
};

export default Sidebar;
