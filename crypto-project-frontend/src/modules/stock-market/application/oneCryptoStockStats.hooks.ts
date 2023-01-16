import { useEffect } from 'react';
import { useQuoteAsset } from '@/modules/stock-market/application/contextQuoteAsset.hooks';
import { AssetSymbol } from '@/modules/stock-market/domain';
import CryptoStockMarketPrice from '@/modules/stock-market/domain/market-stats/CryptoStockMarketPrice';
import { useContextBaseAssetState } from '@/modules/stock-market/insfrastructure/state/contextBaseAsset.state';
import { useGetOneStockMarketDtoPort } from '@/modules/stock-market/insfrastructure/websocket/useGetOneStockMarketDtoPort';

export const useLoadCryptoStockStats = (stock: AssetSymbol) => {
  const quoteAsset = useQuoteAsset();
  const data = useGetOneStockMarketDtoPort(stock.name, quoteAsset);
  const update = useContextBaseAssetState((state) => state.updateStats);
  useEffect(() => {
    if (data) {
      update(data);
    }
  }, [data, quoteAsset]);
};

export const useContextCryptoStats = () =>
  useContextBaseAssetState((state) => state.baseAssetStats);
export const useAllCryptoTickersQuery: () => CryptoStockMarketPrice | undefined = () =>
  useContextBaseAssetState((state) => state.baseAssetStats?.currentPrice);
