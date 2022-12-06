export default class CryptoStockMarketStats {
  constructor(
    public readonly tradedAssetVolume: number,
    public readonly totalNumberOfTrades: number,
    public readonly priceChangePercent: number,
  ) {}
}
