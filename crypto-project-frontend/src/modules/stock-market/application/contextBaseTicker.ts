import { useEffect } from 'react';
import { ContextBaseAssetStatePort } from '@/modules/stock-market/application/infrastructure/context-base-asset/contextBaseAsset.state.port';
import { useContextBaseAssetState } from '@/modules/stock-market/insfrastructure/state/contextBaseAsset.state';

export const useContextBaseAsset = () => {
  const baseAssetState: ContextBaseAssetStatePort = useContextBaseAssetState((state) => ({
    baseAsset: state.baseAsset,
    updateBaseAsset: state.updateBaseAsset,
  }));
  useEffect(() => () => baseAssetState.updateBaseAsset(undefined), []);
  return baseAssetState;
};
