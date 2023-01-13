import create from 'zustand';
import { GlobalQuoteAssetStatePort } from '@/modules/stock-market/application/infrastructure/global-quote-asset/globalQuoteAsset.state.port';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';

export const useQuoteAssetState = create<GlobalQuoteAssetStatePort>()((set) => ({
  quoteAsset: undefined,
  updateQuoteAsset(asset: QuoteAssetsSymbols) {
    set(() => ({ quoteAsset: asset }));
  },
}));
