import staticJson from "./StaticData.json";

interface ConverterHandlerProp {
  input: HTMLInputElement | null;
  output: HTMLInputElement | null;
  currencyFrom: HTMLSelectElement | null;
  currencyTo: HTMLSelectElement | null;
}

export interface RateInfo {
  date: string;
  base: string;
  rates: {
    [index: string]: string;
  };
}

export function StaticData() {
  return staticJson; // static data for incase of api blockage or other factors(such as being offline)
}

export function convertForward(
  currency: RateInfo,
  { input, output, currencyFrom, currencyTo }: ConverterHandlerProp
) {
  // this is the function that converts the currencies
  if (input && output && currencyFrom && currencyTo) {
    let initialCurrency: string = currencyFrom.value;
    let finalCurrency: string = currencyTo.value;
    let Rates = currency.rates;
    if (input.value === "") {
      output.value = "";
      return;
    } else if (currencyFrom.value === currencyTo.value) {
      output.value = input.value;
    } else if (currencyTo.value === "USD") {
      output.value = (
        parseFloat(input.value) / parseFloat(Rates[initialCurrency])
      ).toString();
    } else if (currencyFrom.value === "USD") {
      output.value = (
        parseFloat(input.value) * parseFloat(Rates[finalCurrency])
      ).toString();
    } else if (currencyFrom.value !== "USD" && currencyTo.value !== "USD") {
      output.value = (
        (parseFloat(input.value) / parseFloat(Rates[initialCurrency])) *
        parseFloat(Rates[finalCurrency])
      ).toString();
    }
  }
}
