import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '@/shared/components/layout/navbar/Navbar';
import NavbarItemWithChildren from '@/shared/components/layout/navbar/NavbarItemWithChildren';

const LandingPageNavbar = () => {
  const navbarHeight = 64;
  const leftSection = (
    <Box
      component="img"
      src="https://companieslogo.com/img/orig/COIN-a63dbab3.png?t=1648737284"
      sx={{ maxHeight: navbarHeight - 10, alignSelf: 'center' }}
    />
  );
  const rightSection = (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <Button variant="text" sx={{ marginRight: 2 }}>
          Sign In
        </Button>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button variant="contained">Login</Button>
      </Link>
    </Box>
  );
  const centerSection = [
    <NavbarItemWithChildren key="1" title="Explore">
      <div className="" />
    </NavbarItemWithChildren>,
    <NavbarItemWithChildren key="2" title="Learn">
      <div className="">ABCDEF</div>
    </NavbarItemWithChildren>,
  ];

  return (
    <Navbar leftContent={leftSection} centerContent={centerSection} rightContent={rightSection} />
  );
};
export default LandingPageNavbar;
