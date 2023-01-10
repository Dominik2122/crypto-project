import BaseAssetsSymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export default class CryptoStockMarketPrice {
  constructor(public readonly value: number, public readonly currency: BaseAssetsSymbols) {}
}
