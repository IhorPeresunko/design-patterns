import TaxCalculator from "./TaxCalculator";
import { CaliforniaTaxesStrategy, NewYorkTaxesStrategy } from "./Strategy";

const income = 1000;
const taxCalculator = new TaxCalculator(income);

taxCalculator.setStrategy(new CaliforniaTaxesStrategy());
console.log(taxCalculator.calculate(10));

taxCalculator.setStrategy(new NewYorkTaxesStrategy());
console.log(taxCalculator.calculate(10));
