import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPageLayout from '@/pages/landing-page/Layout/LandingPageLayout';
import MainPage from '@/pages/landing-page/children/MainPage';

export const LandingPage = () => (
  <LandingPageLayout>
    <Outlet />
  </LandingPageLayout>
);
export const LandingPageRoutes = [
  {
    path: '',
    element: <MainPage />,
  },
  {
    path: 'explore',
    element: <div>dsadad</div>,
  },
];
