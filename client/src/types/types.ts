import { MouseEventHandler, ReactNode, RefObject } from "react";

export interface ContainerProp {
  children?: ReactNode;
  className?: string;
}
export interface CardProp extends ContainerProp {
  variant?: "large" | "medium" | "small" | "custom-size";
}
export interface ConverterBoardChildrenProp {
  FieldRefs: InputFieldRefTypes;
  SelectorCurrencyOptions: string[];
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export interface CurrencyInputFieldProp {
  inputRef?: RefObject<HTMLInputElement>;
}
export interface CurrencyRates {
  date: string;
  base: string;
  rates: {
    [currency: string]: string;
  };
}
export interface FormFieldTypes {
  inputField: HTMLInputElement;
  outputField: HTMLInputElement;
  currencyFrom: HTMLSelectElement;
  currencyTo: HTMLSelectElement;
}
export interface InputFieldRefTypes {
  InputField: RefObject<HTMLInputElement>;
  OutputField: RefObject<HTMLInputElement>;
  CurrencyFrom: RefObject<HTMLSelectElement>;
  CurrencyTo: RefObject<HTMLSelectElement>;
}
export interface SelectorFieldProp {
  selectRef?: RefObject<HTMLSelectElement>;
  currencyOptions: string[];
}
export interface TableProp {
  base: string;
  rates: {
    [currency: string]: string;
  };
}
