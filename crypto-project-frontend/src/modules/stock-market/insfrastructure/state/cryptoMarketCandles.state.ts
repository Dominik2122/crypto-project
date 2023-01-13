import create from 'zustand';
import { AllCryptoCandlesStatePort } from '@/modules/stock-market/application/infrastructure/candles/allCryptoCandles.state.port';

export const cryptoMarketCandles = create<AllCryptoCandlesStatePort>()((set) => ({
  setInterval: (interval) => {
    set((state) => ({ ...state, interval }));
  },
  interval: undefined,
}));
