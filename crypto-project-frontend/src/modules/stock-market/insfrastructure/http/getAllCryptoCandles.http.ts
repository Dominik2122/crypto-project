import { GetAllCryptoCandlesDtoPort } from '@/modules/stock-market/application/infrastructure/getAllCryptoCandleDtoPort';
import { AssetSymbol } from '@/modules/stock-market/domain/AssetSymbol';
import CryptoMarketCandle from '@/modules/stock-market/domain/candles/CryptoMarketCandle';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import { BinanceCandleDto } from '@/modules/stock-market/insfrastructure/http/dto/BinanceCandleDto';
import { getMarketHttpClient } from '@/shared/hooks/infrastructure/http/httpClient';
import binanceBaseAssetSymbols from '@/shared/hooks/infrastructure/websocket/binance/binanceBaseAssetSymbols';

const binanceCandleConverter = (data: BinanceCandleDto) =>
  new CryptoMarketCandle(Number(data[1]), Number(data[4]), new Date(data[0]));

export const getAllCryptoCandleStick: GetAllCryptoCandlesDtoPort = (
  stock: AssetSymbol,
  interval: string,
  fiat: QuoteAssetsSymbols,
) =>
  getMarketHttpClient()
    .get<BinanceCandleDto[]>('/api/v3/klines', {
      params: {
        symbol: `${(stock.name + binanceBaseAssetSymbols[fiat]).toUpperCase()}`,
        interval: `${interval}`,
      },
    })
    .then((data) => data.map(binanceCandleConverter));
