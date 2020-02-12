// everything is pure randome

export interface Strategy {
  calculate(income: number, percent: number): number;
}

export class CaliforniaTaxesStrategy implements Strategy {
  public calculate(income: number, percent: number): number {
    return income * percent / 100 * 5;
  }
}

export class MichiganTaxesStrategy implements Strategy {
  public calculate(income: number, percent: number): number {
    return income * percent / 100 + 10;
  }
}

export class NewYorkTaxesStrategy implements Strategy {
  public calculate(income: number, percent: number): number {
    return income * percent / 100 + income;
  }
}
