import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '@/shared/components/layout/page-layuot/MainLayout';
import MainPage from '@/pages/landing-page/children/MainPage';

export const LandingPage = () => (
  <MainLayout>
    <MainPage />
  </MainLayout>
);
