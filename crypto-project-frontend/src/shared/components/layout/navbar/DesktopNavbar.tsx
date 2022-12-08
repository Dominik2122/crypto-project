import React from 'react';
import { Box, Container } from '@mui/material';
import { NavbarItem } from '@/shared/components/layout/navbar/NavbarItem';
import DesktopNavbarItemWithChildren from '@/shared/components/layout/navbar/DesktopNavbarItemWithChildren';
import { Desktop } from '@/shared/components/layout/media-query/Desktop';

const DesktopNavbar = ({ navbarItems }: NavbarProps) => (
  <Desktop>
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
          {navbarItems.map((navbarItem) => (
            <Box
              key={navbarItem.key}
              sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}
            >
              {navbarItem.navbarChildren.length ? (
                <DesktopNavbarItemWithChildren item={navbarItem} />
              ) : (
                navbarItem.content
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  </Desktop>
);

export interface NavbarProps {
  navbarItems: NavbarItem[];
}

export default DesktopNavbar;
