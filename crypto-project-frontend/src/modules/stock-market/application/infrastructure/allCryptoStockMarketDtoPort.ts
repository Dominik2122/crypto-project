import CryptoStockMarket from 'modules/stock-market/domain/CryptoStockMarket';
import Tickers from 'modules/stock-market/domain/Tickers';

export type AllCryptoStockMarketDtoPort = (stocks?: Tickers[]) => CryptoStockMarket | undefined;
