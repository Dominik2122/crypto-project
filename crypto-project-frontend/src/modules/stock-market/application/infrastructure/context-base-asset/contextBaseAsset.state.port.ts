import { AssetSymbol } from '@/modules/stock-market/domain';

export interface ContextBaseAssetStatePort {
  baseAsset: AssetSymbol | undefined;

  updateBaseAsset(asset: AssetSymbol | undefined): void;
}
