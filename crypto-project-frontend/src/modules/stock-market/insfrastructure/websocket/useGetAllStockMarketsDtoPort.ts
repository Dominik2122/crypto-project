import useBinanceWebsocket from '@/shared/hooks/infrastructure/websocket/binance/useBinanceWebsocket';
import {
  BinanceSymbolTicker,
  binanceSymbolTickerConverter,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import { allMarketTickersStream } from '@/shared/hooks/infrastructure/websocket/binance/BinanceStreamNames';
import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';
import { GetAllCryptoStocksStatsDtoPort } from '@/modules/stock-market/application/infrastructure/market-stats/getAllCryptoStocksStats.dto.port';

const useGetAllStockMarketsDtoPort: GetAllCryptoStocksStatsDtoPort = () => {
  const params = { params: [allMarketTickersStream] };
  return useBinanceWebsocket<BinanceSymbolTicker[], CryptoStockMarket[]>(
    { id: 1, ...params },
    (data) => data.map((ticker) => binanceSymbolTickerConverter(ticker)),
  );
};

export default useGetAllStockMarketsDtoPort;
