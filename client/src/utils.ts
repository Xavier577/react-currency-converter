import { CurrencyRates, FormFieldTypes } from "./types/types";

export function convertCurrency(
  { inputField, outputField, currencyFrom, currencyTo }: FormFieldTypes,
  currencyRate: CurrencyRates | undefined
) {
  if (currencyRate) {
    try {
      const Rate = currencyRate.rates;
      const Base = currencyRate.base;
      if (Rate) {
        let input = inputField;
        let output = outputField;
        let calculatedResults: number;
        if (input.value === "") {
          output.value = "";
        } else if (currencyFrom.value === currencyTo.value) {
          output.value = input.value;
        } else if (currencyFrom.value === Base) {
          calculatedResults =
            parseFloat(input.value) * parseFloat(Rate[currencyTo.value]);
          output.value = calculatedResults.toString();
        } else if (currencyTo.value === Base) {
          calculatedResults =
            parseFloat(input.value) / parseFloat(Rate[currencyFrom.value]);
          output.value = calculatedResults.toString();
        } else {
          calculatedResults =
            (parseFloat(input.value) / parseFloat(Rate[currencyFrom.value])) *
            parseFloat(Rate[currencyTo.value]);
          output.value = calculatedResults.toString();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
