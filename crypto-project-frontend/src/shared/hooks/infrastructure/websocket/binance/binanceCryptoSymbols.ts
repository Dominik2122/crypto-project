import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';

const binanceCryptoSymbols: Record<DefaultCryptoSymbols, string> = {
  [DefaultCryptoSymbols.BTC]: 'btc',
  [DefaultCryptoSymbols.ETH]: 'eth',
  [DefaultCryptoSymbols.SOL]: 'sol',
  [DefaultCryptoSymbols.ADA]: 'ada',
  [DefaultCryptoSymbols.DOGE]: 'doge',
};

export default binanceCryptoSymbols;
