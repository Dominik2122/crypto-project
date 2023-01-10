export default class CryptoStockMarketCandle {
  constructor(
    public readonly openPrice: number,
    public readonly closePrice: number,
    public readonly date: Date,
  ) {}
}
