import { ReactNode } from 'react';

export interface NavbarItem {
  content: ReactNode;
  key: string;
  navbarChildren: NavbarItem[];
}
