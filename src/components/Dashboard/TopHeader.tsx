import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, ChevronDown } from 'lucide-react';

interface TopHeaderProps {
  pageTitle: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ pageTitle }) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-10 flex h-16 items-center justify-between border-b",
      "bg-card px-6",
      "md:left-64" // Apply left margin only on md screens and up, assuming sidebar is collapsible on mobile
    )}>
      <h1 className="text-xl font-semibold text-foreground">{pageTitle}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus size={18} className="mr-2" />
            Create
            <ChevronDown size={18} className="ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>New Lead</DropdownMenuItem>
          <DropdownMenuItem>New Contact</DropdownMenuItem>
          <DropdownMenuItem>New Task</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
