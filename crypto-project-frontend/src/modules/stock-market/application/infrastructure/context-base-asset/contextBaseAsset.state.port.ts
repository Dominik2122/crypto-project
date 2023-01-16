import { AssetSymbol } from '@/modules/stock-market/domain';
import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';

export interface ContextBaseAssetStatePort {
  baseAsset: AssetSymbol | undefined;
  baseAssetStats: CryptoStockMarket | undefined;

  updateBaseAsset(asset: AssetSymbol | undefined): void;
  updateStats(asset: CryptoStockMarket | undefined): void;
}
