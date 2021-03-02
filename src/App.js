import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import InitialCurrency from "./component/InitialCurrency";
import FinalCurrency from "./component/FinalCurrency";

function App() {
  // hooks
  const [currency, setCurrency] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  // data from the api
  useEffect(() => {
    async function fetchData() {
      const URL = "https://api.exchangeratesapi.io/latest";
      const response = await fetch(URL);
      const data = await response.json();
      setCurrency(data);
      setCurrencyList([data?.base, ...Object.keys(data?.rates)].sort()); // set current list as array starting with the base currency and adding the rest
    }
    fetchData();
  }, []);
  // selectors
  const input = document.querySelector("#input");
  const output = document.querySelector("#output");
  const currencyFrom = document.querySelector(".currency-from");
  const currencyTo = document.querySelector(".currency-to");
  // Function to convert the currencies
  const convertForward = () => {
    let initialCurrency = currencyFrom.value;
    let finalCurrency = currencyTo.value;
    let Rates = currency.rates;
    if (input.value === "") {
      output.value = "";
      return;
    } else if (currencyFrom.value === currencyTo.value) {
      output.value = input.value;
    } else if (currencyTo.value === "EUR") {
      output.value =
        parseFloat(input.value) / parseFloat(Rates[initialCurrency]);
    } else if (currencyFrom.value === "EUR") {
      output.value = parseFloat(input.value) * parseFloat(Rates[finalCurrency]);
    } else if (currencyFrom !== "EUR" && currencyTo !== "EUR") {
      output.value =
        (input.value / Rates[initialCurrency]) * Rates[finalCurrency];
    }
  };

  return (
    <Fragment>
      <div className="App">
        <h1>Jvert</h1>
        <form>
          <InitialCurrency currencyOption={currencyList} />
          <button
            onClick={(e) => {
              e.preventDefault();
              convertForward();
            }}>
            {" "}
            ={" "}
          </button>
          <FinalCurrency currencyOption={currencyList} />
        </form>
      </div>
    </Fragment>
  );
}

export default App;
