import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import {
  useQuoteAsset,
  useSetQuoteAsset,
} from '@/modules/stock-market/application/contextQuoteAsset.hooks';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import { getAssetSymbolOrEmpty } from '@/shared/components/ui/symbols/GetAssetSymbolOrEmpty';

export const CryptoDetailsCurrencySelect = () => {
  const setQuoteAsset = useSetQuoteAsset();
  const quoteAsset = useQuoteAsset();

  const currencies: string[] = Object.keys(QuoteAssetsSymbols);
  const onValueSelect = (asset: SelectChangeEvent) => {
    setQuoteAsset(asset.target.value as QuoteAssetsSymbols);
  };
  return (
    <FormControl variant="filled" sx={{ width: 200 }}>
      <InputLabel id="currency-select-label">Quote asset</InputLabel>
      <Select
        labelId="currency-select-label"
        value={quoteAsset}
        label="Quote asset"
        onChange={onValueSelect}
      >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
            {getAssetSymbolOrEmpty(currency) ? ` - ${getAssetSymbolOrEmpty(currency)}` : ''}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
