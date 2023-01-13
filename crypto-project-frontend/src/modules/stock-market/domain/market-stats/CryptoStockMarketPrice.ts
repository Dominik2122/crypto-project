import BaseAssetsSymbols from '@/modules/stock-market/domain/QuoteAssetsSymbols';

export default class CryptoStockMarketPrice {
  constructor(public readonly value: number, public readonly currency: BaseAssetsSymbols) {}
}
