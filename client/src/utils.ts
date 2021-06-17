import { CurrencyRates, FormFieldTypes } from "./types/types";

/* 
Convert currency function converts the currency by using a simple algorithm
of converting the given currency to the base currency and then converting from that to the required currency
using the given rates in the currency rates object that is passed in as an aurgument

for instance,
if the function is to convert x NGN to EUR
first NGN would be converted to USD:
var NGN_to_USD = x / rates['NGN']
then to EUR:
var USD_to_EUR = NGN_to_USD * rates['EUR']
*/
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
