import {
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from "react";

export interface ContainerProp {
  children?: ReactNode;
  className?: string;
}
export interface CardProp extends ContainerProp {
  variant?: "large" | "medium" | "small" | "custom-size";
}
export interface ConverterBoardChildrenProp {
  base?: string;
  buttonClickEvent?: MouseEventHandler<HTMLButtonElement>;
  FieldRefs: InputFieldRefTypes;
  SelectorCurrencyOptions: string[];
  selectChangeEvent?: ChangeEventHandler<HTMLSelectElement>;
  theme?: Theme;
}
export interface CurrencyInputFieldProp {
  inputRef?: RefObject<HTMLInputElement>;
  theme?: Theme;
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
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  theme?: Theme;
}
export interface TableProp {
  base?: string;
  rates?: {
    [currency: string]: string;
  };
  tableTheme?: Theme;
}

export type Theme = "light" | "dark";

export interface ThemeIconTrayProp {
  theme?: Theme;
  lightModeEventHandler?: MouseEventHandler<SVGSVGElement>;
  darkModeEVentHandler?: MouseEventHandler<SVGSVGElement>;
}

export interface ThemeToggleButton {
  theme?: Theme;
  className?: string;
  clickEvent?: MouseEventHandler<SVGSVGElement>;
}
