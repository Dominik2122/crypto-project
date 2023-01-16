import { Box, CircularProgress, Typography } from '@mui/material';
import { cryptoSymbol } from 'crypto-symbol';
import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useContextBaseAsset } from '@/modules/stock-market/application/contextBaseTicker';
import { AssetSymbol } from '@/modules/stock-market/domain';
import { CryptoPriceChart } from '@/modules/stock-market/features/candle-chart/CryptoPriceChart';
import { CryptoPriceChartInterval } from '@/modules/stock-market/features/candle-chart/CryptoPriceChartInterval';
import CryptoDetails from '@/modules/stock-market/features/crypto-details/CryptoDetails';
import { CryptoDetailsCurrencySelect } from '@/modules/stock-market/features/quote-asset-selector/CryptoDetailsCurrencySelect';
import { Calculator } from '@/modules/trading/features/calculator/Calculator';
import { useDesktopMediaQuery } from '@/shared/components/layout/media-query/Desktop';

const CryptoDetailsPageInfo = ({ ticker }: { ticker: AssetSymbol }) => {
  const chartInterval = useMemo(() => <CryptoPriceChartInterval />, []);
  const chart = useMemo(() => <CryptoPriceChart />, []);
  const isDesktop = useDesktopMediaQuery();
  const { nameLookup } = cryptoSymbol({});

  return (
    <Box sx={{ marginTop: 1, maxWidth: '100%' }}>
      <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
        {nameLookup(ticker.name)}
      </Typography>
      <Box sx={{ marginY: isDesktop ? 2 : 4, display: isDesktop ? 'flex' : 'initial' }}>
        {chartInterval}
        <Box sx={{ marginY: 2 }}>
          <CryptoDetailsCurrencySelect />
        </Box>
      </Box>
      <Box sx={{ marginTop: 4 }}>{chart}</Box>
    </Box>
  );
};

export const CryptoDetailsPage = () => {
  const { baseAssetId } = useParams();
  const { updateBaseAsset } = useContextBaseAsset();
  const ticker = useMemo(() => baseAssetId && new AssetSymbol(baseAssetId), []);
  useEffect(() => {
    ticker && updateBaseAsset(ticker);
  }, []);
  return ticker ? (
    <>
      <CryptoDetailsPageInfo ticker={ticker} />
      <CryptoDetails />
      <Box sx={{ marginTop: 2 }}>
        <Calculator ticker={ticker} />
      </Box>
    </>
  ) : (
    <CircularProgress />
  );
};
