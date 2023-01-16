import * as path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useContextBaseAsset } from '@/modules/stock-market/application/contextBaseTicker';
import MainLayout from '@/shared/components/layout/page-layuot/MainLayout';
import { CryptoMainListPage } from '@/pages/crypto/children/CryptoMainListPage';
import { CryptoDetailsPage } from '@/pages/crypto/children/CryptoDetailsPage';

const CryptoDetailsCrumbComponent = () => {
  const { baseAsset } = useContextBaseAsset();
  return <>{baseAsset?.name}</>;
};
export const CryptoPageChildren = [
  {
    path: ':baseAssetId',
    element: <CryptoDetailsPage />,
    handle: {
      crumb: () => <CryptoDetailsCrumbComponent />,
    },
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
