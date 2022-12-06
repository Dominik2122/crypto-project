import create from 'zustand';
import { AllCryptoStockMarketState } from 'modules/stock-market/application/infrastructure/allCryptoStockMarketState';
import CryptoStockMarket from 'modules/stock-market/domain/CryptoStockMarket';

const checkIfExistsAndUpdateMutable = (
  list: CryptoStockMarket[],
  newValue: CryptoStockMarket,
): CryptoStockMarket[] => {
  const dataIndex = list.findIndex(
    (crypto) => crypto.tickerSymbol.symbol === newValue?.tickerSymbol.symbol,
  );
  if (dataIndex >= 0) {
    list.splice(dataIndex, 1, newValue);
  } else {
    list.push(newValue);
  }
  return list;
};

const useAllCryptoTickerState = create<AllCryptoStockMarketState>()((set) => ({
  tickers: [],
  updateOne: (ticker: CryptoStockMarket) =>
    set((state) => {
      const stateTickersCopy = [...state.tickers];
      checkIfExistsAndUpdateMutable(stateTickersCopy, ticker);
      return { ...state, tickers: stateTickersCopy };
    }),
  updateAll: (tickers: CryptoStockMarket[]) =>
    set((state) => {
      const stateTickersCopy = [...state.tickers];
      tickers.forEach((ticker) => checkIfExistsAndUpdateMutable(stateTickersCopy, ticker));
      return { ...state, tickers: stateTickersCopy };
    }),
}));

export default useAllCryptoTickerState;
