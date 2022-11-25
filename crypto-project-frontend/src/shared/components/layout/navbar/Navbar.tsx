import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

const Navbar = ({ leftContent, rightContent, centerContent }: NavbarProps) => (
  <Box
    sx={{
      height: 64,
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 2,
      borderBottom: 1,
      bgcolor: 'background.paper',
      borderBottomColor: 'grey.300',
    }}
  >
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>{leftContent}</Box>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>{centerContent}</Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>{rightContent}</Box>
      </Box>
    </Container>
  </Box>
);

export interface NavbarProps {
  leftContent: ReactNode;
  centerContent: ReactNode[];
  rightContent: ReactNode;
}

export default Navbar;
