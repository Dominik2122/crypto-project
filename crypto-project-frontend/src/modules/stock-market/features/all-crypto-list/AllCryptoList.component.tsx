import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Typography } from '@mui/material';
import {
  useAllCryptoTickersQuery,
  useLoadAllCryptoStockMarketsCommand,
} from '@/modules/stock-market/application/allCryptoStocksStats.hooks';
import BasicCryptoListItem from '@/modules/stock-market/features/basic-crypto-list/BasicCryptoListItem';
import { Desktop } from '@/shared/components/layout/media-query/Desktop';

const AllCryptoListComponent = () => {
  useLoadAllCryptoStockMarketsCommand();

  const cryptoStockMarkets = useAllCryptoTickersQuery();

  return cryptoStockMarkets.length ? (
    <Table size="medium" aria-label="a table">
      <colgroup>
        <col width="25%" />
        <col width="25%" />
        <Desktop>
          <col width="25%" />
        </Desktop>
        <col width="25%" />
      </colgroup>
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: 'text.secondary' }}>
            <Typography noWrap variant="body2" sx={{ color: 'text.secondary' }}>
              Name
            </Typography>
          </TableCell>
          <TableCell sx={{ color: 'text.secondary' }} align="right">
            Value
          </TableCell>
          <Desktop>
            <TableCell sx={{ color: 'text.secondary' }} align="right">
              Volume
            </TableCell>
          </Desktop>

          <TableCell align="right">
            <Typography noWrap variant="body2" sx={{ color: 'text.secondary' }}>
              % 24H
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cryptoStockMarkets.map((row) => (
          <BasicCryptoListItem
            key={row.tickerSymbol.symbol}
            value={row.currentPrice.value}
            currency={row.currentPrice.currency}
            percentageChange={row.stats.priceChangePercent}
            ticker={row.tickerSymbol.symbol}
            volume={row.stats.tradedAssetVolume}
          />
        ))}
      </TableBody>
    </Table>
  ) : (
    <CircularProgress />
  );
};

export default AllCryptoListComponent;
