import React, { Fragment, useEffect, useRef, useState } from "react";
import AppName from "./components/appname/AppName";
import { Card, Container } from "./components/containers/containers";
import ConverterBoard from "./components/conversionBoard/converterBoard";
import RateTable from "./components/rateTable/rateTable";
import { convertCurrency } from "./utils";
import IllustrationOfCurrencies from "./assets/images/illustrationOfCurrencies";
import ThemeIconTray from "./components/themeIconTray/ThemeIconTray";
import Coins from "./assets/images/coins";
import { CurrencyRates } from "./types/types";
import BarChart from "./components/chart/BarChart";
import "./App.css";

async function getData() {
  let response = await fetch("/rates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = (await response).json();
  return data;
}

function App() {
  const [currency, setCurrency] = useState<CurrencyRates | undefined>();
  const [currencyList, setCurrencyList] = useState<string[]>([""]);
  const inputField = useRef<HTMLInputElement>(null);
  const outputField = useRef<HTMLInputElement>(null);
  const currencyFrom = useRef<HTMLSelectElement>(null);
  const currencyTo = useRef<HTMLSelectElement>(null);
  const fieldRefs = {
    inputField: inputField.current as HTMLInputElement,
    outputField: outputField.current as HTMLInputElement,
    currencyFrom: currencyFrom.current as HTMLSelectElement,
    currencyTo: currencyTo.current as HTMLSelectElement,
  };

  useEffect(() => {
       getData().then((data: CurrencyRates | undefined) => {
      if (data) {
        setCurrency(data);
        setCurrencyList([...Object.keys(data.rates)].sort());
      }
    });

   /*
      use mock data in development
      async function fetchMockData() {
      // fetching mock data from json server in development to prevent excessive api calls
      let res = await fetch("http://localhost:8080/apidata");
      let apidata = (await res.json()) as CurrencyRates[]; // json sever returns an array of objects
      let data = apidata[0];
      setCurrency(data);
      setCurrencyList([...Object.keys(data.rates)].sort());
    }
    fetchMockData(); */
  }, []);

  return (
    // the defualt theme is dark
    <Fragment>
      <Container className="header-container">
        <ThemeIconTray />
        <AppName />
        <Coins className="coin-image-svg" />
      </Container>
      <Container className="app-container">
        <Container className="flex-column">
          <Card variant="medium" className="converter-board-container">
            <ConverterBoard
              FieldRefs={{
                InputField: inputField,
                OutputField: outputField,
                CurrencyFrom: currencyFrom,
                CurrencyTo: currencyTo,
              }}
              SelectorCurrencyOptions={currencyList}
              buttonClickEvent={(e) => {
                e.preventDefault();
                convertCurrency(fieldRefs, currency);
              }}
              selectChangeEvent={() => convertCurrency(fieldRefs, currency)}
            />
          </Card>
          <BarChart
            base={currency?.base}
            className="bar-chart"
            rates={currency?.rates}
          />
        </Container>
        <IllustrationOfCurrencies className="girl-illustration" />
        <RateTable base={currency?.base} rates={currency?.rates} />
      </Container>
    </Fragment>
  );
}

export default App;
