import * as React from 'react';
import { memo, useMemo } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import BaseAssetsSymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import getNumberWithSignificantDigits from '@/shared/components/ui/text-display/getNumberWithSignificantDigits';
import PriceDisplay from '@/shared/components/ui/text-display/PriceDisplay';
import PercentageChange from '@/shared/components/ui/text-display/PercentageChange';
import { Desktop } from '@/shared/components/layout/media-query/Desktop';

const AllCryptoListItemComponent = memo(
  ({
    ticker,
    value,
    volume,
    currency,
    percentageChange,
  }: {
    ticker: string;
    value: number;
    volume: number;
    percentageChange: number;
    currency: BaseAssetsSymbols;
  }) => {
    const valueToDisplay = useMemo(() => getNumberWithSignificantDigits(value, 5), [value]);
    const volumeToDisplay = useMemo(() => getNumberWithSignificantDigits(volume, 4), [volume]);
    const percentageChangeToDisplay = useMemo(
      () => Number(getNumberWithSignificantDigits(percentageChange, 3)),
      [percentageChange],
    );
    return (
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold' }}>{ticker}</TableCell>
        <TableCell align="right">
          <PriceDisplay currency={currency} valueToDisplay={valueToDisplay} />
        </TableCell>
        <Desktop>
          <TableCell align="right">{volumeToDisplay}</TableCell>
        </Desktop>

        <PercentageChange change={percentageChangeToDisplay} />
      </TableRow>
    );
  },
);

export default AllCryptoListItemComponent;
