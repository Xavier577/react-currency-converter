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

export function getRatePerBaseCurrency(
  currency: string,
  rates: CurrencyRates["rates"],
  base: CurrencyRates["base"]
): number {
  return parseFloat(rates[base]) / parseFloat(rates[currency]);
}

export function getTopTenCurrencies(
  rates: CurrencyRates["rates"],
  base: CurrencyRates["base"]
) {
  let currencies = [...Object.keys(rates)];
  let data: { [currency: string]: number } = {};
  currencies.forEach((currency) => {
    data[currency] = getRatePerBaseCurrency(currency, rates, base);
  });

  let sortedData = sortAccordingToRPB(data);
  let topTenCurrencyEntries = Object.entries(sortedData).splice(0, 10);
  return { ...Object.fromEntries(topTenCurrencyEntries) };
}

function sortAccordingToRPB(data: { [currency: string]: number }) {
  let clonedData = { ...data }; // cloning the data to prevent direct mutation of data
  let dataEntries = [...Object.entries(clonedData)];
  let sortedEntries = [...dataEntries].sort((a, b) => (a[1] > b[1] ? -1 : 1)); // sort pairs according to the value which will be in the second index in this case
  return { ...Object.fromEntries(sortedEntries) };
}
