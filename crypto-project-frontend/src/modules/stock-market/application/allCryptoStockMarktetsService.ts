import { useEffect } from 'react';
import { LoadAllCryptoStockMarketsCommand } from '@/modules/stock-market/application/command/loadAllCryptoStockMarketsCommand';
import { GetAllCryptoStockMarketsQuery } from '@/modules/stock-market/application/query/getAllCryptoStockMarketsQuery';
import Tickers from '@/modules/stock-market/domain/Tickers';
import useGetAllStockMarketsDtoPort from '@/modules/stock-market/insfrastructure/websocket/useGetAllStockMarketsDtoPort';
import useAllCryptoTickerState from '@/modules/stock-market/insfrastructure/storage/useAllCryptoTickerState';

export const useLoadCryptoStockMarketsCommand: LoadAllCryptoStockMarketsCommand = (
  stocks?: Tickers[],
) => {
  const data = useGetAllStockMarketsDtoPort([]);
  const updateOne = useAllCryptoTickerState((state) => state.updateOne);

  useEffect(() => {
    if (data) {
      updateOne(data);
    }
  }, [data]);
};

export const useAllCryptoTickersQuery: GetAllCryptoStockMarketsQuery = () =>
  useAllCryptoTickerState((state) => state.tickers);
