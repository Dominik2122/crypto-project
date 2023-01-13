import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import { useQuoteAssetState } from '@/modules/stock-market/insfrastructure/state/quoteAsset.state';

export const useSetQuoteAsset = () => useQuoteAssetState((state) => state.updateQuoteAsset);

export const useQuoteAsset = (): QuoteAssetsSymbols => {
  const quoteAsset = useQuoteAssetState((state) => state.quoteAsset);
  if (!quoteAsset) {
    return QuoteAssetsSymbols.USD;
  }
  return quoteAsset;
};
