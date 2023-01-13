import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useGetAllCandles } from '@/modules/stock-market/application/allCryptoCandles.hooks';
import { useQuoteAsset } from '@/modules/stock-market/application/contextQuoteAsset.hooks';
import { useDesktopMediaQuery } from '@/shared/components/layout/media-query/Desktop';
import { getAssetSymbol } from '@/shared/components/ui/symbols/GetAssetSymbolOrEmpty';

const dateFormatter = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
export const CryptoPriceChart = () => {
  const data = useGetAllCandles();
  const isDesktop = useDesktopMediaQuery();
  const quoteAsset = useQuoteAsset();
  return (
    <ResponsiveContainer aspect={2}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {data?.length ? (
          <>
            <XAxis
              domain={['auto', 'auto']}
              dataKey="date"
              interval={isDesktop ? 90 : 200}
              dy={5}
              dx={isDesktop ? 40 : 10}
              tickFormatter={dateFormatter}
            />
            <YAxis dy={-5} domain={['auto', 'auto']} unit={getAssetSymbol(quoteAsset)} />
            <Area type="monotone" dataKey="openPrice" stroke="#8884d8" fill="#8884d8" />
          </>
        ) : null}
      </AreaChart>
    </ResponsiveContainer>
  );
};
