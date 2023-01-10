import Stocks from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export type LoadSpecificCryptoStocks = (stocks: Stocks[], fiat?: CurrencySymbols) => void;
