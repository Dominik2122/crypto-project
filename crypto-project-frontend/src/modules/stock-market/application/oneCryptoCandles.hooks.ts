import { useEffect, useState } from 'react';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import { LoadCryptoCandles } from '@/modules/stock-market/application/command/loadCryptoCandles';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import { getAllCryptoCandlesHttp } from '@/modules/stock-market/insfrastructure/http/getAllCryptoCandles.http';
import CryptoStockMarketCandle from '@/modules/stock-market/domain/candles/CryptoStockMarketCandle';

export const useLoadOneCrypto: LoadCryptoCandles = (
  stock: DefaultCryptoSymbols,
  fiat?: CurrencySymbols,
) => {
  const [candles, setCandles] = useState<CryptoStockMarketCandle[]>([]);

  useEffect(() => {
    getAllCryptoCandlesHttp(stock, '5m', fiat).then((data) => setCandles(data));
  }, []);

  return candles;
};
