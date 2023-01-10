import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import TickerSymbol from '@/modules/stock-market/domain/TickerSymbol';
import { useLoadOneCrypto } from '@/modules/stock-market/application/oneCryptoCandles.hooks';

const dateFormatter = (date: Date) => `${date.getHours()}:${date.getMinutes()}`;
export const CryptoPriceChart = ({ ticker }: { ticker: TickerSymbol }) => {
  const data = useLoadOneCrypto(ticker.baseAsset, ticker.quoteAsset);
  return (
    <ResponsiveContainer width="100%" height={500} aspect={2}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {data.length ? (
          <>
            <XAxis
              domain={['auto', 'auto']}
              dataKey="date"
              interval={100}
              tickFormatter={dateFormatter}
            />
            <YAxis domain={['auto', 'auto']} />
            <Area type="monotone" dataKey="openPrice" stroke="#8884d8" fill="#8884d8" />
          </>
        ) : null}
      </AreaChart>
    </ResponsiveContainer>
  );
};
