import { cryptoSymbol } from 'crypto-symbol';
import CryptoStockMarketPrice from '@/modules/stock-market/domain/market-stats/CryptoStockMarketPrice';
import CryptoStockMarketStats from '@/modules/stock-market/domain/market-stats/CryptoStockMarketStats';
import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';
import TickerSymbol from '@/modules/stock-market/domain/TickerSymbol';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import BaseAssetsSymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import binanceCryptoSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceCryptoSymbols';
import binanceBaseAssetSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceBaseAssetSymbols';
import CryptoStockMarketCandle from '@/modules/stock-market/domain/candles/CryptoStockMarketCandle';

export interface BinanceSymbolTicker {
  e: string; // Kline open time
  E: number; // Event time
  s: string; // Symbol
  p: string; // Price change
  P: string; // Price change percent
  w: string; // Weighted average price
  x: string; // First trade(F)-1 price (first trade before the 24hr rolling window)
  c: string; // Last price
  Q: string; // Last quantity
  b: string; // Best bid price
  B: string; // Best bid quantity
  a: string; // Best ask price
  A: string; // Best ask quantity
  o: string; // Open price
  h: string; // High price
  l: string; // Low price
  v: string; // Total traded base asset volume
  q: string; // Total traded quote asset volume
  O: number; // Statistics open time
  C: number; // Statistics close time
  F: number; // First trade ID
  L: number; // Last trade Id
  n: number; // Total number of trades
}

export type BinanceCandle = [
  number, // Kline open time
  string, // Open price
  string, // High price
  string, // Low price
  string, // Close price
  string, // Volume
  number, // Kline Close time
  string, // Quote asset volume
  number, // Number of trades
  string, // Taker buy base asset volume
  string, // Taker buy quote asset volume
  string, // Unused field, ignore.
];

const currenciesNames = Object.entries(binanceBaseAssetSymbols);
const { nameLookup } = cryptoSymbol({});
const getAssetNameFromSymbol = (symbol: string) => {
  let name: string | undefined = symbol;
  let tickerSymbol: string = symbol;
  let currency: BaseAssetsSymbols | undefined;
  currenciesNames.forEach(([currencyKey, currencyValue]) => {
    if (symbol.endsWith(currencyValue)) {
      const splitAssets = tickerSymbol.split(currencyValue);
      name = nameLookup(splitAssets[0]);
      currency = currencyKey as unknown as BaseAssetsSymbols;
      tickerSymbol = `${splitAssets[0]}/${currency}`;
    }
  });

  return [name, currency, tickerSymbol] as const;
};

export const binanceSymbolTickerConverter = (data: BinanceSymbolTicker) => {
  const [cryptoName, currency, tickerSymbol] = getAssetNameFromSymbol(data.s);
  const price = new CryptoStockMarketPrice(Number(data.c), currency ?? BaseAssetsSymbols.NONE);
  const stats = new CryptoStockMarketStats(Number(data.v), data.n, Number(data.P));
  return new CryptoStockMarket(cryptoName ?? data.s, new TickerSymbol(tickerSymbol), price, stats);
};

export const binanceCandleConverter = (data: BinanceCandle) =>
  new CryptoStockMarketCandle(Number(data[1]), Number(data[4]), new Date(data[0]));

export const convertTickerNameToBinanceParams = (
  ticker: DefaultCryptoSymbols,
  currency: CurrencySymbols,
): string =>
  `${binanceCryptoSymbols[ticker]}${binanceBaseAssetSymbols[currency].toLowerCase()}@ticker`;

export const convertTickerNamesToBinanceParams = (
  tickers: DefaultCryptoSymbols[],
  currency: CurrencySymbols,
): string[] => {
  const binanceParams: string[] = [];
  tickers.forEach((ticker) =>
    binanceParams.push(convertTickerNameToBinanceParams(ticker, currency)),
  );
  return binanceParams;
};
