export default class CryptoStockMarketPrice {
  constructor(
    public readonly value: number,
    public readonly currency: string,
    public readonly date: Date,
  ) {}
}
