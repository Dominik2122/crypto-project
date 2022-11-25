import Tickers from 'modules/stock-market/domain/Tickers';
import useBinanceWebsocket from '@/shared/hooks/infrastructure/websocket/binance/useBinanceWebsocket';
import { BinanceSymbolTicker } from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import { allMarketTickersStream } from '@/shared/hooks/infrastructure/websocket/binance/BinanceStreamNames';
import CryptoStockMarketPrice from '@/modules/stock-market/domain/CryptoStockMarketPrice';
import CryptoStockMarketStats from '@/modules/stock-market/domain/CryptoStockMarketStats';
import CryptoStockMarket from '@/modules/stock-market/domain/CryptoStockMarket';
import TickerSymbol from '@/modules/stock-market/domain/TickerSymbol';
import { AllCryptoStockMarketDtoPort } from '@/modules/stock-market/application/infrastructure/allCryptoStockMarketDtoPort';

const convertTickerNamesToBinanceParams = (tickers: Tickers[]): string[] => {
  const binanceParams: string[] = [];
  tickers.forEach((ticker) => binanceParams.push());
  return ['btcusdt@ticker'];
};

const binanceSymbolTickerConverter = (data: BinanceSymbolTicker) => {
  const price = new CryptoStockMarketPrice(Number(data.c), data.s, new Date(data.E));
  const stats = new CryptoStockMarketStats(data.v, String(data.C), data.P);
  return new CryptoStockMarket(data.s, new TickerSymbol(data.s), price, stats);
};

const useGetAllStockMarketsDtoPort: AllCryptoStockMarketDtoPort = (tickers?: Tickers[]) => {
  const params = tickers
    ? { params: convertTickerNamesToBinanceParams(tickers) }
    : { params: [allMarketTickersStream] };
  return useBinanceWebsocket<BinanceSymbolTicker, CryptoStockMarket>({ id: 1, ...params }, (data) =>
    binanceSymbolTickerConverter(data),
  );
};

export default useGetAllStockMarketsDtoPort;
