import { cryptoSymbol } from 'crypto-symbol';
import CryptoStockMarketPrice from '@/modules/stock-market/domain/CryptoStockMarketPrice';
import CryptoStockMarketStats from '@/modules/stock-market/domain/CryptoStockMarketStats';
import CryptoStockMarket from '@/modules/stock-market/domain/CryptoStockMarket';
import TickerSymbol from '@/modules/stock-market/domain/TickerSymbol';
import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import BaseAssetsSymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import binanceCryptoSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceCryptoSymbols';
import binanceBaseAssetSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceBaseAssetSymbols';

export interface BinanceSymbolTicker {
  e: string; // Event type
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
      tickerSymbol = `${splitAssets[0]}/${currencyValue}`;
    }
  });

  return [name, currency, tickerSymbol] as const;
};

export const binanceSymbolTickerConverter = (data: BinanceSymbolTicker) => {
  const [cryptoName, currency, tickerSymbol] = getAssetNameFromSymbol(data.s);
  const price = new CryptoStockMarketPrice(
    Number(data.c),
    currency ?? BaseAssetsSymbols.NONE,
    new Date(data.E),
  );
  const stats = new CryptoStockMarketStats(Number(data.v), data.n, Number(data.P));
  return new CryptoStockMarket(cryptoName ?? data.s, new TickerSymbol(tickerSymbol), price, stats);
};

export const convertTickerNamesToBinanceParams = (
  tickers: CryptoSymbols[],
  currency: CurrencySymbols,
): string[] => {
  const binanceParams: string[] = [];
  tickers.forEach((ticker) =>
    binanceParams.push(
      `${binanceCryptoSymbols[ticker]}${binanceBaseAssetSymbols[currency].toLowerCase()}@ticker`,
    ),
  );
  return binanceParams;
};
