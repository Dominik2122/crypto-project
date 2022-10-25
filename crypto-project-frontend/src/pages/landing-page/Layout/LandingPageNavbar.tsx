import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from '@/shared/components/layout/navbar/Navbar';
import NavbarItem from '@/shared/components/layout/navbar/NavbarItem';
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

  const rightSection = <div>dasdad</div>;
  const centerSection = [
    <NavbarItemWithChildren key="1" title="Explore">
      <div className="" />
    </NavbarItemWithChildren>,
    <NavbarItemWithChildren key="2" title="Learn">
      <div className="">ABCDEF</div>
    </NavbarItemWithChildren>,
    <NavbarItem key="3" title="DDD" route="" />,
    <NavbarItem key="4" title="dsadas" route="" />,
    <NavbarItem key="5" title="sdadsa" route="" />,
  ];

  return (
    <Box
      sx={{
        height: navbarHeight,
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
        <Navbar
          leftContent={leftSection}
          centerContent={centerSection}
          rightContent={rightSection}
        />
      </Container>
    </Box>
  );
};
export default LandingPageNavbar;
