import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '@/shared/components/layout/page-layuot/MainLayout';
import { CryptoMainListPage } from '@/pages/crypto/children/CryptoMainListPage';
import { CryptoDetailsPage } from '@/pages/crypto/children/CryptoDetailsPage';

export const CryptoPageChildren = [
  {
    path: ':baseAssetId',
    element: <CryptoDetailsPage />,
  },
  {
    path: '',
    element: <CryptoMainListPage />,
  },
];
export const CryptoPage = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);
