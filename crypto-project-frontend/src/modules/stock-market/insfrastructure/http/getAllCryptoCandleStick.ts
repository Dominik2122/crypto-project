import { getMarketHttpClient } from '@/shared/hooks/infrastructure/http/httpClient';
import {
  BinanceCandle,
  binanceCandleConverter,
} from '@/shared/hooks/infrastructure/websocket/binance/BinanceSymbolTicker';
import { GetAllCryptoCandles } from '@/modules/stock-market/application/infrastructure/getAllCryptoCandle';
import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import binanceBaseAssetSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceBaseAssetSymbols';

export const getAllCryptoCandleStick: GetAllCryptoCandles = (
  stock: CryptoSymbols,
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
