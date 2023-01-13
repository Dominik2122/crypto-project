import { Typography } from '@mui/material';
import * as React from 'react';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import { getAssetSymbol } from '@/shared/components/ui/symbols/GetAssetSymbolOrEmpty';

const PriceDisplay = ({
  currency,
  valueToDisplay,
}: {
  currency: QuoteAssetsSymbols;
  valueToDisplay: string;
}) => (
  <Typography noWrap variant="body2">
    {getAssetSymbol(currency)}
    {valueToDisplay}
  </Typography>
);
export default PriceDisplay;
