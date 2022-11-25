import TickerSymbol from 'modules/stock-market/domain/TickerSymbol';
import CryptoStockMarketPrice from 'modules/stock-market/domain/CryptoStockMarketPrice';

export interface OneCryptoStockMarketState {
  currentlySelectedStock: TickerSymbol;
  tickers: CryptoStockMarketPrice[];
}
