import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Typography } from '@mui/material';
import {
  useAllCryptoTickersQuery,
  useLoadCryptoSpecificStockMarketsCommand,
} from '@/modules/stock-market/application/allCryptoStocksStats.hooks';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import BasicCryptoListItem from '@/modules/stock-market/features/basic-crypto-list/BasicCryptoListItem';
import { Desktop } from '@/shared/components/layout/media-query/Desktop';

const BasicCryptoList = () => {
  useLoadCryptoSpecificStockMarketsCommand([
    DefaultCryptoSymbols.BTC,
    DefaultCryptoSymbols.ETH,
    DefaultCryptoSymbols.SOL,
    DefaultCryptoSymbols.ADA,
    DefaultCryptoSymbols.DOGE,
  ]);

  const cryptoStockMarkets = useAllCryptoTickersQuery();

  return cryptoStockMarkets.length ? (
    <Table size="medium" aria-label="a table">
      <colgroup>
        <col width="20%" />
        <col width="20%" />
        <Desktop>
          <col width="20%" />
        </Desktop>
        <col width="20%" />
        <col width="20%" />
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
          <TableCell align="right" />
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

export default BasicCryptoList;
