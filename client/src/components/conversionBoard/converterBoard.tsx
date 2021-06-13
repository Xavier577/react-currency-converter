import React, { FC, Fragment } from "react";
import { ConverterBoardChildrenProp } from "../../types/types";
import { Card } from "../containers/containers";
import CurrencyInputField from "./currencyInputField";
import SelectorField from "./selectorField";
import "./inputField.css";

const ConverterBoard: FC<ConverterBoardChildrenProp> = ({
  FieldRefs,
  SelectorCurrencyOptions,
  onClick,
}) => {
  const { InputField, OutputField, CurrencyFrom, CurrencyTo } = FieldRefs;
  return (
    <Fragment>
      <Card variant="medium" className="converter-board">
        <form className="flex-space-between">
          <div className="column">
            <CurrencyInputField inputRef={InputField} />
            <SelectorField
              selectRef={CurrencyFrom}
              currencyOptions={SelectorCurrencyOptions}
            />
          </div>
          <div className="column space">
            <button onClick={onClick}>Convert</button>
          </div>
          <div className="column">
            <CurrencyInputField inputRef={OutputField} />
            <SelectorField
              selectRef={CurrencyTo}
              currencyOptions={SelectorCurrencyOptions}
            />
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default ConverterBoard;
