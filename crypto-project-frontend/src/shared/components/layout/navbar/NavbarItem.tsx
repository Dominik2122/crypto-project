import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItemButton from '@/shared/components/layout/navbar/NavbarItemButton';

const NavbarItem = ({ title, route }: NavbarItemProps) => (
  <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
    <NavbarItemButton title={title} />
  </Link>
);

export interface NavbarItemProps {
  title: string;
  route: string;
}

export default NavbarItem;
