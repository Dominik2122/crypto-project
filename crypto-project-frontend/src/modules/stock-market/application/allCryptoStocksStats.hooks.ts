import { useEffect } from 'react';
import { LoadAllCryptoStocksStats } from '@/modules/stock-market/application/command/loadAllCryptoStocksStats';
import { GetAllCryptoStockMarketsQuery } from '@/modules/stock-market/application/query/getAllCryptoStockMarketsQuery';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import useGetAllStockMarketsDtoPort from '@/modules/stock-market/insfrastructure/websocket/useGetAllStockMarketsDtoPort';
import allCryptoStockData from '@/modules/stock-market/insfrastructure/state/allCryptoStockData';
import { LoadSpecificCryptoStocks } from '@/modules/stock-market/application/command/loadSpecificCryptoStocks';
import useGetSpecificStockMarketsDtoPort from '@/modules/stock-market/insfrastructure/websocket/useGetSpecificStockMarketsDtoPort';
import BaseAssetsSymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export const useLoadAllCryptoStockMarketsCommand: LoadAllCryptoStocksStats = () => {
  const data = useGetAllStockMarketsDtoPort();
  const updateAll = allCryptoStockData((state) => state.updateAll);
  useEffect(() => {
    if (data) {
      updateAll(data);
    }
  }, [data]);
};

export const useLoadCryptoSpecificStockMarketsCommand: LoadSpecificCryptoStocks = (
  stocks: DefaultCryptoSymbols[],
  fiatSymbol?: BaseAssetsSymbols,
) => {
  const data = useGetSpecificStockMarketsDtoPort(stocks, fiatSymbol ?? BaseAssetsSymbols.USD);
  const updateOne = allCryptoStockData((state) => state.updateOne);
  useEffect(() => {
    if (data) {
      updateOne(data);
    }
  }, [data]);
};

export const useAllCryptoTickersQuery: GetAllCryptoStockMarketsQuery = () =>
  allCryptoStockData((state) => state.tickers);
