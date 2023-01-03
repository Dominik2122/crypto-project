import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPageLayout from '@/pages/landing-page/layout/LandingPageLayout';
import MainPage from '@/pages/landing-page/children/MainPage';
import { AuthPageChildren, AuthPage } from '@/pages/landing-page/children/AuthPage';

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
    path: 'auth',
    element: <AuthPage />,
    children: AuthPageChildren,
  },
  {
    path: 'explore',
    element: <div>dsadad</div>,
  },
];
