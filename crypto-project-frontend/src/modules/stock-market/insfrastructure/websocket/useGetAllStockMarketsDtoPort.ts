import useBinanceWebsocket from '@/shared/hooks/infrastructure/websocket/binance/useBinanceWebsocket';
import {
  BinanceSymbolTicker,
  binanceSymbolTickerConverter,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import { allMarketTickersStream } from '@/shared/hooks/infrastructure/websocket/binance/BinanceStreamNames';
import CryptoStockMarket from '@/modules/stock-market/domain/CryptoStockMarket';
import { AllCryptoStockMarketDtoPort } from '@/modules/stock-market/application/infrastructure/allCryptoStockMarketDtoPort';

const useGetAllStockMarketsDtoPort: AllCryptoStockMarketDtoPort = () => {
  const params = { params: [allMarketTickersStream] };
  return useBinanceWebsocket<BinanceSymbolTicker[], CryptoStockMarket[]>(
    { id: 1, ...params },
    (data) => data.map((ticker) => binanceSymbolTickerConverter(ticker)),
  );
};

export default useGetAllStockMarketsDtoPort;
