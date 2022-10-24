import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

const Navbar = ({ leftContent, rightContent, centerContent }: NavbarProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>{leftContent}</Box>
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', height: '100%' }}>
      {centerContent.map((content, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={idx} sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          {content}
        </Box>
      ))}
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>{rightContent}</Box>
  </Box>
);

export interface NavbarProps {
  leftContent: ReactNode;
  centerContent: ReactNode[];
  rightContent: ReactNode;
}

export default Navbar;
