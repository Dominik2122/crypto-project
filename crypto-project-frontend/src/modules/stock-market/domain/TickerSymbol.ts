import { AssetSymbol } from '@/modules/stock-market/domain/AssetSymbol';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';

export default class TickerSymbol {
  public readonly baseAsset: AssetSymbol;

  public readonly quoteAsset: QuoteAssetsSymbols;

  constructor(public readonly symbol: string) {
    this.baseAsset = new AssetSymbol(symbol.split('/')[0]);
    this.quoteAsset = symbol.split('/')[1] as unknown as QuoteAssetsSymbols;
  }
}
