import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import LandingPageNavbar from '@/pages/landing-page/Layout/MainNavbar';

const LandingPageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <LandingPageNavbar />
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        marginTop: 2,
        minHeight: 10000,
      }}
    >
      {children}
    </Container>
    <footer>Footer</footer>
  </>
);

export default LandingPageLayout;
