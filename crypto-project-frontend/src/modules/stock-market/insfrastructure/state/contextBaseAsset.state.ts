import create from 'zustand';
import { ContextBaseAssetStatePort } from '@/modules/stock-market/application/infrastructure/context-base-asset/contextBaseAsset.state.port';
import { AssetSymbol } from '@/modules/stock-market/domain';
import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';

export const useContextBaseAssetState = create<ContextBaseAssetStatePort>()((set) => ({
  baseAsset: undefined,
  updateBaseAsset(asset: AssetSymbol | undefined) {
    set(() => ({ baseAsset: asset }));
  },
  baseAssetStats: undefined,
  updateStats(asset: CryptoStockMarket | undefined) {
    set(() => ({ baseAssetStats: asset }));
  },
}));
