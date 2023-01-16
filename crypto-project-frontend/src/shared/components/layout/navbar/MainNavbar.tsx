import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button, Fade, Popper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DesktopNavbar from '@/shared/components/layout/navbar/DesktopNavbar';
import { NavbarItem } from '@/shared/components/layout/navbar/NavbarItem';
import MobileNavbar from '@/shared/components/layout/navbar/MobileNavbar';
import useUser from '@/modules/authentication/application/useUser';
import MainNavbarAuthUser from '@/shared/components/layout/navbar/MainNavbarAuthUser';

const LandingPageNavbar = () => {
  const { isUser, user } = useUser();
  const navbarHeight = 64;
  const leftSection: NavbarItem = useMemo(
    () => ({
      key: 'leftSection',
      content: (
        <Link to="/">
          <Box
            component="img"
            src="https://companieslogo.com/img/orig/COIN-a63dbab3.png?t=1648737284"
            sx={{ maxHeight: navbarHeight - 30, alignSelf: 'center' }}
          />
        </Link>
      ),
      navbarChildren: [],
    }),
    [],
  );

  const unauthRightSection: NavbarItem = useMemo(
    () => ({
      key: 'rightSection',
      content: (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
          <Link to="/auth/signup" style={{ textDecoration: 'none' }}>
            <Button variant="text" sx={{ marginRight: 2 }}>
              Sign In
            </Button>
          </Link>
          <Link to="/auth/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Login</Button>
          </Link>
        </Box>
      ),
      navbarChildren: [],
    }),
    [],
  );

  const authRightSection: NavbarItem = useMemo(
    () => ({
      key: 'rightSection',
      content: user ? <MainNavbarAuthUser user={user} /> : null,
      navbarChildren: [],
    }),
    [user],
  );

  const centerSection: NavbarItem[] = useMemo(
    () => [
      {
        key: 'explore',
        content: <Typography>Explore</Typography>,
        navbarChildren: [],
      },
      {
        key: 'learn',
        content: <Typography>Learn</Typography>,
        navbarChildren: [
          {
            key: 'learn-',
            content: <div className="" />,
            navbarChildren: [],
          },
        ],
      },
    ],
    [],
  );

  const rightSection = useMemo(() => (isUser ? authRightSection : unauthRightSection), [user]);

  const desktopItems: NavbarItem[] = useMemo(
    () => [leftSection, ...centerSection, rightSection],
    [leftSection, centerSection, rightSection],
  );

  const mobileContent: React.ReactNode = useMemo(
    () => (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        {leftSection.content}
        {rightSection.content}
      </Box>
    ),
    [leftSection, rightSection],
  );

  return (
    <>
      <DesktopNavbar navbarItems={desktopItems} />
      <MobileNavbar key="mobile-navbar" navbarChildren={centerSection} content={mobileContent} />
    </>
  );
};
export default LandingPageNavbar;
