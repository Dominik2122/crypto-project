import create from 'zustand';
import { AllCryptoStocksStatsStatePort } from '@/modules/stock-market/application/infrastructure/market-stats/allCryptoStocksStats.state.port';
import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';

const checkIfExistsAndUpdateMutable = (
  list: CryptoStockMarket[],
  newValue: CryptoStockMarket,
): CryptoStockMarket[] => {
  const dataIndex = list.findIndex(
    (crypto) => crypto.tickerSymbol.baseAsset.name === newValue?.tickerSymbol.baseAsset.name,
  );
  if (dataIndex >= 0) {
    list.splice(dataIndex, 1, newValue);
  } else {
    list.push(newValue);
  }
  return list;
};

const useAllCryptoStockData = create<AllCryptoStocksStatsStatePort>()((set) => ({
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

export default useAllCryptoStockData;
