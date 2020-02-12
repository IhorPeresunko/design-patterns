import { Strategy } from "./Strategy";

export default class TaxCalculator {
  private strategy: Strategy | null = null;
  private income: number;

  constructor(income: number) {
    this.income = income;
  }

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public calculate(percent: number): number {
    if (!this.strategy) {
      throw new Error('Strategy is not defined');
    }

    return this.strategy.calculate(this.income, percent);
  }
}
