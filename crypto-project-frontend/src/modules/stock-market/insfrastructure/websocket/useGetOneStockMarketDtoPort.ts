import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import binanceBaseAssetSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceBaseAssetSymbols';
import { getOneMarketTickerStream } from '@/shared/hooks/infrastructure/websocket/binance/BinanceStreamNames';
import {
  BinanceSymbolTicker,
  binanceSymbolTickerConverter,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import useBinanceWebsocket from '@/shared/hooks/infrastructure/websocket/binance/useBinanceWebsocket';

export const useGetOneStockMarketDtoPort = (
  baseAssetSymbol: string,
  quoteAssetSymbol: QuoteAssetsSymbols,
) => {
  const params = {
    params: [getOneMarketTickerStream(baseAssetSymbol, binanceBaseAssetSymbols[quoteAssetSymbol])],
  };
  return useBinanceWebsocket<BinanceSymbolTicker, CryptoStockMarket>({ id: 1, ...params }, (data) =>
    binanceSymbolTickerConverter(data),
  );
};
