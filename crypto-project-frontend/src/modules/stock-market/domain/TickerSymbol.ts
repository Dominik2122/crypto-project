import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';

export default class TickerSymbol {
  public readonly baseAsset: DefaultCryptoSymbols;

  public readonly quoteAsset: CurrencySymbols;

  constructor(public readonly symbol: string) {
    this.baseAsset = symbol.split('/')[0] as unknown as DefaultCryptoSymbols;
    this.quoteAsset = symbol.split('/')[1] as unknown as CurrencySymbols;
  }
}
