export class CryptoMarketCandlesInterval {
  constructor(
    public readonly value: number,
    public readonly timePeriod: 'm' | 'h' | 'd' | 'M' | 'y' | 'w',
  ) {}

  isSame(other: CryptoMarketCandlesInterval) {
    return other.timePeriod === this.timePeriod && other.value === this.value;
  }
}
