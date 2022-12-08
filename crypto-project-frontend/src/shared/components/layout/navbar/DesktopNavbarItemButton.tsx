import React from 'react';
import { Button } from '@mui/material';

const DesktopNavbarItemButton = ({ title }: NavbarItemButtonProps) => {
  const navbarHeight = 64;
  return (
    <Button
      variant="text"
      sx={{
        height: navbarHeight,
        typography: 'subtitle1',
        color: 'text.primary',
        justifyItems: 'center',
        borderBottom: 4,
        borderColor: 'transparent',
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

export default DesktopNavbarItemButton;
