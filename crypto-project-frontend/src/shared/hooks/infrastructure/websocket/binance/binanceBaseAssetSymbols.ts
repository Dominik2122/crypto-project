import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

const binanceBaseAssetSymbols: Record<CurrencySymbols, string> = {
  [CurrencySymbols.USD]: 'USDT',
  [CurrencySymbols.EUR]: 'EUR',
  [CurrencySymbols.PLN]: 'PLN',
  [CurrencySymbols.AUD]: 'AUD',
  [CurrencySymbols.GBP]: 'GBP',
  [CurrencySymbols.BTC]: 'BTC',
  [CurrencySymbols.ETH]: 'ETH',
  [CurrencySymbols.BUSD]: 'BUSD',
  [CurrencySymbols.BNB]: 'BNB',
  [CurrencySymbols.DAI]: 'DAI',
  [CurrencySymbols.XRP]: 'XRP',
  [CurrencySymbols.NONE]: 'NONE',
};

export default binanceBaseAssetSymbols;
