import React, { Fragment, useEffect, useRef, useState } from "react";
import AppName from "./components/appname/AppName";
import BarChart from "./components/chart/BarChart";
import { Card, Container } from "./components/containers/containers";
import { convertCurrency } from "./utils";
import { CurrencyRates } from "./types/types";
import Coins from "./assets/images/coins";
import ConverterBoard from "./components/conversionBoard/converterBoard";
import IllustrationOfCurrencies from "./assets/images/illustrationOfCurrencies";
import RateTable from "./components/rateTable/rateTable";
import ThemeIconTray from "./components/themeIconTray/ThemeIconTray";
import useThemeStore from "./hooks/useThemeStore";
import "./App.css";

async function getData() {
  let response = await fetch("/rates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = response.json();
  return data;
}

function App() {
  // states
  const [currency, setCurrency] = useState<CurrencyRates | undefined>();
  const [currencyList, setCurrencyList] = useState<string[]>([""]);
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark") as string) ?? true
  );
  useThemeStore(isDark);

  // Refs
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

    /*   //use mock data in development
    async function fetchMockData() {
      // fetching mock data from json server in development to prevent excessive api calls
      let res = await fetch("http://localhost:8080/apidata");
      let apidata = (await res.json()) as CurrencyRates[]; // json sever returns an array of objects
      let data = apidata[0];
      console.log(data);
      setCurrency(data);
      setCurrencyList([...Object.keys(data.rates)].sort());
    }
    fetchMockData(); */
  }, []);

  return (
    // the defualt theme is dark
    <Fragment>
      <Container
        className={` App ${isDark ? "App-dark-mode" : "App-light-mode"}`}
      >
        <Container className="header-container">
          <ThemeIconTray
            theme={isDark ? "dark" : "light"}
            lightModeEventHandler={() => setIsDark(() => false)}
            darkModeEVentHandler={() => setIsDark(() => true)}
          />
          <AppName className={isDark ? "app-name-dark" : "app-name-light"} />
          <Container className="coin-container">
            <Coins className="coin-image-svg" />
          </Container>
        </Container>
        <Container className="features-container">
          <Container className="flex-column">
            <Card
              variant="medium"
              className={`converter-board-container ${
                isDark ? "dark-theme" : "light-theme"
              }`}
            >
              <ConverterBoard
                theme={isDark ? "dark" : "light"}
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
          <IllustrationOfCurrencies
            className="girl-illustration"
            theme={isDark ? "dark" : "light"}
          />
          <RateTable
            base={currency?.base}
            rates={currency?.rates}
            tableTheme={isDark ? "dark" : "light"}
          />
        </Container>
      </Container>
    </Fragment>
  );
}

export default App;
