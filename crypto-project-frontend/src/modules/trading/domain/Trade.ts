import TickerSymbol from '@/modules/stock-market/domain/TickerSymbol';

export class Trade {
  constructor(
    public readonly ticker: TickerSymbol,
    public readonly amount: number,
    public readonly value: number,
  ) {}
}
