import React, { useState, useEffect, useRef, Fragment } from "react";
import { RateInfo, StaticData, convertForward } from "./utils";
import CurrencyInputField from "./component/CurrencyInputField";
import "./style.css";

const CURRENCYFREAKS_API_KEY = process.env.REACT_APP_CURRENCYFREAKS_API_KEY;

function App() {
  // hooks
  const [currency, setCurrency] = useState<RateInfo>(StaticData());
  const [currencyList, setCurrencyList] = useState(
    [...Object.keys(StaticData().rates)].sort()
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLInputElement>(null);
  const currencyFromRef = useRef<HTMLSelectElement>(null);
  const currencyToRef = useRef<HTMLSelectElement>(null);
  const ConverterHandlerRefs = {
    input: inputRef.current,
    output: outputRef.current,
    currencyFrom: currencyFromRef.current,
    currencyTo: currencyToRef.current,
  };

  // data from the api
  useEffect(() => {
    async function fetchData() {
      const URL: string = `https://api.currencyfreaks.com/latest?apikey=${CURRENCYFREAKS_API_KEY}`;
      const response = await fetch(URL);
      const data = (await response.json()) as RateInfo;
      if (data === undefined || data === null) return;
      setCurrency(data);
      let listOfCurrencies = [...Object.keys(data?.rates)];
      setCurrencyList(listOfCurrencies.sort()); // setting the currency list as an array of currency shortnames in alphabetical order
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="App">
        <h1 id="heading-text">Jvert</h1>
        <form className="converting-section">
          <CurrencyInputField
            id="input"
            className="currency-from"
            inputFieldRef={inputRef}
            selectorRef={currencyFromRef}
            currencyOption={currencyList}
            onChange={() => convertForward(currency, ConverterHandlerRefs)}
          />
          <button
            className="convert-button"
            onClick={(e) => {
              e.preventDefault();
              convertForward(currency, ConverterHandlerRefs);
            }}
          >
            =
          </button>
          <CurrencyInputField
            id="output"
            className="currency-to"
            inputFieldRef={outputRef}
            selectorRef={currencyToRef}
            currencyOption={currencyList}
            onChange={() => convertForward(currency, ConverterHandlerRefs)}
          />
        </form>
      </div>
    </Fragment>
  );
}

export default App;
