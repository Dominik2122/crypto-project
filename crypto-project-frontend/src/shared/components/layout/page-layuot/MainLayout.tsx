import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import { useDesktopMediaQuery } from '@/shared/components/layout/media-query/Desktop';
import { MainLayoutBreadCrumbs } from '@/shared/components/layout/breadcrumbs/MainLayoutBreadCrumbs';
import LandingPageNavbar from '@/shared/components/layout/navbar/MainNavbar';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const isDesktop = useDesktopMediaQuery();
  return (
    <>
      <LandingPageNavbar />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          marginTop: isDesktop ? 2 : 10,
        }}
      >
        <MainLayoutBreadCrumbs />
        {children}
      </Container>
      <footer />
    </>
  );
};

export default MainLayout;
