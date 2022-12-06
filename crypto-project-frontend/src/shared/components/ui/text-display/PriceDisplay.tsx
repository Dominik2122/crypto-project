import * as React from 'react';
import { Typography } from '@mui/material';
import UIBaseAssetsSymbols from '@/shared/components/data/symbols/UIBaseAssetsSymbols';
import BaseAssetsSymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

const PriceDisplay = ({
  currency,
  valueToDisplay,
}: {
  currency: BaseAssetsSymbols;
  valueToDisplay: string;
}) => (
  <Typography noWrap variant="body2">
    {`${UIBaseAssetsSymbols[currency]} `}
    {valueToDisplay}
  </Typography>
);
export default PriceDisplay;
