import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import AppName from "./components/appname/AppName";
import { Card, Container } from "./components/containers/containers";
import ConverterBoard from "./components/conversionBoard/converterBoard";
import RateTable from "./components/rateTable/rateTable";
import { convertCurrency } from "./utils";
import "./App.css";
import { CurrencyRates } from "./types/types";

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
  const [currency, setCurrency] = useState<CurrencyRates>() as [
    CurrencyRates,
    Dispatch<SetStateAction<CurrencyRates>>
  ];
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
        console.log(data);
        setCurrency(data);
        setCurrencyList([...Object.keys(data.rates)].sort());
      }
    });
  }, []);

  return (
    <Fragment>
      <Container className="app-container">
        <AppName />
        <Card>
          <ConverterBoard
            FieldRefs={{
              InputField: inputField,
              OutputField: outputField,
              CurrencyFrom: currencyFrom,
              CurrencyTo: currencyTo,
            }}
            SelectorCurrencyOptions={currencyList}
            onClick={(e) => {
              e.preventDefault();
              convertCurrency(fieldRefs, currency);
            }}
          />
        </Card>
        <Card>
          <RateTable base={currency.base} rates={currency.rates} />
        </Card>
      </Container>
    </Fragment>
  );
}

export default App;
