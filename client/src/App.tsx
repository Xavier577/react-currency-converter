import React, { Fragment, useEffect, useRef, useState } from "react";
import AppName from "./components/appname/AppName";
import { Card, Container } from "./components/containers/containers";
import ConverterBoard from "./components/conversionBoard/converterBoard";
import RateTable from "./components/rateTable/rateTable";
import { convertCurrency } from "./utils";
import IllustrationOfCurrencies from "./assets/images/illustrationOfCurrencies";
import { CurrencyRates } from "./types/types";
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
  }, []);

  return (
    // the defualt theme is dark
    <Fragment>
      <Container className="header-container">
        <AppName />
      </Container>
      <Container className="app-container">
        <Container className="flexed-container">
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
        </Container>
        <IllustrationOfCurrencies className="girl-illustration" />
        <Container className="table-container">
          {/* <RateTable base={currency?.base} rates={currency?.rates} /> */}
        </Container>
      </Container>
    </Fragment>
  );
}

export default App;
