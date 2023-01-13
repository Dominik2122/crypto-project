import * as React from 'react';
import { memo, useMemo } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import getNumberWithSignificantDigits from '@/shared/components/ui/text-display/getNumberWithSignificantDigits';
import PriceDisplay from '@/shared/components/ui/text-display/PriceDisplay';
import PercentageChange from '@/shared/components/ui/text-display/PercentageChange';
import { Desktop } from '@/shared/components/layout/media-query/Desktop';

const BasicCryptoListItem = memo(
  ({
    assetName,
    value,
    baseAssetSymbol,
    volume,
    quoteAssetName,
    percentageChange,
  }: {
    assetName: string;
    baseAssetSymbol: string;
    value: number;
    volume: number;
    percentageChange: number;
    quoteAssetName: QuoteAssetsSymbols;
  }) => {
    const valueToDisplay = useMemo(() => getNumberWithSignificantDigits(value, 5), [value]);
    const volumeToDisplay = useMemo(() => getNumberWithSignificantDigits(volume, 4), [volume]);
    const percentageChangeToDisplay = useMemo(
      () => Number(getNumberWithSignificantDigits(percentageChange, 3)),
      [percentageChange],
    );
    return (
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold' }}>{assetName}</TableCell>
        <TableCell padding="none" align="right">
          <PriceDisplay currency={quoteAssetName} valueToDisplay={valueToDisplay} />
        </TableCell>
        <Desktop>
          <TableCell align="right">{volumeToDisplay}</TableCell>
        </Desktop>

        <PercentageChange change={percentageChangeToDisplay} />
        <TableCell padding="none" sx={{ fontWeight: 'bold' }}>
          <Link to={`crypto/${baseAssetSymbol}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained">Trade</Button>
          </Link>
        </TableCell>
      </TableRow>
    );
  },
);

export default BasicCryptoListItem;
