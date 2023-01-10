import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';

export default class TickerSymbol {
  public readonly baseAsset: CryptoSymbols;

  public readonly quoteAsset: CurrencySymbols;

  constructor(public readonly symbol: string) {
    this.baseAsset = symbol.split('/')[0] as unknown as CryptoSymbols;
    this.quoteAsset = symbol.split('/')[1] as unknown as CurrencySymbols;
  }
}
