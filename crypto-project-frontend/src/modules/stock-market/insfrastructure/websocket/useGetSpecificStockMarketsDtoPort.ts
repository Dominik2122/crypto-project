import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import useBinanceWebsocket from '@/shared/hooks/infrastructure/websocket/binance/useBinanceWebsocket';
import {
  BinanceSymbolTicker,
  binanceSymbolTickerConverter,
  convertTickerNamesToBinanceParams,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import { GetSpecificCryptoStocksStatsDtoPort } from '@/modules/stock-market/application/infrastructure/market-stats/getSpecificCryptoStocksStats.dto.port';

const useGetSpecificStockMarketsDtoPort: GetSpecificCryptoStocksStatsDtoPort = (
  tickers: DefaultCryptoSymbols[],
  currency: CurrencySymbols = CurrencySymbols.USD,
) => {
  const params = { params: convertTickerNamesToBinanceParams(tickers, currency) };
  return useBinanceWebsocket<BinanceSymbolTicker, CryptoStockMarket>({ id: 1, ...params }, (data) =>
    binanceSymbolTickerConverter(data),
  );
};

export default useGetSpecificStockMarketsDtoPort;
