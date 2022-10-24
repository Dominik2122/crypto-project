import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from '@/shared/components/layout/navbar/Navbar';
import NavbarItem from '@/shared/components/layout/navbar/NavbarItem';

const LandingPageNavbar = () => {
  const navbarHeight = 64;
  const leftSection = (
    <Box
      component="img"
      src="https://companieslogo.com/img/orig/COIN-a63dbab3.png?t=1648737284"
      sx={{ maxHeight: navbarHeight - 10 }}
    />
  );

  const rightSection = <div>dasdad</div>;
  const centerSection = [
    <NavbarItem title="DDD" route="" />,
    <NavbarItem title="dsadas" route="" />,
    <NavbarItem title="sdadsa" route="" />,
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
