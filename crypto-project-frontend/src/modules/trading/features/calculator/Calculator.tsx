import * as React from 'react';
import { Button } from '@mui/material';
import { useQuoteAsset } from '@/modules/stock-market/application/contextQuoteAsset.hooks';
import {
  useAllCryptoTickersQuery,
  useLoadCryptoStockStats,
} from '@/modules/stock-market/application/oneCryptoStockStats.hooks';
import { AssetSymbol } from '@/modules/stock-market/domain';
import { PriceCalculator } from '@/modules/trading/ui/PriceCalculator';

export const Calculator = ({ ticker }: { ticker: AssetSymbol }) => {
  useLoadCryptoStockStats(ticker);
  const quoteAsset = useQuoteAsset();
  const currentPrice = useAllCryptoTickersQuery();
  return (
    <>
      <PriceCalculator
        baseAssetSymbol={ticker}
        price={currentPrice}
        quoteAssetSymbol={quoteAsset}
      />
      <Button sx={{ marginTop: 1 }} variant="contained" fullWidth>
        Buy {quoteAsset}
      </Button>
    </>
  );
};
