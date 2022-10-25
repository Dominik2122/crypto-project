import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

const Navbar = ({ leftContent, rightContent, centerContent }: NavbarProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>{leftContent}</Box>
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>{centerContent}</Box>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>{rightContent}</Box>
  </Box>
);

export interface NavbarProps {
  leftContent: ReactNode;
  centerContent: ReactNode[];
  rightContent: ReactNode;
}

export default Navbar;
