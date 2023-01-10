export class CryptoStockMarketCandlesInterval {
  constructor(public readonly value: number, public readonly timePeriod: 'm' | 'h' | 'd' | 'y') {}
}
