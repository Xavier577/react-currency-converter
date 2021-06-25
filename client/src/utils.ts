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

export function getRatePerBaseCurrency(
  currency: string,
  rates: CurrencyRates["rates"],
  base: CurrencyRates["base"]
): number {
  return parseFloat(rates[base]) / parseFloat(rates[currency]);
}

export function getTopFiveCurrencies(
  rates: CurrencyRates["rates"],
  base: CurrencyRates["base"]
) {
  let currencies = [...Object.keys(rates)]
  let data: {[currency: string]: number} = {}
  currencies.forEach(currency => {
    data[currency] = (getRatePerBaseCurrency(currency, rates, base))
  })

  let sortedDataMap = sortAccordingToRPB(data)
  let topCurrencies: string[] = []
  let topRPB: number[] = []
  let topFiveCurrencyData: {[currency: string]: number} = {}

  sortedDataMap.forEach((rpb, currency) => {
    topCurrencies.push(currency)
    topRPB.push(rpb)
  }) 

  let topFiveCurrencies: string[] = topCurrencies.slice(0,5)
  let topFiveRPB: number [] = topRPB.slice(0,5)

  topFiveCurrencies.forEach((currency,index) => {
    topFiveCurrencyData[currency] = topFiveRPB[index]
  })

 return {...topFiveCurrencyData};

}

// sorting function according to highest rates per base currency
function sortAccordingToRPB(data: {[currency: string]: number}) {
  let clonedData = { ...data }; // cloning the data to prevent direct mutation of data

  let currencies = [...Object.keys(clonedData)]; // taking the currency names
  let arrOfRPB = [...Object.values(clonedData)]; // taking their rates per usd

  let currencyInOrderOfRPB: string[] = new Array(currencies.length); // making an empty array that is supposed to hold the sorted data according to need cateria and has the same lenght as the array holding the currency names
  let sortedArrOfRPB = [...arrOfRPB].sort((a,b) => b - a); // sorting the rates from highest to lowest

  let previousIndexs: number[] = [];
  let currentIndexs: number[] = []; // array to keep track of the change of index from the previous indexs

  arrOfRPB.forEach((value, index) => {
    // iteration through the array storing the rates per usd and tracking changes to their index
    previousIndexs.push(index);
    currentIndexs.push(sortedArrOfRPB.indexOf(value));
  });

  currentIndexs.forEach((position, index) => {
    // apply the changes to the index of the values to their keys as well
    currencyInOrderOfRPB[position] = currencies[index];
  });

  // storing the data in a map and returning it
  let currencyRankMap = new Map<string, number>();

  currencyInOrderOfRPB.forEach((key, index) => {
    currencyRankMap.set(key, sortedArrOfRPB[index]);
  });
  return currencyRankMap;
}