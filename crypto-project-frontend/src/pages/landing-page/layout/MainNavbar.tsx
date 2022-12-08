import React, { useMemo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DesktopNavbar from '@/shared/components/layout/navbar/DesktopNavbar';
import { NavbarItem } from '@/shared/components/layout/navbar/NavbarItem';
import MobileNavbar from '@/shared/components/layout/navbar/MobileNavbar';

const LandingPageNavbar = () => {
  const navbarHeight = 64;
  const leftSection: NavbarItem = useMemo(
    () => ({
      key: 'leftSection',
      content: (
        <Box
          component="img"
          src="https://companieslogo.com/img/orig/COIN-a63dbab3.png?t=1648737284"
          sx={{ maxHeight: navbarHeight - 30, alignSelf: 'center' }}
        />
      ),
      navbarChildren: [],
    }),
    [],
  );

  const rightSection: NavbarItem = useMemo(
    () => ({
      key: 'rightSection',
      content: (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="text" sx={{ marginRight: 2 }}>
              Sign In
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Login</Button>
          </Link>
        </Box>
      ),
      navbarChildren: [],
    }),
    [],
  );

  const centerSection: NavbarItem[] = useMemo(
    () => [
      {
        key: 'explore',
        content: <Typography>Explore</Typography>,
        navbarChildren: [
          {
            key: 'explore-',
            content: <div className="">KRUOPIO</div>,
            navbarChildren: [],
          },
          {
            key: 'explore-z',
            content: <div className="">zypio</div>,
            navbarChildren: [],
          },
        ],
      },
      {
        key: 'learn',
        content: <Typography>Learn</Typography>,
        navbarChildren: [
          {
            key: 'learn-',
            content: <div className="">GUPIO PG</div>,
            navbarChildren: [],
          },
        ],
      },
    ],
    [],
  );

  const desktopItems: NavbarItem[] = useMemo(
    () => [leftSection, ...centerSection, rightSection],
    [],
  );

  const mobileContent: React.ReactNode = useMemo(
    () => (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        {leftSection.content}
        {rightSection.content}
      </Box>
    ),
    [],
  );

  return (
    <>
      <DesktopNavbar navbarItems={desktopItems} />
      <MobileNavbar key="mobile-navbar" navbarChildren={centerSection} content={mobileContent} />
    </>
  );
};
export default LandingPageNavbar;
