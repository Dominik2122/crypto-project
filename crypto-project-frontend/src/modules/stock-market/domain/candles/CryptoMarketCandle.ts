export default class CryptoMarketCandle {
  constructor(
    public readonly openPrice: number,
    public readonly closePrice: number,
    public readonly date: Date,
  ) {}
}
