import { FormControl, FormHelperText, InputAdornment, InputLabel, TextField } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import { AssetSymbol } from '@/modules/stock-market/domain';
import CryptoStockMarketPrice from '@/modules/stock-market/domain/market-stats/CryptoStockMarketPrice';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import { useDesktopMediaQuery } from '@/shared/components/layout/media-query/Desktop';

export const PriceCalculator = ({
  baseAssetSymbol,
  quoteAssetSymbol,
  price,
}: {
  baseAssetSymbol: AssetSymbol;
  quoteAssetSymbol: QuoteAssetsSymbols;
  price?: CryptoStockMarketPrice;
}) => {
  const isDesktop = useDesktopMediaQuery();
  const [currentValue, setCurrentValue] = useState<number>(1);
  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (!Number.isNaN(Number(event.target.value))) {
      setCurrentValue(Number(event.target.value));
    }
  };
  return (
    <FormControl disabled={!price} fullWidth={!isDesktop}>
      <TextField
        label="Buy"
        value={currentValue}
        InputProps={{
          endAdornment: <InputAdornment position="end">{baseAssetSymbol.name}</InputAdornment>,
        }}
        id="my-input"
        aria-describedby="my-helper-text"
        onChange={onInputChange}
      />
      {price ? (
        <FormHelperText id="my-helper-text">
          {currentValue} {` ${baseAssetSymbol.name} `}= {currentValue * price.value}
          {` ${quoteAssetSymbol}`}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};
