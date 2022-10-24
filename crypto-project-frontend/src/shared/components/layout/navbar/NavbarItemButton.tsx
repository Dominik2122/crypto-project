import React from 'react';
import { Button } from '@mui/material';

const NavbarItemButton = ({ title }: NavbarItemButtonProps) => {
  const navbarHeight = 64;
  return (
    <Button
      sx={{
        height: navbarHeight,
        justifyItems: 'center',
        borderBottom: 4,
        borderColor: 'common.white',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      {title}
    </Button>
  );
};

export interface NavbarItemButtonProps {
  title: string;
}

export default NavbarItemButton;
