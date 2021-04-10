import React, { useState, useEffect, Fragment } from "react";
import "./style.css";
import InitialCurrency from "./component/InitialCurrency";
import FinalCurrency from "./component/FinalCurrency";
import "./StaticData.json";

// static data for incase of api blockage or other factors
function useStaticData() {
  const StaticData = require("./StaticData.json");
  return StaticData;
}

function App() {
  let StaticData = useStaticData();
  // hooks
  const [currency, setCurrency] = useState(StaticData);
  const [currencyList, setCurrencyList] = useState(
    [...Object.keys(StaticData?.rates)].sort()
  );
  // data from the api
  /*   useEffect(() => {
    async function fetchData() {
      const URL = `https://api.currencyfreaks.com/latest?apikey=${process.env.REACT_APP_CURRENCYFREAKS_API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      setCurrency(data);
      setCurrencyList([...Object.keys(data?.rates)].sort()); // setting the currency list as an array of currency shortnames in alphabetical order
    }
    fetchData();
  }, []); */
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
    } else if (currencyTo.value === "USD") {
      output.value =
        parseFloat(input.value) / parseFloat(Rates[initialCurrency]);
    } else if (currencyFrom.value === "USD") {
      output.value = parseFloat(input.value) * parseFloat(Rates[finalCurrency]);
    } else if (currencyFrom !== "USD" && currencyTo !== "USD") {
      output.value =
        (input.value / Rates[initialCurrency]) * Rates[finalCurrency];
    }
  };

  return (
    <Fragment>
      <div className="App">
        <h1 id="heading-text">Jvert</h1>
        <form className="converting-section">
          <InitialCurrency currencyOption={currencyList} />
          <button
            className="convert-button"
            onClick={(e) => {
              e.preventDefault();
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
