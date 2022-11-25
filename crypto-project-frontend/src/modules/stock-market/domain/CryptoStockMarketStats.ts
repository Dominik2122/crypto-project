export default class CryptoStockMarketStats {
  constructor(
    public readonly marketCap: string,
    public readonly typicalHoldTime: string,
    public readonly priceChangePercent: string,
  ) {}
}
