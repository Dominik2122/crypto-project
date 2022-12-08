import React from 'react';
import { Link } from 'react-router-dom';
import DesktopNavbarItemButton from '@/shared/components/layout/navbar/DesktopNavbarItemButton';

const DesktopNavbarItem = ({ title, route }: NavbarItemProps) => (
  <Link to={route} style={{ textDecoration: 'none' }}>
    <DesktopNavbarItemButton title={title} />
  </Link>
);

export interface NavbarItemProps {
  title: string;
  route: string;
}

export default DesktopNavbarItem;
