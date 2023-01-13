import { useEffect } from 'react';
import { useQuoteAsset } from '@/modules/stock-market/application/contextQuoteAsset.hooks';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import { LoadAllCryptoStocksStats } from '@/modules/stock-market/application/command/loadAllCryptoStocksStats';
import { GetAllCryptoStockMarketsQuery } from '@/modules/stock-market/application/query/getAllCryptoStockMarketsQuery';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import useGetAllStockMarketsDtoPort from '@/modules/stock-market/insfrastructure/websocket/useGetAllStockMarketsDtoPort';
import allCryptoStockData from '@/modules/stock-market/insfrastructure/state/allCryptoStockData';
import { LoadSpecificCryptoStocks } from '@/modules/stock-market/application/command/loadSpecificCryptoStocks';
import useGetSpecificStockMarketsDtoPort from '@/modules/stock-market/insfrastructure/websocket/useGetSpecificStockMarketsDtoPort';

export const useLoadAllCryptoStockMarketsCommand: LoadAllCryptoStocksStats = () => {
  const quoteAsset = useQuoteAsset();
  const data = useGetAllStockMarketsDtoPort();
  const updateAll = allCryptoStockData((state) => state.updateAll);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (cryptoToUpdate) => cryptoToUpdate.tickerSymbol.quoteAsset === quoteAsset,
      );
      updateAll(filteredData);
    }
  }, [data]);
};

export const useLoadCryptoSpecificStockMarketsCommand: LoadSpecificCryptoStocks = (
  stocks: DefaultCryptoSymbols[],
) => {
  const quoteAsset = useQuoteAsset();
  const data = useGetSpecificStockMarketsDtoPort(stocks, quoteAsset);
  const updateOne = allCryptoStockData((state) => state.updateOne);
  useEffect(() => {
    if (data) {
      updateOne(data);
    }
  }, [data, quoteAsset]);
};

export const useAllCryptoTickersQuery: GetAllCryptoStockMarketsQuery = () =>
  allCryptoStockData((state) => state.tickers);
