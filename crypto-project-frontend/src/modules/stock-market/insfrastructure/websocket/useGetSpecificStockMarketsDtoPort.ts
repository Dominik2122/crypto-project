import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';
import useBinanceWebsocket from '@/shared/hooks/infrastructure/websocket/binance/useBinanceWebsocket';
import {
  BinanceSymbolTicker,
  binanceSymbolTickerConverter,
  convertTickerNamesToBinanceParams,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import CryptoStockMarket from '@/modules/stock-market/domain/CryptoStockMarket';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import { SpecificCryptoStockMarketDtoPort } from '@/modules/stock-market/application/infrastructure/specificCryptoStockMarketDtoPort';

const useGetSpecificStockMarketsDtoPort: SpecificCryptoStockMarketDtoPort = (
  tickers: CryptoSymbols[],
  currency: CurrencySymbols = CurrencySymbols.USD,
) => {
  const params = { params: convertTickerNamesToBinanceParams(tickers, currency) };
  return useBinanceWebsocket<BinanceSymbolTicker, CryptoStockMarket>({ id: 1, ...params }, (data) =>
    binanceSymbolTickerConverter(data),
  );
};

export default useGetSpecificStockMarketsDtoPort;
