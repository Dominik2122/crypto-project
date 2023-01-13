import create from 'zustand';
import { ContextBaseAssetStatePort } from '@/modules/stock-market/application/infrastructure/context-base-asset/contextBaseAsset.state.port';
import { AssetSymbol } from '@/modules/stock-market/domain';

export const useContextBaseAssetState = create<ContextBaseAssetStatePort>()((set) => ({
  baseAsset: undefined,
  updateBaseAsset(asset: AssetSymbol | undefined) {
    set(() => ({ baseAsset: asset }));
  },
}));
