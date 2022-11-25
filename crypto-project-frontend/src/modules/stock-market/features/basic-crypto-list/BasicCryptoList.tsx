import * as React from 'react';
import { memo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  useAllCryptoTickersQuery,
  useLoadCryptoStockMarketsCommand,
} from '@/modules/stock-market/application/allCryptoStockMarktetsService';

const MainCryptoListItem = memo(
  ({ ticker, value, volume }: { ticker: string; value: number; volume: string }) => (
    <TableRow>
      <TableCell component="th" scope="row">
        {ticker}
      </TableCell>
      <TableCell align="right">{value}</TableCell>
      <TableCell align="right">{volume}</TableCell>
    </TableRow>
  ),
);

const BasicCryptoList = () => {
  useLoadCryptoStockMarketsCommand();
  const liveData = useAllCryptoTickersQuery();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Crypto prices</TableCell>
            <TableCell align="right">Value $</TableCell>
            <TableCell align="right">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liveData.map((row) => (
            <MainCryptoListItem
              key={row.name}
              value={row.currentPrice.value}
              ticker={row.tickerSymbol.symbol}
              volume={row.stats.priceChangePercent}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicCryptoList;
