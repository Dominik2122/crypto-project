import CryptoStockMarketPrice from '@/modules/stock-market/domain/market-stats/CryptoStockMarketPrice';
import CryptoStockMarketStats from '@/modules/stock-market/domain/market-stats/CryptoStockMarketStats';
import TickerSymbol from '@/modules/stock-market/domain/TickerSymbol';

export default class CryptoStockMarket {
  constructor(
    public readonly name: string,
    public readonly tickerSymbol: TickerSymbol,
    public readonly currentPrice: CryptoStockMarketPrice,
    public readonly stats: CryptoStockMarketStats,
  ) {}
}
