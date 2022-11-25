import create from 'zustand';
import { AllCryptoStockMarketState } from 'modules/stock-market/application/infrastructure/allCryptoStockMarketState';
import CryptoStockMarket from 'modules/stock-market/domain/CryptoStockMarket';

const useAllCryptoTickerState = create<AllCryptoStockMarketState>()((set) => ({
  tickers: [],
  updateOne: (ticker: CryptoStockMarket) =>
    set((state) => {
      const stateTickersCopy = [...state.tickers];
      const liveDataCryptoIndex = stateTickersCopy.findIndex(
        (crypto) => crypto.name === ticker?.name,
      );
      if (liveDataCryptoIndex >= 0) {
        stateTickersCopy.splice(liveDataCryptoIndex, 1, ticker);
      } else {
        stateTickersCopy.push(ticker);
      }
      return { ...state, tickers: stateTickersCopy };
    }),
}));

export default useAllCryptoTickerState;
