import { useEffect, useState } from 'react';
import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';
import { LoadCryptoStockMarketsCommand } from '@/modules/stock-market/application/command/loadCryptoCandles';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import { getAllCryptoCandleStick } from '@/modules/stock-market/insfrastructure/http/getAllCryptoCandleStick';
import CryptoStockMarketCandle from '@/modules/stock-market/domain/CryptoStockMarketCandle';

export const useLoadOneCrypto: LoadCryptoStockMarketsCommand = (
  stock: CryptoSymbols,
  fiat?: CurrencySymbols,
) => {
  const [candles, setCandles] = useState<CryptoStockMarketCandle[]>([]);

  useEffect(() => {
    getAllCryptoCandleStick(stock, '5m', fiat).then((data) => setCandles(data));
  }, []);

  return candles;
};
