import React from 'react';
import { Box, Container } from '@mui/material';
import BasicCryptoList from '@/modules/stock-market/features/basic-crypto-list/BasicCryptoList';

const MainPage = () => (
  <Container
    maxWidth="lg"
    sx={{
      marginTop: 2,
    }}
  >
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <BasicCryptoList />
    </Box>
  </Container>
);
export default MainPage;
