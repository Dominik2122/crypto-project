import { useEffect, useMemo, useState } from 'react';
import { SetCryptoCandlesInterval } from '@/modules/stock-market/application/command/candles/setCryptoCandlesInterval';
import { useContextBaseAsset } from '@/modules/stock-market/application/contextBaseTicker';
import { useQuoteAsset } from '@/modules/stock-market/application/contextQuoteAsset.hooks';
import { GetAllCandles } from '@/modules/stock-market/application/query/candles/getAllCandles';
import CryptoMarketCandle from '@/modules/stock-market/domain/candles/CryptoMarketCandle';
import { CryptoMarketCandlesInterval } from '@/modules/stock-market/domain/candles/CryptoMarketCandlesInterval';
import { getAllCryptoCandleStick } from '@/modules/stock-market/insfrastructure/http/getAllCryptoCandles.http';
import { cryptoMarketCandles } from '@/modules/stock-market/insfrastructure/state/cryptoMarketCandles.state';

export const useSetCryptoCandlesInterval: SetCryptoCandlesInterval = () =>
  cryptoMarketCandles((state) => state.setInterval);
export const useCurrentInterval = () => {
  const interval = cryptoMarketCandles((state) => state.interval);
  const defaultInterval = useMemo(() => new CryptoMarketCandlesInterval(5, 'm'), []);
  return interval ?? defaultInterval;
};

export const useGetAllCandles: GetAllCandles = () => {
  const interval = useCurrentInterval();
  const { baseAsset } = useContextBaseAsset();
  const quoteAsset = useQuoteAsset();
  const [data, setData] = useState<CryptoMarketCandle[]>();
  useEffect(() => {
    if (baseAsset && quoteAsset) {
      getAllCryptoCandleStick(
        baseAsset,
        `${interval.value + interval.timePeriod}`,
        quoteAsset,
      ).then((candles) => setData(candles));
    }
  }, [baseAsset, quoteAsset, interval]);
  return data;
};
