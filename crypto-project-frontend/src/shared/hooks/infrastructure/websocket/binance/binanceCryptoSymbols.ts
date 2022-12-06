import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';

const binanceCryptoSymbols: Record<CryptoSymbols, string> = {
  [CryptoSymbols.BTC]: 'btc',
  [CryptoSymbols.ETH]: 'eth',
  [CryptoSymbols.SOL]: 'sol',
  [CryptoSymbols.ADA]: 'ada',
  [CryptoSymbols.DOGE]: 'doge',
};

export default binanceCryptoSymbols;
