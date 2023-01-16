export const allMarketTickersStream = '!ticker@arr';
export const getOneMarketTickerStream = (tickerName: string, quoteAssetSymbol: string) =>
  `${(tickerName + quoteAssetSymbol).toLowerCase()}@ticker`;
