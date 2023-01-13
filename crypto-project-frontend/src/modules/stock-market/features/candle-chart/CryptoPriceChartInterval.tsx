import { Box, Button } from '@mui/material';
import { useMemo } from 'react';
import * as React from 'react';
import {
  useCurrentInterval,
  useSetCryptoCandlesInterval,
} from '@/modules/stock-market/application/allCryptoCandles.hooks';
import { CryptoMarketCandlesInterval } from '@/modules/stock-market/domain/candles/CryptoMarketCandlesInterval';

export const CryptoPriceChartInterval = () => {
  const intervals = [
    new CryptoMarketCandlesInterval(1, 'm'),
    new CryptoMarketCandlesInterval(30, 'm'),
    new CryptoMarketCandlesInterval(1, 'h'),
    new CryptoMarketCandlesInterval(8, 'h'),
    new CryptoMarketCandlesInterval(3, 'd'),
    new CryptoMarketCandlesInterval(1, 'w'),
    new CryptoMarketCandlesInterval(1, 'M'),
  ];
  const setCryptoCandlesInterval = useSetCryptoCandlesInterval();
  const currentInterval = useCurrentInterval();
  const onIntervalClick = (interval: CryptoMarketCandlesInterval) => {
    setCryptoCandlesInterval(interval);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {intervals.map((interval) => (
        <Button
          variant={interval.isSame(currentInterval) ? 'contained' : 'text'}
          key={interval.value + interval.timePeriod}
          onClick={() => onIntervalClick(interval)}
        >
          {interval.value + interval.timePeriod}
        </Button>
      ))}
    </Box>
  );
};
