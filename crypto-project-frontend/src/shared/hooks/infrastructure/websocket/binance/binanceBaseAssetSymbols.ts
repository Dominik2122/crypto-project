import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';

const binanceBaseAssetSymbols: Record<QuoteAssetsSymbols, string> = {
  [QuoteAssetsSymbols.USD]: 'USDT',
  [QuoteAssetsSymbols.EUR]: 'EUR',
  [QuoteAssetsSymbols.PLN]: 'PLN',
  [QuoteAssetsSymbols.AUD]: 'AUD',
  [QuoteAssetsSymbols.GBP]: 'GBP',
  [QuoteAssetsSymbols.BTC]: 'BTC',
  [QuoteAssetsSymbols.ETH]: 'ETH',
  [QuoteAssetsSymbols.BUSD]: 'BUSD',
  [QuoteAssetsSymbols.BNB]: 'BNB',
  [QuoteAssetsSymbols.DAI]: 'DAI',
  [QuoteAssetsSymbols.XRP]: 'XRP',
};

export default binanceBaseAssetSymbols;
