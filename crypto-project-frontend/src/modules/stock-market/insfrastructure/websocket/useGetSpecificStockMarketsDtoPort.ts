import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import useBinanceWebsocket from '@/shared/hooks/infrastructure/websocket/binance/useBinanceWebsocket';
import {
  BinanceSymbolTicker,
  binanceSymbolTickerConverter,
  convertTickerNamesToBinanceParams,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';
import { GetSpecificCryptoStocksStatsDtoPort } from '@/modules/stock-market/application/infrastructure/market-stats/getSpecificCryptoStocksStats.dto.port';

const useGetSpecificStockMarketsDtoPort: GetSpecificCryptoStocksStatsDtoPort = (
  tickers: DefaultCryptoSymbols[],
  currency: QuoteAssetsSymbols = QuoteAssetsSymbols.USD,
) => {
  const params = { params: convertTickerNamesToBinanceParams(tickers, currency) };
  return useBinanceWebsocket<BinanceSymbolTicker, CryptoStockMarket>({ id: 1, ...params }, (data) =>
    binanceSymbolTickerConverter(data),
  );
};

export default useGetSpecificStockMarketsDtoPort;
