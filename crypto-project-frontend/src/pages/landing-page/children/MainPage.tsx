import React from 'react';
import { Box } from '@mui/material';
import BasicCryptoList from '@/modules/stock-market/features/basic-crypto-list/BasicCryptoList';

const MainPage = () => (
  <Box sx={{ display: 'flex' }}>
    <BasicCryptoList />
  </Box>
);
export default MainPage;
