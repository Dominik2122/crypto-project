import { useEffect } from 'react';
import { LoadAllCryptoStockMarketsCommand } from '@/modules/stock-market/application/command/loadAllCryptoStockMarketsCommand';
import { GetAllCryptoStockMarketsQuery } from '@/modules/stock-market/application/query/getAllCryptoStockMarketsQuery';
import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';
import useGetAllStockMarketsDtoPort from '@/modules/stock-market/insfrastructure/websocket/useGetAllStockMarketsDtoPort';
import allCryptoStockData from '@/modules/stock-market/insfrastructure/state/allCryptoStockData';
import { LoadSpecificCryptoStockMarketsCommand } from '@/modules/stock-market/application/command/loadSpecificCryptoStockMarketsCommand';
import useGetSpecificStockMarketsDtoPort from '@/modules/stock-market/insfrastructure/websocket/useGetSpecificStockMarketsDtoPort';
import BaseAssetsSymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export const useLoadAllCryptoStockMarketsCommand: LoadAllCryptoStockMarketsCommand = () => {
  const data = useGetAllStockMarketsDtoPort();
  const updateAll = allCryptoStockData((state) => state.updateAll);
  useEffect(() => {
    if (data) {
      updateAll(data);
    }
  }, [data]);
};

export const useLoadCryptoSpecificStockMarketsCommand: LoadSpecificCryptoStockMarketsCommand = (
  stocks: CryptoSymbols[],
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
