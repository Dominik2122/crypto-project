import { getMarketHttpClient } from '@/shared/hooks/infrastructure/http/httpClient';
import {
  BinanceCandle,
  binanceCandleConverter,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import { GetAllCryptoCandles } from '@/modules/stock-market/application/infrastructure/candles/getAllCryptoCandles.dto.port';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import binanceBaseAssetSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceBaseAssetSymbols';

export const getAllCryptoCandlesHttp: GetAllCryptoCandles = (
  stock: DefaultCryptoSymbols,
  interval: string,
  fiat: CurrencySymbols = CurrencySymbols.USD,
) =>
  getMarketHttpClient()
    .get<BinanceCandle[]>('/api/v3/klines', {
      params: {
        symbol: `${(stock + binanceBaseAssetSymbols[fiat]).toUpperCase()}`,
        interval: `${interval}`,
      },
    })
    .then((data) => data.map(binanceCandleConverter));
