import React from 'react';
import TopHeader from '../Dashboard/TopHeader';
// import { cn } from '@/lib/utils'; // cn is not used in this specific component

interface HeaderProps {
  pageTitle: string;
  className?: string; // Defined as per common practice, but not used in this simple wrapper
                      // as TopHeader from context controls its own styling and doesn't accept a className prop.
}

const Header: React.FC<HeaderProps> = ({ pageTitle /*, className */ }) => {
  // This component passes the pageTitle to TopHeader.
  // TopHeader is responsible for its own fixed positioning, styling, and content.
  // The className prop from HeaderProps is not applied here because TopHeader
  // as provided in context does not merge an external className prop.
  return <TopHeader pageTitle={pageTitle} />;
};

export default Header;
