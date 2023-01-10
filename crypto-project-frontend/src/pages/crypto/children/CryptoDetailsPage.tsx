import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import * as React from 'react';
import { useMemo } from 'react';
import TickerSymbol from '@/modules/stock-market/domain/TickerSymbol';
import { CryptoPriceChart } from '@/modules/stock-market/features/candle-chart/CryptoPriceChart';
import CryptoDetails from '@/modules/stock-market/features/crypto-details/CryptoDetails';

const CryptoDetailsPageInfo = ({ ticker }: { ticker: TickerSymbol }) => (
  <Box sx={{ marginTop: 8, maxWidth: '100%' }}>
    <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
      {ticker.symbol}
    </Typography>
    <CryptoPriceChart ticker={ticker} />
  </Box>
);

export const CryptoDetailsPage = () => {
  const { tickerId } = useParams();
  const ticker = useMemo(() => tickerId && new TickerSymbol(tickerId.replace('-', '/')), []);

  return ticker ? (
    <>
      <CryptoDetailsPageInfo ticker={ticker} />
      <CryptoDetails ticker={ticker} />
    </>
  ) : (
    <CircularProgress />
  );
};
