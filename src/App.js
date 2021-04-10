import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import InitialCurrency from "./component/InitialCurrency";
import FinalCurrency from "./component/FinalCurrency";
import "./staticData.json";

function App() {
  // hooks
  const staticData = require("./staticData.json");
  const [currency, setCurrency] = useState(staticData);
  const [currencyList, setCurrencyList] = useState(
    [...Object.keys(staticData.rates)].sort()
  );
  // data from the api
  /*  useEffect(() => {
    async function fetchData() {
      const URL =
        "https://api.currencyfreaks.com/latest?apikey=87588fa449c74031b56efad8e4e93f73";
      const response = await fetch(URL);
      const data = await response.json();
      setCurrency(data);
      console.log(data);
      setCurrencyList([...Object.keys(data?.rates)].sort()); // set current list as array starting with the base currency and adding the rest
    }
    fetchData();
  }, []) */
  // selectors
  const input = document.querySelector("#input");
  const output = document.querySelector("#output");
  const currencyFrom = document.querySelector(".currency-from");
  const currencyTo = document.querySelector(".currency-to");
  // Function to convert the currencies
  const convertForward = () => {
    let initialCurrency = currencyFrom?.value;
    let finalCurrency = currencyTo?.value;
    let Rates = currency?.rates;
    if (input.value === "") {
      output.value = "";
      return;
    }
    if (currencyFrom.value === currencyTo.value) output.value = input.value;
    if (currencyTo.value === "USD")
      output.value =
        parseFloat(input.value) / parseFloat(Rates[initialCurrency]);
    if (currencyFrom.value === "USD")
      output.value = parseFloat(input.value) * parseFloat(Rates[finalCurrency]);
    return (output.value =
      (input.value / Rates[initialCurrency]) * Rates[finalCurrency]);
  };

  return (
    <Fragment>
      <div className="App">
        <h1>Jvert</h1>
        <form>
          <InitialCurrency currencyOption={currencyList} />
          <button
            onClick={() => {
              convertForward();
            }}
          >
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
