import React, { ReactNode, useState } from 'react';
import { Box, Typography } from '@mui/material';

const NavbarItemWithChildren = ({ title, children }: NavbarItemProps) => {
  const [openedPopover, setOpenedPopover] = useState(false);

  const popoverEnter = () => {
    if (children) {
      setOpenedPopover(true);
    }
  };

  const popoverLeave = () => {
    if (children) {
      setOpenedPopover(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          minWidth: 120,
          cursor: children ? 'default' : 'pointer',
        }}
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        <Typography>{title}</Typography>
      </Box>

      {openedPopover && children && (
        <Box
          sx={{
            position: 'absolute',
            top: '64px',
            width: '100vh',
            zIndex: 3,
            left: 0,
            height: '200px',
            bgcolor: 'background.paper',
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export interface NavbarItemProps {
  title: string;
  children: ReactNode;
}

export default NavbarItemWithChildren;
